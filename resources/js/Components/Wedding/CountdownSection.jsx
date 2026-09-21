import React, { useState, useEffect } from 'react';
import { Calendar, Bell } from 'lucide-react';
import { BotanicalFlourish } from '../UI/BotanicalOrnament';

export default function CountdownSection({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (num) => String(num).padStart(2, '0');

    return (
        <section className="py-16 md:py-20 px-4 bg-[#0E0A0B] text-[#E8DCC8] relative overflow-hidden text-center">
            {/* Ambient Burgundy Glow */}
            <div className="absolute inset-0 bg-radial from-[#4A0D12]/45 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.38em] text-[#DFC285] font-semibold font-sans block mb-2">
                    Menghitung Hari Bahagia
                </span>
                
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#E8DCC8] font-normal mb-3">
                    Waktu Menuju Hari Sakral
                </h3>

                <BotanicalFlourish className="w-28 h-5 text-[#C9A45C] mx-auto mb-8" />

                {/* Countdown Grid */}
                <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg mx-auto">
                    {[
                        { label: 'HARI', value: timeLeft.days },
                        { label: 'JAM', value: timeLeft.hours },
                        { label: 'MENIT', value: timeLeft.minutes },
                        { label: 'DETIK', value: timeLeft.seconds },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-sm bg-[#1A1214] border border-[#C9A45C]/55 shadow-2xl backdrop-blur-xs"
                        >
                            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#DFC285] tracking-tight drop-shadow-xs">
                                {formatNumber(item.value)}
                            </span>
                            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#E8DCC8]/75 font-sans font-semibold mt-1">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
