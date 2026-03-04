import React, { useRef, useEffect } from 'react';
import videoSrc from '../../assets/Photo_To_High_Quality_Video.mp4';

export function TechNeural() {
    const canvasRef = useRef(null);
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const animFrameRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const container = containerRef.current;
        if (!canvas || !video || !container) return;

        const ctx = canvas.getContext('2d');

        const resize = () => {
            const rect = container.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = rect.width + 'px';
            canvas.style.height = rect.height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const drawFrame = () => {
            const w = canvasRef.current?.width;
            const h = canvasRef.current?.height;
            if (!w || !h) return;

            const rect = container.getBoundingClientRect();
            const cw = rect.width;
            const ch = rect.height;

            // Clear canvas
            ctx.clearRect(0, 0, cw, ch);

            // Calculate font size based on container width
            const fontSize = Math.max(cw * 0.16, 36);
            const lineHeight = fontSize * 1.1;
            const centerX = cw / 2;
            const totalHeight = lineHeight * 2;
            const startY = (ch - totalHeight) / 2 + fontSize * 0.8;
            const line1Y = startY;
            const line2Y = startY + lineHeight;

            ctx.font = `900 ${fontSize}px Impact, "Arial Black", sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.letterSpacing = `${fontSize * 0.05}px`;

            // 1. Gold 3D extrusion layers
            const layers = [
                { color: '#8A681B', dx: 4, dy: 4 },
                { color: '#B88E2F', dx: 3, dy: 3 },
                { color: '#D4AF37', dx: 1, dy: 1 },
            ];

            layers.forEach(({ color, dx, dy }) => {
                ctx.fillStyle = color;
                ctx.fillText('GREEN', centerX + dx, line1Y + dy);
                ctx.fillText('SPHERE', centerX + dx, line2Y + dy);
            });

            // 2. Draw video clipped to text shape
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = 'red'; // dummy
            ctx.fillText('GREEN', centerX, line1Y);
            ctx.fillText('SPHERE', centerX, line2Y);

            // Use compositing to clip video to text
            ctx.globalCompositeOperation = 'source-in';

            // Draw video to fill canvas area
            if (video.readyState >= 2) {
                const vw = video.videoWidth;
                const vh = video.videoHeight;
                const scale = Math.max(cw / vw, ch / vh);
                const sw = vw * scale;
                const sh = vh * scale;
                ctx.drawImage(video, (cw - sw) / 2, (ch - sh) / 2, sw, sh);
            }

            ctx.restore();

            // 3. Gold stroke outline on top
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = '#FFDF73';
            ctx.lineWidth = 2;
            ctx.strokeText('GREEN', centerX, line1Y);
            ctx.strokeText('SPHERE', centerX, line2Y);

            animFrameRef.current = requestAnimationFrame(drawFrame);
        };

        const onVideoReady = () => {
            resize();
            drawFrame();
        };

        video.addEventListener('loadeddata', onVideoReady);
        window.addEventListener('resize', resize);

        // If video already ready
        if (video.readyState >= 2) {
            onVideoReady();
        }

        return () => {
            video.removeEventListener('loadeddata', onVideoReady);
            window.removeEventListener('resize', resize);
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    return (
        <section className="relative w-full flex flex-col items-center justify-center bg-[#f5efe6] overflow-hidden py-8 sm:py-12 md:py-14 lg:py-16 z-0">
            {/* Faint background texture */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />

            <div className="relative w-full max-w-[1920px] mx-auto flex flex-col items-center z-10 px-4 sm:px-8 md:px-12">
                {/* Hidden video element */}
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hidden"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>

                {/* Canvas container */}
                <div
                    ref={containerRef}
                    className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[1000px]"
                    style={{ aspectRatio: '1000 / 450' }}
                >
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}
