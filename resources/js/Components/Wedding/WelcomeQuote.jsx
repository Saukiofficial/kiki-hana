import React from 'react';
import { BotanicalCorner, BotanicalFlourish } from '../UI/BotanicalOrnament';

export default function WelcomeQuote({ invitation }) {
    return (
        <section id="quote" className="py-16 md:py-24 px-4 sm:px-6 bg-[#140F11] relative overflow-hidden">
            {/* Ambient Burgundy Glow */}
            <div className="absolute inset-0 bg-radial from-[#4A0D12]/30 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-3xl mx-auto relative bg-[#1B1315]/95 border-2 border-[#C9A45C]/55 p-6 sm:p-12 md:p-14 shadow-2xl text-center rounded-sm backdrop-blur-md">
                {/* Javanese Ukiran Corners */}
                <BotanicalCorner position="top-left" className="absolute top-2 left-2 w-10 h-10 sm:w-12 sm:h-12 text-[#C9A45C]/85" />
                <BotanicalCorner position="top-right" className="absolute top-2 right-2 w-10 h-10 sm:w-12 sm:h-12 text-[#C9A45C]/85" />
                <BotanicalCorner position="bottom-left" className="absolute bottom-2 left-2 w-10 h-10 sm:w-12 sm:h-12 text-[#C9A45C]/85" />
                <BotanicalCorner position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10 sm:w-12 sm:h-12 text-[#C9A45C]/85" />

                {/* Subtitle tag */}
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] font-sans font-semibold text-[#DFC285] block mb-4">
                    Kutipan Ayat Suci
                </span>

                <BotanicalFlourish className="w-28 sm:w-32 h-6 text-[#C9A45C] mx-auto mb-6" />

                {/* Arabic Quote in Glowing Antique Gold */}
                {invitation.quote_arabic && (
                    <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#DFC285] leading-loose sm:leading-loose mb-6 font-normal drop-shadow-sm" dir="rtl">
                        {invitation.quote_arabic}
                    </p>
                )}

                {/* Translation in Warm Ivory */}
                <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#E8DCC8]/90 leading-relaxed max-w-2xl mx-auto mb-4 font-light">
                    "{invitation.quote_translation}"
                </p>

                {/* Quote Source */}
                <span className="inline-block font-sans text-xs sm:text-sm font-semibold tracking-widest text-[#C9A45C] uppercase">
                    — {invitation.quote_source} —
                </span>
            </div>
        </section>
    );
}
