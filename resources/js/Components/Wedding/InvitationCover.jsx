import React from 'react';
import { motion } from 'motion/react';
import { MailOpen } from 'lucide-react';
import {
    FiligreeCrest,
    MiniFiligreeCrest,
    FloralRoseCluster
} from '../UI/BotanicalOrnament';

export default function InvitationCover({
    invitation,
    guestName,
    onOpen,
    isOpen,
}) {
    const groom = invitation.groom || invitation.couples?.find(c => c.role === 'groom');
    const bride = invitation.bride || invitation.couples?.find(c => c.role === 'bride');
    const groomName = (groom?.nickname || 'Syauqi').toUpperCase();
    const brideName = (bride?.nickname || 'Hana').toUpperCase();

    const weddingDateObj = new Date(invitation.wedding_date || '2026-09-28T08:00:00');
    const dayName = weddingDateObj.toLocaleDateString('id-ID', { weekday: 'long' }).toUpperCase(); // e.g. SENIN
    const dateFormatted = weddingDateObj.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.');

    const bgImage = "/images/wedding/couple-javanese.jpg";

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{
                opacity: isOpen ? 0 : 1,
                y: isOpen ? '-100%' : '0%',
                pointerEvents: isOpen ? 'none' : 'auto'
            }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111] overflow-y-auto overflow-x-hidden select-none"
        >
            {/* Desktop Ambient Background with Warm Burgundy & Charcoal Glow */}
            <div
                className="absolute inset-0 hidden md:block bg-cover bg-center filter blur-2xl opacity-35 scale-105"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/90 via-[#4A0D12]/40 to-[#111111]/95 pointer-events-none hidden md:block" />

            {/* Mobile-First Invitation Canvas (Max 430px wide, 100dvh on mobile) */}
            <div className="relative w-full max-w-[430px] h-[100dvh] max-h-[920px] bg-[#181314] overflow-hidden flex flex-col justify-between p-4 sm:p-6 shadow-2xl border-0 sm:border sm:border-[#C9A45C]/50 sm:rounded-sm">

                {/* 1. Full Bleed Background with Cinematic Dark Javanese Lighting */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <img
                        src={bgImage}
                        alt="Syauqi & Hana"
                        className="w-full h-full object-cover filter brightness-[0.78] contrast-[1.1]"
                    />

                    {/* Dark Burgundy & Charcoal Ambient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/85 via-[#4A0D12]/45 to-[#111111]/90 pointer-events-none" />
                    <div className="absolute inset-0 bg-radial from-transparent via-[#111111]/60 to-[#111111]/95 pointer-events-none" />
                </div>

                {/* 2. Top-Left Traditional Red Floral Accent */}
                <FloralRoseCluster
                    position="top-left"
                    className="absolute -top-3 -left-3 w-36 h-36 sm:w-44 sm:h-44 z-30 drop-shadow-2xl"
                />

                {/* 3. Bottom-Left & Bottom-Right Floral Accents */}
                <FloralRoseCluster
                    position="bottom-left"
                    className="absolute -bottom-4 -left-4 w-36 h-36 sm:w-44 sm:h-44 z-30 drop-shadow-2xl"
                />
                <FloralRoseCluster
                    position="bottom-right"
                    className="absolute -bottom-4 -right-4 w-36 h-36 sm:w-44 sm:h-44 z-30 drop-shadow-2xl"
                />

                {/* 4. Top Stepped Gebyok Arch Plaque */}
                <div className="relative z-10 w-full max-w-[340px] sm:max-w-[360px] mx-auto pt-5 pb-5 px-4 text-center my-auto">

                    {/* SVG Stepped Arch Border & Charcoal-Burgundy Glass Glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <svg viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                            <defs>
                                <linearGradient id="archGebyokDark" x1="160" y1="0" x2="160" y2="380" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#251619" stopOpacity="0.92" />
                                    <stop offset="50%" stopColor="#1E1416" stopOpacity="0.88" />
                                    <stop offset="100%" stopColor="#140E10" stopOpacity="0.85" />
                                </linearGradient>
                            </defs>

                            {/* Main Arch Shape with Stepped Javanese Gebyok Header */}
                            <path
                                d="M 160 8
                                   C 145 18, 128 20, 114 26
                                   C 106 30, 98 34, 94 42
                                   C 88 52, 78 58, 66 64
                                   C 46 74, 28 92, 22 114
                                   C 18 126, 16 142, 16 160
                                   L 16 376
                                   L 304 376
                                   L 304 160
                                   C 304 142, 302 126, 298 114
                                   C 292 92, 274 74, 254 64
                                   C 242 58, 232 52, 226 42
                                   C 222 34, 214 30, 206 26
                                   C 192 20, 175 18, 160 8 Z"
                                fill="url(#archGebyokDark)"
                                stroke="#C9A45C"
                                strokeWidth="1.8"
                            />

                            {/* Inner Fine Antique Gold Line */}
                            <path
                                d="M 160 14
                                   C 147 22, 131 24, 118 30
                                   C 111 34, 103 38, 99 46
                                   C 94 55, 84 61, 73 67
                                   C 54 77, 36 94, 30 115
                                   C 26 127, 24 142, 24 160
                                   L 24 370
                                   L 296 370
                                   L 296 160
                                   C 296 142, 294 127, 290 115
                                   C 284 94, 266 77, 247 67
                                   C 236 61, 226 55, 221 46
                                   C 217 38, 209 34, 202 30
                                   C 189 24, 173 22, 160 14 Z"
                                stroke="#C9A45C"
                                strokeWidth="0.9"
                                strokeOpacity="0.8"
                            />
                        </svg>
                    </div>

                    {/* Top Gunungan Crest */}
                    <div className="relative pt-3 mb-1.5">
                        <FiligreeCrest className="w-24 sm:w-28 h-7 sm:h-8 text-[#C9A45C] mx-auto drop-shadow-sm" />
                    </div>

                    {/* "THE WEDDING OF" */}
                    <p className="relative font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.36em] text-[#DFC285] font-semibold mb-1.5">
                        Pawiwahan Ageng
                    </p>

                    {/* Couple Names in Warm Ivory */}
                    <div className="relative my-2 sm:my-2.5">
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.14em] text-[#E8DCC8] font-light leading-tight">
                            {groomName}
                        </h1>

                        <div className="font-pinyon text-3xl sm:text-4xl text-[#C9A45C] my-0.5 select-none -rotate-3 leading-none drop-shadow-xs">
                            &
                        </div>

                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.14em] text-[#E8DCC8] font-light leading-tight">
                            {brideName}
                        </h1>
                    </div>

                    {/* Middle Filigree Divider */}
                    <div className="relative my-2">
                        <FiligreeCrest className="w-20 sm:w-22 h-5 text-[#C9A45C] mx-auto opacity-95" />
                    </div>

                    {/* Wedding Date & Day */}
                    <div className="relative pb-2">
                        <p className="font-serif text-sm sm:text-base tracking-[0.28em] text-[#E8DCC8] font-semibold">
                            {dateFormatted}
                        </p>
                        <p className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.34em] text-[#C9A45C] font-semibold mt-0.5">
                            {dayName}
                        </p>
                    </div>
                </div>

                {/* 5. Bottom Card Section: Guest Panel + Button Overlap */}
                <div className="relative z-20 w-full max-w-[340px] sm:max-w-[360px] mx-auto mb-2 sm:mb-3">

                    {/* Guest Box with Deep Burgundy & Antique Gold Borders */}
                    <div className="relative bg-[#1A1214]/95 backdrop-blur-md border border-[#C9A45C]/60 rounded-xs shadow-2xl pt-3.5 pb-8 px-4 text-center">

                        {/* Inner Double Gold Border */}
                        <div className="absolute inset-1 border border-[#C9A45C]/35 pointer-events-none" />

                        {/* Mini Top Crest on Card */}
                        <MiniFiligreeCrest className="w-14 h-4 text-[#C9A45C] mx-auto mb-1 opacity-90" />

                        {/* Recipient Label */}
                        <p className="font-cinzel text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.34em] text-[#C9A45C] font-bold leading-tight mb-0.5">
                            Yth.
                        </p>
                        <p className="font-cinzel text-[8px] sm:text-[8.5px] uppercase tracking-[0.2em] text-[#E8DCC8]/75 mb-1 font-medium">
                            Bapak/Ibu/Saudara/i
                        </p>

                        {/* Guest Name in Classic Script */}
                        <div className="my-1">
                            <p className="font-pinyon text-3xl sm:text-4xl text-[#DFC285] font-normal leading-tight drop-shadow-xs capitalize">
                                {guestName || 'Tamu Undangan'}
                            </p>
                            <p className="font-serif italic text-sm text-[#E8DCC8]/85 mt-0.5 font-light">
                                Yang Berbahagia
                            </p>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-[7.5px] sm:text-[8px] uppercase tracking-[0.14em] font-sans text-[#E8DCC8]/60 mt-2 font-medium leading-tight">
                            Mohon maaf apabila ada kesalahan<br />penulisan nama/gelar
                        </p>
                    </div>

                    {/* 6. Button "BUKA UNDANGAN" Overlapping the Bottom of Guest Card */}
                    <div className="relative -mt-5 flex justify-center z-30">
                        <button
                            onClick={onOpen}
                            className="group relative inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 rounded-xs bg-gradient-to-r from-[#4A0D12] via-[#7A1820] to-[#4A0D12] hover:from-[#5C1218] hover:to-[#5C1218] text-[#F5EFE4] border-2 border-[#C9A45C] shadow-2xl transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                            style={{
                                boxShadow: '0 8px 25px -4px rgba(74, 13, 18, 0.6), 0 0 15px 0 rgba(201, 164, 92, 0.35)'
                            }}
                        >
                            {/* Inner Golden Stroke Accent */}
                            <div className="absolute inset-0.5 border border-[#DFC285]/40 pointer-events-none" />

                            <MailOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFC285] transition-transform group-hover:-translate-y-0.5 duration-200" />

                            <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.26em] font-semibold text-[#F5EFE4] drop-shadow-sm">
                                Buka Undangan
                            </span>
                        </button>
                    </div>

                </div>

            </div>
        </motion.div>
    );
}
