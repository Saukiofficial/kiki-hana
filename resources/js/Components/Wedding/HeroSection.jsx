import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';
import { BotanicalFlourish, DutchStampSeal } from '../UI/BotanicalOrnament';

export default function HeroSection({ invitation }) {
    const groom = invitation.groom || invitation.couples?.find(c => c.role === 'groom');
    const bride = invitation.bride || invitation.couples?.find(c => c.role === 'bride');
    const groomName = groom?.nickname || 'Syauqi';
    const brideName = bride?.nickname || 'Hana';

    const formattedDate = new Date(invitation.wedding_date).toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const heroImage = invitation?.hero_image || "/images/wedding/prewed-08.jpg";

    return (
        <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between items-center pt-16 pb-12 px-4 sm:px-6 text-center overflow-hidden bg-javanese-heritage">
            {/* Ambient Background Image with Javanese Mood */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 filter contrast-115 pointer-events-none"
                style={{ backgroundImage: `url(${heroImage})` }}
            />

            {/* Top Tagline */}
            <div className="flex flex-col items-center gap-2 mt-4 relative z-10">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.38em] text-[#DFC285] font-semibold font-sans">
                    Pawiwahan Ageng • The Sacred Wedding
                </span>
                <BotanicalFlourish className="w-28 sm:w-36 h-6 text-[#C9A45C]" />
            </div>

            {/* Main Editorial Names */}
            <div className="my-6 max-w-3xl relative z-10">
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E8DCC8] font-light leading-[1.05] tracking-tight drop-shadow-md">
                    <span>{groomName}</span>
                    <span className="font-signature text-4xl sm:text-5xl md:text-6xl text-[#C9A45C] mx-3 inline-block -rotate-6">
                        &
                    </span>
                    <span>{brideName}</span>
                </h1>
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#DFC285]/90 mt-3 font-light">
                    Dua Insan, Satu Janji Suci Abadi
                </p>
            </div>

            {/* Central Hero Portrait with Heritage Gebyok Double Arch Frame */}
            <div className="relative my-4 max-w-xs sm:max-w-sm md:max-w-md w-full mx-auto z-10">
                <div className="arch-frame-double p-2 bg-[#1C1416] shadow-2xl border border-[#C9A45C]/50">
                    <div className="arch-frame overflow-hidden aspect-[3/4] relative bg-[#2A1D20]">
                        <img
                            src={heroImage}
                            alt={`${groomName} & ${brideName}`}
                            className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.05] transition-transform duration-1000 hover:scale-105"
                            loading="eager"
                        />
                        {/* Subtle Warm Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Rotating Royal Seal floating on side */}
                <div className="absolute -bottom-5 -right-3 sm:-right-6 hidden xs:block z-20">
                    <DutchStampSeal text="PAWIWAHAN • AGENG" year="2026" className="w-20 sm:w-24 h-20 sm:h-24 bg-[#181214]/95 rounded-full shadow-2xl border border-[#C9A45C] p-1 text-[#E8DCC8]" />
                </div>
            </div>

            {/* Date & Location Bar */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#E8DCC8] font-sans relative z-10">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C9A45C]" />
                    <span className="tracking-wide font-medium text-[#E8DCC8]">{formattedDate}</span>
                </div>
                <span className="hidden sm:inline text-[#C9A45C]">✦</span>
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C9A45C]" />
                    <span className="tracking-wide font-medium text-[#E8DCC8]">Sumenep, Madura</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#quote"
                className="mt-8 inline-flex flex-col items-center gap-1 text-[#E8DCC8]/70 hover:text-[#DFC285] transition-colors group cursor-pointer relative z-10"
            >
                <span className="text-[9px] uppercase tracking-[0.28em] font-sans">Gulir ke Bawah</span>
                <ChevronDown className="w-4 h-4 text-[#C9A45C] animate-bounce" />
            </a>
        </section>
    );
}
