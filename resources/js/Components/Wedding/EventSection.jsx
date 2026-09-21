import React, { useState } from 'react';
import SectionHeader from '../UI/SectionHeader';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, Layers, Copy, Check, Compass, Sparkles } from 'lucide-react';
import { BotanicalCorner, BotanicalFlourish } from '../UI/BotanicalOrnament';
import Toast from '../UI/Toast';

export default function EventSection({ events = [] }) {
    const [is3DMode, setIs3DMode] = useState(true);
    const [copiedCoords, setCopiedCoords] = useState(false);
    const [showToast, setShowToast] = useState(false);

    if (!events || events.length === 0) return null;

    const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.806415050082!2d113.80005895!3d-7.03202595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd9e722c6b73aa5%3A0x8251836a8d5f461c!2sTonggal%2C%20Meddelan%2C%20Lenteng%2C%20Sumenep%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1789992348878!5m2!1sen!2sid";
    const directMapUrl = "https://www.google.com/maps?q=-7.03202595,113.80005895";
    const directionUrl = "https://www.google.com/maps/dir/?api=1&destination=-7.03202595,113.80005895";
    const coordinateText = "7°01'55.3\"S 113°48'00.2\"E (-7.032026, 113.800059)";

    const handleCopyCoords = () => {
        navigator.clipboard.writeText(coordinateText);
        setCopiedCoords(true);
        setShowToast(true);
        setTimeout(() => setCopiedCoords(false), 2500);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <section id="event" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#151112] relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-radial from-[#4A0D12]/30 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <SectionHeader
                    tag="RANGKAIAN ACARA"
                    title="Agenda Pawiwahan"
                    subtitle="Waktu & Tempat Pelaksanaan"
                    description="Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu secara langsung."
                />

                {/* Event Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 mb-16">
                    {events.map((event, index) => {
                        const eventDate = new Date(event.date).toLocaleDateString('id-ID', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        });

                        return (
                            <div
                                key={event.id || index}
                                className="relative bg-[#1A1214] border-2 border-[#C9A45C]/50 rounded-sm p-6 sm:p-10 shadow-2xl flex flex-col justify-between text-center overflow-hidden group hover:border-[#C9A45C] transition-all backdrop-blur-xs"
                            >
                                {/* Javanese Corner Ornaments */}
                                <BotanicalCorner position="top-left" className="absolute top-2 left-2 w-10 h-10 text-[#C9A45C]/80" />
                                <BotanicalCorner position="top-right" className="absolute top-2 right-2 w-10 h-10 text-[#C9A45C]/80" />
                                <BotanicalCorner position="bottom-left" className="absolute bottom-2 left-2 w-10 h-10 text-[#C9A45C]/80" />
                                <BotanicalCorner position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10 text-[#C9A45C]/80" />

                                <div>
                                    {/* Event Title */}
                                    <span className="text-[10px] uppercase tracking-[0.28em] text-[#C9A45C] font-bold block mb-1">
                                        Acara {index + 1}
                                    </span>
                                    <h3 className="font-serif text-3xl sm:text-4xl text-[#E8DCC8] font-normal mb-3">
                                        {event.title}
                                    </h3>

                                    <BotanicalFlourish className="w-24 h-5 text-[#C9A45C] mx-auto mb-6" />

                                    {/* Date & Time details */}
                                    <div className="space-y-3 mb-6 font-sans text-xs sm:text-sm text-[#E8DCC8]/85">
                                        <div className="flex items-center justify-center gap-2">
                                            <Calendar className="w-4 h-4 text-[#C9A45C] shrink-0" />
                                            <span className="font-semibold text-[#E8DCC8]">{eventDate}</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                            <Clock className="w-4 h-4 text-[#C9A45C] shrink-0" />
                                            <span className="font-medium text-[#DFC285]">
                                                Pukul {event.start_time} {event.end_time ? `– ${event.end_time}` : '– Selesai'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Venue & Address */}
                                    <div className="p-4 rounded bg-[#241719]/80 border border-[#C9A45C]/40 mb-8">
                                        <h4 className="font-serif text-lg sm:text-xl text-[#E8DCC8] font-medium mb-1">
                                            {event.venue_name}
                                        </h4>
                                        {event.venue_subname && (
                                            <p className="text-xs text-[#DFC285] font-serif italic mb-2 font-medium">
                                                {event.venue_subname}
                                            </p>
                                        )}
                                        <p className="text-xs sm:text-sm text-[#E8DCC8]/75 font-light leading-relaxed">
                                            {event.address}
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons (Maps & Calendar) */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                                    <a
                                        href={event.maps_url || directMapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4A0D12] to-[#7A1820] hover:from-[#5C1218] hover:to-[#8E1C24] text-[#F5EFE4] border border-[#C9A45C] text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                                    >
                                        <Navigation className="w-3.5 h-3.5 text-[#DFC285]" />
                                        <span>Buka Google Maps</span>
                                    </a>

                                    {event.calendar_google_url && (
                                        <a
                                            href={event.calendar_google_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1719] hover:bg-[#2A1E21] text-[#E8DCC8] border border-[#C9A45C]/60 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                                        >
                                            <CalendarPlus className="w-3.5 h-3.5 text-[#C9A45C]" />
                                            <span>Simpan Kalender</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 3D Interactive Map Preview Section */}
                <div className="mt-8 pt-8 border-t border-[#C9A45C]/35">
                    <div className="text-center mb-8">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4A0D12]/70 text-[#DFC285] border border-[#C9A45C]/60 text-[10px] uppercase tracking-[0.28em] font-sans font-bold shadow-md">
                            <Sparkles className="w-3 h-3 text-[#DFC285]" />
                            Peta Lokasi Digital
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl text-[#E8DCC8] font-light mt-3">
                            Petunjuk Lokasi & Denah Acara
                        </h3>
                        <p className="text-xs sm:text-sm text-[#E8DCC8]/75 max-w-lg mx-auto mt-1 font-light">
                            Kombung Barat, Ellak Daya, Kec. Lenteng, Kab. Sumenep
                        </p>
                    </div>

                    {/* 3D Map Viewport Frame */}
                    <div className="relative max-w-4xl mx-auto py-4">
                        
                        {/* 3D Perspective Box Container */}
                        <div 
                            className={`relative rounded-lg p-2 sm:p-4 bg-[#1A1214] border-2 border-[#C9A45C] shadow-2xl transition-all duration-700 ${
                                is3DMode 
                                    ? "transform md:[transform:perspective(1200px)_rotateX(8deg)_rotateY(-2deg)] md:hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)]"
                                    : ""
                            }`}
                            style={{
                                boxShadow: is3DMode 
                                    ? '0 30px 60px -15px rgba(0, 0, 0, 0.7), 0 0 30px 2px rgba(201, 164, 92, 0.25)' 
                                    : '0 15px 35px -5px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            {/* Javanese Corner Ornaments on Frame */}
                            <BotanicalCorner position="top-left" className="absolute top-2 left-2 w-10 h-10 text-[#C9A45C] z-20" />
                            <BotanicalCorner position="top-right" className="absolute top-2 right-2 w-10 h-10 text-[#C9A45C] z-20" />
                            <BotanicalCorner position="bottom-left" className="absolute bottom-2 left-2 w-10 h-10 text-[#C9A45C] z-20" />
                            <BotanicalCorner position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10 text-[#C9A45C] z-20" />

                            {/* Top Header Bar */}
                            <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-[#111111] text-[#E8DCC8] rounded-t-sm border-b border-[#C9A45C]/50 z-20">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A45C] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DFC285]"></span>
                                    </span>
                                    <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#DFC285]">
                                        GPS: 7°00'28.3"S 113°45'49.8"E
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setIs3DMode(!is3DMode)}
                                        className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25181B] hover:bg-[#321F24] text-[#DFC285] border border-[#C9A45C]/60 text-[10px] uppercase tracking-wider font-semibold transition-all cursor-pointer"
                                    >
                                        <Layers className="w-3 h-3 text-[#C9A45C]" />
                                        <span>{is3DMode ? 'Mode Datar' : 'Mode 3D'}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Embedded Google Map Iframe */}
                            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#181314] border border-[#C9A45C]/40 rounded-b-sm">
                                <iframe
                                    src={mapsEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    title="Peta Lokasi Pernikahan Syauqi & Hana di Dsn. Tonggal, Ds. Meddelan, Lenteng, Sumenep"
                                    className="w-full h-full filter contrast-[1.03] brightness-[0.95]"
                                />

                                {/* Floating Location Pin Overlay Label */}
                                <div className="absolute top-4 left-4 z-20 hidden xs:flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111111]/90 backdrop-blur-md border border-[#C9A45C] text-xs text-[#E8DCC8] shadow-xl">
                                    <MapPin className="w-4 h-4 text-[#DFC285] animate-bounce" />
                                    <div>
                                        <p className="font-serif text-xs font-semibold text-[#DFC285] leading-tight">
                                            Lokasi Pernikahan Syauqi & Hana
                                        </p>
                                        <p className="text-[9px] text-[#E8DCC8]/80 font-sans leading-tight">
                                            Dsn. Tonggal, Ds. Meddelan, Lenteng, Sumenep
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Action Quick Buttons */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
                            <a
                                href={directionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4A0D12] to-[#7A1820] hover:from-[#5C1218] hover:to-[#8E1C24] text-[#F5EFE4] border border-[#C9A45C] text-xs font-semibold uppercase tracking-wider transition-all shadow-xl cursor-pointer"
                            >
                                <Compass className="w-4 h-4 text-[#DFC285]" />
                                <span>Petunjuk Arah (Navigasi)</span>
                            </a>

                            <a
                                href={directMapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1719] hover:bg-[#2A1E21] text-[#E8DCC8] border border-[#C9A45C] text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                            >
                                <Navigation className="w-3.5 h-3.5 text-[#C9A45C]" />
                                <span>Buka Full di Google Maps</span>
                            </a>

                            <button
                                onClick={handleCopyCoords}
                                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#25181B] hover:bg-[#321F24] text-[#E8DCC8] border border-[#C9A45C]/60 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                            >
                                {copiedCoords ? <Check className="w-3.5 h-3.5 text-[#C9A45C]" /> : <Copy className="w-3.5 h-3.5 text-[#C9A45C]" />}
                                <span>{copiedCoords ? 'Koordinat Tersalin!' : 'Salin Koordinat'}</span>
                            </button>
                        </div>

                    </div>
                </div>

            </div>

            <Toast show={showToast} message="Titik koordinat lokasi berhasil disalin ke clipboard!" onClose={() => setShowToast(false)} />
        </section>
    );
}
