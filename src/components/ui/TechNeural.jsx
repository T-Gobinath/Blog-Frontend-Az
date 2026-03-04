import React from 'react';
import videoSrc from '../../assets/Photo_To_High_Quality_Video.mp4';

export function TechNeural() {
    return (
        <section className="relative w-full min-h-[20vh] sm:min-h-[22vh] md:min-h-[28vh] lg:min-h-[30vh] flex flex-col items-center justify-center bg-[#f5efe6] overflow-hidden py-6 sm:py-8 md:py-10 lg:py-12 z-0">
            {/* Very faint background texture to give it a premium feel */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />

            <div className="relative w-full max-w-[1920px] mx-auto flex flex-col items-center z-10 px-6 sm:px-8 md:px-12">

                {/* SVG for clipping the video and drawing the 3D stroke/shadow */}
                <svg viewBox="0 20 1000 240" className="w-full h-auto max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[1000px]" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <mask id="videoMask">
                            <rect width="100%" height="100%" fill="black" />
                            <text x="50%" y="120" textAnchor="middle" fill="white" fontSize="110" fontWeight="900" fontFamily='Impact, "Arial Black", sans-serif' letterSpacing="0.05em">GREEN</text>
                            <text x="50%" y="230" textAnchor="middle" fill="white" fontSize="110" fontWeight="900" fontFamily='Impact, "Arial Black", sans-serif' letterSpacing="0.05em">SPHERE</text>
                        </mask>
                        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                        </filter>
                    </defs>

                    {/* 1. Soft Black Drop Shadow */}
                    <g transform="translate(6, 6)">
                        <text x="50%" y="120" textAnchor="middle" fill="rgba(0,0,0,0.8)" fontSize="110" fontWeight="900" fontFamily='Impact, "Arial Black", sans-serif' letterSpacing="0.05em" filter="url(#softShadow)">GREEN</text>
                        <text x="50%" y="230" textAnchor="middle" fill="rgba(0,0,0,0.8)" fontSize="110" fontWeight="900" fontFamily='Impact, "Arial Black", sans-serif' letterSpacing="0.05em" filter="url(#softShadow)">SPHERE</text>
                    </g>

                    {/* 2. Deep Gold Extrusion */}
                    <g transform="translate(4, 4)">
                        <text x="50%" y="120" textAnchor="middle" fill="#8A681B" fontSize="110" fontWeight="900" fontFamily='Impact, "Arial Black", sans-serif' letterSpacing="0.05em">GREEN</text>
                        <text x="50%" y="230" textAnchor="middle" fill="#8A681B" fontSize="110" fontWeight="900" fontFamily='Impact, "Arial Black", sans-serif' letterSpacing="0.05em">SPHERE</text>
                    </g>

                    {/* 3. Mid Gold Extrusion */}
                    <g transform="translate(3, 3)">
                        <text x="50%" y="120" textAnchor="middle" fill="#B88E2F" fontSize="110" fontWeight="900" fontFamily='Impact, "Arial Black", sans-serif' letterSpacing="0.05em">GREEN</text>
                        <text x="50%" y="230" textAnchor="middle" fill="#B88E2F" fontSize="110" fontWeight="900" fontFamily='Impact, "Arial Black", sans-serif' letterSpacing="0.05em">SPHERE</text>
                    </g>

                    {/* 4. Top Gold Extrusion */}
                    <g transform="translate(1, 1)">
                        <text x="50%" y="120" textAnchor="middle" fill="#D4AF37" fontSize="110" fontWeight="900" fontFamily='Impact, "Arial Black", sans-serif' letterSpacing="0.05em">GREEN</text>
                        <text x="50%" y="230" textAnchor="middle" fill="#D4AF37" fontSize="110" fontWeight="900" fontFamily='Impact, "Arial Black", sans-serif' letterSpacing="0.05em">SPHERE</text>
                    </g>

                    {/* 5. The Video Layer */}
                    <foreignObject x="0" y="0" width="100%" height="100%" mask="url(#videoMask)">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%' }}>
                            <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                                <source src={videoSrc} type="video/mp4" />
                            </video>
                        </div>
                    </foreignObject>

                    {/* 6. Gold Stroke Envelope */}
                    <g>
                        <text x="50%" y="120" textAnchor="middle" fill="transparent" stroke="#FFDF73" strokeWidth="2" fontSize="110" fontWeight="900" fontFamily='Impact, "Arial Black", sans-serif' letterSpacing="0.05em">GREEN</text>
                        <text x="50%" y="230" textAnchor="middle" fill="transparent" stroke="#FFDF73" strokeWidth="2" fontSize="110" fontWeight="900" fontFamily='Impact, "Arial Black", sans-serif' letterSpacing="0.05em">SPHERE</text>
                    </g>
                </svg>
            </div>
        </section>
    );
}
