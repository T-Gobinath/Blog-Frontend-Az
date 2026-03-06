import React, { useRef, useEffect, useCallback } from 'react';
import videoSrc from '../../assets/Photo_To_High_Quality_Video.mp4';

export function TechNeural() {
    const canvasRef = useRef(null);
    const videoRef = useRef(null);
    const rafRef = useRef(null);

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        if (!canvas || !video) return;

        const ctx = canvas.getContext('2d');
        const parent = canvas.parentElement;
        const rect = parent.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        // Set canvas size to match container
        const w = rect.width;
        const h = rect.height;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.scale(dpr, dpr);

        // Clear
        ctx.clearRect(0, 0, w, h);

        // Font setup — responsive sizing
        const fontSize = w * 0.15;
        const gap = fontSize * 0.15;
        const totalTextH = fontSize * 2 + gap;
        const topY = (h - totalTextH) / 2 + fontSize;
        const bottomY = topY + fontSize + gap;
        const cx = w / 2;

        const fontStr = `900 ${fontSize}px Impact, "Arial Black", sans-serif`;
        ctx.font = fontStr;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';

        // Helper to draw both lines
        const drawText = (offsetX, offsetY) => {
            ctx.fillText('GREEN', cx + offsetX, topY + offsetY);
            ctx.fillText('SPHERE', cx + offsetX, bottomY + offsetY);
        };

        const strokeText = (offsetX, offsetY) => {
            ctx.strokeText('GREEN', cx + offsetX, topY + offsetY);
            ctx.strokeText('SPHERE', cx + offsetX, bottomY + offsetY);
        };

        // --- Layer 1: Drop shadow ---
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.fillStyle = '#6B5210';
        drawText(0, 0);
        ctx.restore();

        // --- Layer 2: 3D extrusion (bottom to top) ---
        const extrusionLayers = [
            { color: '#6B5210', dx: 5, dy: 5 },
            { color: '#8A681B', dx: 4, dy: 4 },
            { color: '#A07B22', dx: 3, dy: 3 },
            { color: '#B88E2F', dx: 2, dy: 2 },
            { color: '#D4AF37', dx: 1, dy: 1 },
        ];

        extrusionLayers.forEach(({ color, dx, dy }) => {
            ctx.fillStyle = color;
            drawText(dx, dy);
        });

        // --- Layer 3: Video fill clipped to text ---
        ctx.save();
        // Draw invisible text to create a path for clipping
        ctx.beginPath();

        // We need to use a clipping approach:
        // First fill text to create the shape, then composite video into it
        ctx.fillStyle = '#000';
        drawText(0, 0);

        // Composite: only draw video where text pixels exist
        ctx.globalCompositeOperation = 'source-in';

        if (video.readyState >= 2) {
            const vw = video.videoWidth;
            const vh = video.videoHeight;
            const scale = Math.max(w / vw, h / vh);
            const dw = vw * scale;
            const dh = vh * scale;
            ctx.drawImage(video, (w - dw) / 2, (h - dh) / 2, dw, dh);
        }

        ctx.restore();

        // --- Layer 4: Gold stroke outline on top ---
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = '#FFDF73';
        ctx.lineWidth = Math.max(1.5, fontSize * 0.015);
        ctx.lineJoin = 'round';
        strokeText(0, 0);

        rafRef.current = requestAnimationFrame(draw);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const startDrawing = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(draw);
        };

        video.addEventListener('playing', startDrawing);
        video.addEventListener('loadeddata', startDrawing);
        window.addEventListener('resize', startDrawing);

        // Start if already ready
        if (video.readyState >= 2) startDrawing();

        return () => {
            video.removeEventListener('playing', startDrawing);
            video.removeEventListener('loadeddata', startDrawing);
            window.removeEventListener('resize', startDrawing);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [draw]);

    return (
        <section className="relative w-full h-[280px] bg-[#f5efe6] overflow-hidden z-0">
            {/* Faint texture */}
            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
            />

            <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
                {/* Hidden video source */}
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-0 h-0 opacity-0 pointer-events-none"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>

                {/* Canvas wrapper — responsive width, fixed aspect ratio */}
                <div
                    className="w-[370px]"
                    style={{ aspectRatio: '2.2 / 1' }}
                >
                    <canvas
                        ref={canvasRef}
                        className="block w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}
