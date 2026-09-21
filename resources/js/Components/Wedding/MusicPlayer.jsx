import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ musicUrl, musicTitle, musicArtist, isPlaying, onToggle }) {
    if (!musicUrl) return null;

    return (
        <div className="fixed top-5 right-5 z-40 flex items-center gap-2">
            {/* Music Info Bubble on Desktop */}
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181214]/90 border border-[#C9A45C]/50 shadow-2xl text-[11px] font-sans text-[#E8DCC8] backdrop-blur-md">
                <Music className={`w-3.5 h-3.5 text-[#DFC285] ${isPlaying ? 'animate-bounce' : ''}`} />
                <span className="font-medium text-[#F5EFE4] max-w-[140px] truncate">
                    {musicTitle || "Satu Shaf Dibelakangku"}
                </span>
            </div>

            {/* Floating Music Disc Button */}
            <button
                onClick={onToggle}
                aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
                className={`relative p-2.5 sm:p-3 rounded-full bg-[#181214] text-[#DFC285] border-2 border-[#C9A45C] shadow-2xl hover:scale-105 transition-transform cursor-pointer group ${
                    isPlaying ? "animate-spin-slow" : ""
                }`}
                style={{
                    boxShadow: '0 8px 24px -4px rgba(74, 13, 18, 0.5), 0 0 12px 0 rgba(201, 164, 92, 0.3)'
                }}
            >
                {isPlaying ? (
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#DFC285]" />
                ) : (
                    <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8DCC8]/60" />
                )}

                {/* Animated Sound Wave Bars when Playing */}
                {isPlaying && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A45C] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C9A45C]"></span>
                    </span>
                )}
            </button>
        </div>
    );
}
