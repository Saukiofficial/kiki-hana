import React from 'react';

/**
 * JavaneseBatikDivider / BotanicalFlourish
 * Antique Gold divider with traditional Javanese diamond & lotus motif.
 */
export const BotanicalFlourish = ({ className = "w-32 h-6 text-[#C9A45C]", ...props }) => (
    <svg viewBox="0 0 220 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        {/* Center Javanese Surya / Diamond Motif */}
        <path d="M110 4 L115 18 L110 32 L105 18 Z" fill="currentColor" opacity="0.95" />
        <circle cx="110" cy="18" r="2.5" fill="#111111" />
        <circle cx="110" cy="18" r="1.2" fill="#E8DCC8" />

        {/* Outer Center Accents */}
        <circle cx="110" cy="2" r="1.2" fill="currentColor" />
        <circle cx="110" cy="34" r="1.2" fill="currentColor" />

        {/* Left Traditional Javanese Filigree Wing */}
        <path d="M102 18 C85 18 74 11 58 13 C44 14.5 30 22 8 18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M86 17 C81 11 74 9 70 13 C73 16 80 17 86 17 Z" fill="currentColor" opacity="0.8" />
        <path d="M62 14 C58 8 50 7 46 12 C51 15 57 15 62 14 Z" fill="currentColor" opacity="0.7" />
        <path d="M40 17 C35 22 28 21 26 16 C31 15 37 16 40 17 Z" fill="currentColor" opacity="0.65" />
        <circle cx="75" cy="10" r="1.5" fill="currentColor" opacity="0.9" />
        <circle cx="53" cy="8" r="1.5" fill="currentColor" opacity="0.9" />
        <circle cx="31" cy="21" r="1.5" fill="currentColor" opacity="0.9" />

        {/* Right Traditional Javanese Filigree Wing (Mirrored) */}
        <path d="M118 18 C135 18 146 11 162 13 C176 14.5 190 22 212 18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M134 17 C139 11 146 9 150 13 C147 16 140 17 134 17 Z" fill="currentColor" opacity="0.8" />
        <path d="M158 14 C162 8 170 7 174 12 C169 15 163 15 158 14 Z" fill="currentColor" opacity="0.7" />
        <path d="M180 17 C185 22 192 21 194 16 C189 15 183 16 180 17 Z" fill="currentColor" opacity="0.65" />
        <circle cx="145" cy="10" r="1.5" fill="currentColor" opacity="0.9" />
        <circle cx="167" cy="8" r="1.5" fill="currentColor" opacity="0.9" />
        <circle cx="189" cy="21" r="1.5" fill="currentColor" opacity="0.9" />
    </svg>
);

/**
 * GununganCrest / FiligreeCrest
 * Royal Javanese Gunungan Wayang & Surya Majapahit Crest in Antique Gold.
 */
export const FiligreeCrest = ({ className = "w-28 h-10 text-[#C9A45C]", ...props }) => (
    <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        {/* Stylized Gunungan Apex */}
        <path d="M80 3 L85 17 L80 32 L75 17 Z" fill="currentColor" opacity="0.95" />
        <circle cx="80" cy="17" r="3" fill="#111111" />
        <circle cx="80" cy="17" r="1.5" fill="#E8DCC8" />
        <circle cx="80" cy="2" r="2" fill="currentColor" />
        <circle cx="80" cy="33" r="1.5" fill="currentColor" />

        {/* Crown of Surya Majapahit rays */}
        <path d="M80 6 C72 13 62 13 54 18 C64 20 72 18 80 18 C88 18 96 20 106 18 C98 13 88 13 80 6 Z" fill="currentColor" opacity="0.85" />

        {/* Left Wing */}
        <path d="M75 18 C62 18 52 11 39 13 C26 15 15 24 2 20 C11 18 20 11 34 13 C47 15 58 24 72 22" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M59 15 C52 8 43 7 38 12 C45 15 53 16 59 15 Z" fill="currentColor" opacity="0.8" />
        <path d="M33 14 C26 9 19 12 16 16 C21 18 29 18 33 14 Z" fill="currentColor" opacity="0.7" />
        <path d="M49 21 C42 27 33 25 30 20 C37 19 44 20 49 21 Z" fill="currentColor" opacity="0.65" />
        <circle cx="3" cy="20" r="1.8" fill="currentColor" />
        <circle cx="24" cy="11" r="1.4" fill="currentColor" />
        <circle cx="47" cy="9" r="1.4" fill="currentColor" />

        {/* Right Wing (Mirrored) */}
        <path d="M85 18 C98 18 108 11 121 13 C134 15 145 24 158 20 C149 18 140 11 126 13 C113 15 102 24 88 22" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M101 15 C108 8 117 7 122 12 C115 15 107 16 101 15 Z" fill="currentColor" opacity="0.8" />
        <path d="M127 14 C134 9 141 12 144 16 C139 18 131 18 127 14 Z" fill="currentColor" opacity="0.7" />
        <path d="M111 21 C118 27 127 25 130 20 C123 19 116 20 111 21 Z" fill="currentColor" opacity="0.65" />
        <circle cx="157" cy="20" r="1.8" fill="currentColor" />
        <circle cx="136" cy="11" r="1.4" fill="currentColor" />
        <circle cx="113" cy="9" r="1.4" fill="currentColor" />
    </svg>
);

/**
 * MiniFiligreeCrest
 * Delicate Javanese header crest for cards.
 */
export const MiniFiligreeCrest = ({ className = "w-20 h-6 text-[#C9A45C]", ...props }) => (
    <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <path d="M50 2 L54 13 L50 24 L46 13 Z" fill="currentColor" />
        <circle cx="50" cy="13" r="1.6" fill="#111111" />
        <path d="M46 13 C36 13 28 8 20 10 C12 12 6 18 0 15 C6 13 12 8 20 10 C28 12 36 18 45 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M54 13 C64 13 72 8 80 10 C88 12 94 18 100 15 C94 13 88 8 80 10 C72 12 64 18 55 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
);

/**
 * JavaneseCorner / BotanicalCorner
 * Authentic Javanese Gebyok & Jepara wood carving corner engraving.
 */
export const BotanicalCorner = ({ className = "w-16 h-16 text-[#C9A45C]/80", position = "top-left", ...props }) => {
    const rotation = {
        "top-left": "rotate-0",
        "top-right": "rotate-90",
        "bottom-right": "rotate-180",
        "bottom-left": "-rotate-90",
    }[position] || "rotate-0";

    return (
        <svg 
            viewBox="0 0 80 80" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={`${className} ${rotation} pointer-events-none transition-transform`} 
            {...props}
        >
            <path d="M4 76 L4 14 C4 8.48 8.48 4 14 4 L76 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M10 70 L10 18 C10 13.58 13.58 10 18 10 L70 10" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" />
            
            {/* Javanese Ukiran Motif Leaflets in corner */}
            <path d="M12 12 C20 25 30 27 36 21 C28 19 21 14 12 12 Z" fill="currentColor" opacity="0.8" />
            <path d="M12 12 C25 20 27 30 21 36 C19 28 14 21 12 12 Z" fill="currentColor" opacity="0.8" />
            <circle cx="26" cy="26" r="2.2" fill="currentColor" opacity="0.9" />
            <circle cx="4" cy="4" r="3.2" fill="currentColor" />
            <circle cx="15" cy="4" r="1.6" fill="currentColor" />
            <circle cx="4" cy="15" r="1.6" fill="currentColor" />
        </svg>
    );
};

/**
 * FloralRoseCluster
 * Red traditional wedding floral cluster (bunga mawar merah & melati).
 */
export const FloralRoseCluster = ({ className = "w-36 h-36", position = "top-left", src = "/images/icon/bunga.png", ...props }) => {
    const transform = {
        "top-left": "rotate(0deg)",
        "top-right": "scaleX(-1)",
        "bottom-left": "scaleY(-1)",
        "bottom-right": "scale(-1)",
    }[position] || "rotate(0deg)";

    return (
        <div className={`pointer-events-none ${className} select-none`} style={{ transform }} {...props}>
            <img
                src={src}
                alt="Traditional Floral"
                className="w-full h-full object-contain filter drop-shadow-2xl brightness-[0.92] contrast-[1.12]"
                loading="eager"
            />
        </div>
    );
};

/**
 * JavaneseRoyalSeal / DutchStampSeal
 * Rotating royal seal with Javanese wedding typography.
 */
export const DutchStampSeal = ({ text = "PAWIWAHAN AGENG", year = "2026", className = "w-24 h-24", ...props }) => (
    <div className={`relative flex items-center justify-center select-none ${className}`} {...props}>
        <svg viewBox="0 0 120 120" className="w-full h-full text-[#C9A45C] animate-spin-slow">
            <path
                id="textPath-seal"
                d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                fill="none"
            />
            <text className="text-[7.5px] uppercase tracking-[0.28em] fill-current font-serif font-semibold">
                <textPath href="#textPath-seal" startOffset="0%">
                    ✦ {text} ✦ {year} ✦
                </textPath>
            </text>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-serif text-[11px] font-medium tracking-widest text-[#E8DCC8]">F & P</span>
            <span className="font-serif text-[9px] text-[#C9A45C] font-light">Est. {year}</span>
        </div>
    </div>
);

/**
 * VintageDivider
 * Minimal line divider with antique gold diamond.
 */
export const VintageDivider = ({ className = "my-6" }) => (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
        <span className="h-[1px] w-14 bg-gradient-to-r from-transparent via-[#C9A45C]/60 to-[#C9A45C]" />
        <span className="w-2 h-2 rotate-45 border border-[#C9A45C] bg-[#7A1820]" />
        <span className="h-[1px] w-14 bg-gradient-to-l from-transparent via-[#C9A45C]/60 to-[#C9A45C]" />
    </div>
);
