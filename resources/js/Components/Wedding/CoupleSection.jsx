import React from 'react';
import SectionHeader from '../UI/SectionHeader';
import { Heart } from 'lucide-react';
import { BotanicalFlourish } from '../UI/BotanicalOrnament';

const InstagramIcon = ({ className = "w-3.5 h-3.5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const formatInstagramUrl = (val) => {
    if (!val) return '';
    return val.startsWith('http') ? val : `https://instagram.com/${val.replace('@', '')}`;
};

const formatInstagramHandle = (val) => {
    if (!val) return '';
    return val
        .replace(/^https?:\/\/(www\.)?instagram\.com\//i, '')
        .split('?')[0]
        .replace(/\/$/, '')
        .replace('@', '');
};

export default function CoupleSection({ invitation }) {
    const groom = invitation.groom || invitation.couples?.find(c => c.role === 'groom');
    const bride = invitation.bride || invitation.couples?.find(c => c.role === 'bride');

    return (
        <section id="couple" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#111111] relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-radial from-[#4A0D12]/25 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <SectionHeader
                    tag="TEMANTEN"
                    title="Mempelai Pengantin"
                    subtitle="Dua Insan yang Disatukan dalam Ikatan Suci"
                    description="Dengan memohon ridho dan rahmat Allah Subhanahu Wa Ta'ala, kami menghaturkan rasa syukur atas dipertemukannya kedua mempelai."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
                    {/* Groom Card */}
                    <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-sm bg-[#1A1214]/95 border border-[#C9A45C]/50 shadow-2xl relative group backdrop-blur-xs">
                        {/* Heritage Gebyok Arch Photo Frame */}
                        <div className="w-48 sm:w-56 h-64 sm:h-72 arch-frame-double p-1.5 bg-[#25181B] mb-6 shadow-2xl border border-[#C9A45C]/40">
                            <div className="arch-frame overflow-hidden w-full h-full bg-[#2B211D]">
                                <img
                                    src={groom?.photo_url || "/images/wedding/prewed-07.jpg"}
                                    alt={groom?.full_name}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <span className="text-[10px] uppercase tracking-[0.28em] text-[#C9A45C] font-bold mb-1">
                            Mempelai Pria
                        </span>

                        <h3 className="font-serif text-2xl sm:text-3xl text-[#E8DCC8] font-normal leading-snug">
                            {groom?.full_name}
                        </h3>

                        <p className="font-serif italic text-sm text-[#DFC285] mt-1 mb-3 font-medium">
                            "{groom?.nickname}"
                        </p>

                        <BotanicalFlourish className="w-24 h-5 text-[#C9A45C] my-1" />

                        {(groom?.father_name || groom?.mother_name || groom?.child_order_text) && (
                            <div className="text-xs sm:text-sm text-[#E8DCC8]/80 space-y-1 mt-2 font-sans">
                                {groom?.child_order_text && <p className="font-light">{groom?.child_order_text}</p>}
                                {(groom?.father_name || groom?.mother_name) && (
                                    <p className="font-medium text-[#E8DCC8]">
                                        {groom?.father_name} {groom?.mother_name ? `& ${groom?.mother_name}` : ''}
                                    </p>
                                )}
                            </div>
                        )}

                        {groom?.bio && (
                            <p className="text-xs sm:text-sm text-[#E8DCC8]/75 font-light mt-4 px-2 italic max-w-xs leading-relaxed">
                                "{groom?.bio}"
                            </p>
                        )}

                        {groom?.instagram && (
                            <a
                                href={formatInstagramUrl(groom.instagram)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 mt-5 px-4 py-1.5 rounded-full border border-[#C9A45C]/50 text-xs text-[#E8DCC8] hover:text-[#F5EFE4] hover:border-[#C9A45C] bg-[#4A0D12]/50 hover:bg-[#5C1218] transition-colors font-medium shadow-md"
                            >
                                <InstagramIcon className="w-3.5 h-3.5 text-[#C9A45C]" />
                                <span>@{formatInstagramHandle(groom.instagram)}</span>
                            </a>
                        )}
                    </div>

                    {/* Bride Card */}
                    <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-sm bg-[#1A1214]/95 border border-[#C9A45C]/50 shadow-2xl relative group backdrop-blur-xs">
                        {/* Heritage Gebyok Arch Photo Frame */}
                        <div className="w-48 sm:w-56 h-64 sm:h-72 arch-frame-double p-1.5 bg-[#25181B] mb-6 shadow-2xl border border-[#C9A45C]/40">
                            <div className="arch-frame overflow-hidden w-full h-full bg-[#2B211D]">
                                <img
                                    src={bride?.photo_url || "/images/wedding/prewed-08.jpg"}
                                    alt={bride?.full_name}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <span className="text-[10px] uppercase tracking-[0.28em] text-[#C9A45C] font-bold mb-1">
                            Mempelai Wanita
                        </span>

                        <h3 className="font-serif text-2xl sm:text-3xl text-[#E8DCC8] font-normal leading-snug">
                            {bride?.full_name}
                        </h3>

                        <p className="font-serif italic text-sm text-[#DFC285] mt-1 mb-3 font-medium">
                            "{bride?.nickname}"
                        </p>

                        <BotanicalFlourish className="w-24 h-5 text-[#C9A45C] my-1" />

                        {(bride?.father_name || bride?.mother_name || bride?.child_order_text) && (
                            <div className="text-xs sm:text-sm text-[#E8DCC8]/80 space-y-1 mt-2 font-sans">
                                {bride?.child_order_text && <p className="font-light">{bride?.child_order_text}</p>}
                                {(bride?.father_name || bride?.mother_name) && (
                                    <p className="font-medium text-[#E8DCC8]">
                                        {bride?.father_name} {bride?.mother_name ? `& ${bride?.mother_name}` : ''}
                                    </p>
                                )}
                            </div>
                        )}

                        {bride?.bio && (
                            <p className="text-xs sm:text-sm text-[#E8DCC8]/75 font-light mt-4 px-2 italic max-w-xs leading-relaxed">
                                "{bride?.bio}"
                            </p>
                        )}

                        {bride?.instagram && (
                            <a
                                href={formatInstagramUrl(bride.instagram)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 mt-5 px-4 py-1.5 rounded-full border border-[#C9A45C]/50 text-xs text-[#E8DCC8] hover:text-[#F5EFE4] hover:border-[#C9A45C] bg-[#4A0D12]/50 hover:bg-[#5C1218] transition-colors font-medium shadow-md"
                            >
                                <InstagramIcon className="w-3.5 h-3.5 text-[#C9A45C]" />
                                <span>@{formatInstagramHandle(bride.instagram)}</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
