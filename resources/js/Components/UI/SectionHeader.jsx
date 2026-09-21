import React from 'react';
import { BotanicalFlourish } from './BotanicalOrnament';

export default function SectionHeader({
    tag = "PAWIWAHAN",
    title,
    subtitle,
    description,
    align = "center",
    className = "mb-10 md:mb-14",
}) {
    const alignmentClasses = {
        center: "text-center items-center",
        left: "text-left items-start",
        right: "text-right items-end",
    }[align] || "text-center items-center";

    return (
        <div className={`flex flex-col ${alignmentClasses} ${className}`}>
            {/* Traditional Javanese Tag */}
            {tag && (
                <div className="inline-flex items-center gap-2 px-4 py-1 mb-3 rounded-full bg-[#4A0D12]/70 border border-[#C9A45C]/50 shadow-md backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                    <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] font-sans font-semibold text-[#DFC285]">
                        {tag}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                </div>
            )}

            {/* Main Editorial Title in Warm Ivory */}
            {title && (
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#E8DCC8] font-normal leading-[1.15] tracking-tight drop-shadow-sm">
                    {title}
                </h2>
            )}

            {/* Subtitle / Script Accent in Antique Gold */}
            {subtitle && (
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#C9A45C] mt-1.5 font-medium">
                    {subtitle}
                </p>
            )}

            {/* Javanese Divider */}
            <div className="my-3">
                <BotanicalFlourish className="w-28 sm:w-36 h-6 text-[#C9A45C]" />
            </div>

            {/* Description Paragraph in Warm Ivory / Soft Cream */}
            {description && (
                <p className="max-w-xl text-sm sm:text-base text-[#E8DCC8]/85 font-light leading-relaxed px-2">
                    {description}
                </p>
            )}
        </div>
    );
}
