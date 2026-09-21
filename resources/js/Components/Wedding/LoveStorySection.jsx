import React from 'react';
import SectionHeader from '../UI/SectionHeader';
import { Sparkles, Heart } from 'lucide-react';

export default function LoveStorySection({ loveStories = [] }) {
    if (!loveStories || loveStories.length === 0) return null;

    return (
        <section id="story" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#151112] relative overflow-hidden">
            {/* Ambient Burgundy Glow */}
            <div className="absolute inset-0 bg-radial from-[#4A0D12]/20 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <SectionHeader
                    tag="LEMBARAN KISAH"
                    title="Kisah Kasih Kami"
                    subtitle="Setiap Detik yang Menuntun Menuju Hari Ini"
                    description="Perjalanan cinta yang kami rajut dengan kesabaran, rasa saling percaya, dan doa yang tak pernah putus."
                />

                {/* Vertical Timeline */}
                <div className="relative mt-16 before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-[#C9A45C]/60 before:to-transparent">
                    {loveStories.map((story, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={story.id || index}
                                className={`relative flex flex-col md:flex-row items-center gap-8 mb-14 md:mb-20 ${
                                    isEven ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Timeline Center Node / Royal Badge */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1A1214] border-2 border-[#C9A45C] flex items-center justify-center shadow-lg z-10">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#C9A45C]" />
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 ${isEven ? "md:text-left md:pl-10" : "md:text-right md:pr-10"}`}>
                                    <div className="bg-[#1A1214] border border-[#C9A45C]/50 p-6 sm:p-7 rounded-sm shadow-xl hover:border-[#C9A45C] transition-all backdrop-blur-xs">
                                        <span className="inline-block px-3.5 py-1 mb-2.5 rounded-full bg-[#4A0D12]/70 border border-[#C9A45C]/50 text-[10px] uppercase tracking-[0.22em] font-sans font-semibold text-[#DFC285]">
                                            {story.year_or_date}
                                        </span>

                                        <h3 className="font-serif text-xl sm:text-2xl text-[#E8DCC8] font-medium mb-2.5">
                                            {story.title}
                                        </h3>

                                        <p className="text-xs sm:text-sm text-[#E8DCC8]/80 font-light leading-relaxed whitespace-pre-line">
                                            {story.story}
                                        </p>
                                    </div>
                                </div>

                                {/* Image Side (if available) */}
                                <div className={`w-full md:w-1/2 ${isEven ? "md:pr-10" : "md:pl-10"}`}>
                                    {story.image_url ? (
                                        <div className="overflow-hidden rounded-sm border border-[#C9A45C]/50 aspect-[4/3] bg-[#25181B] shadow-md">
                                            <img
                                                src={story.image_url}
                                                alt={story.title}
                                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter brightness-[0.96] contrast-[1.04]"
                                                loading="lazy"
                                            />
                                        </div>
                                    ) : (
                                        <div className="hidden md:block" />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
