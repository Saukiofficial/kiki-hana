import React, { useState } from 'react';
import SectionHeader from '../UI/SectionHeader';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function GallerySection({ galleries = [] }) {
    const [selectedIdx, setSelectedIdx] = useState(null);

    // Default gallery photos mapped to newly compressed prewedding photos
    const defaultPhotos = [
        { id: 1, image_url: "/images/wedding/couple-javanese.jpg", caption: "Pawiwahan Ageng Busana Adat Jawa" },
        { id: 2, image_url: "/images/wedding/prewed-01.jpg", caption: "Keanggunan Tradisional Berselimut Doa" },
        { id: 3, image_url: "/images/wedding/prewed-02.jpg", caption: "Sorot Mata Penuh Kasih & Ketulusan" },
        { id: 4, image_url: "/images/wedding/prewed-03.jpg", caption: "Harmoni Cinta dalam Balutan Adat Jawa" },
        { id: 5, image_url: "/images/wedding/prewed-04.jpg", caption: "Detik-Detik Menuju Lembaran Bahagia" },
        { id: 6, image_url: "/images/wedding/prewed-05.jpg", caption: "Senyuman Hangat Menyambut Hari Sakral" },
        { id: 7, image_url: "/images/wedding/prewed-06.jpg", caption: "Karisma & Wibawa Mempelai Pria" },
        { id: 8, image_url: "/images/wedding/prewed-07.jpg", caption: "Pesona Anggun Mempelai Wanita" },
        { id: 9, image_url: "/images/wedding/prewed-08.jpg", caption: "Dua Jiwa Bersatu dalam Harmoni" },
        { id: 10, image_url: "/images/wedding/prewed-09.jpg", caption: "Kebersamaan Abadi Syauqi & Hana" },
        { id: 11, image_url: "/images/wedding/prewed-10.jpg", caption: "Janji Suci di Depan Ukiran Gebyok" },
        { id: 12, image_url: "/images/wedding/prewed-11.jpg", caption: "Langkah Pasti Membina Rumah Tangga" },
    ];

    const photos = (galleries && galleries.length >= 7) ? galleries : defaultPhotos;

    const handleOpenLightbox = (index) => {
        setSelectedIdx(index);
    };

    const handleCloseLightbox = () => {
        setSelectedIdx(null);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedIdx((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id="gallery" className="py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-[#111111] relative overflow-hidden">
            {/* Ambient Burgundy Glow */}
            <div className="absolute inset-0 bg-radial from-[#4A0D12]/20 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-xl sm:max-w-2xl mx-auto relative z-10">
                <SectionHeader
                    tag="DOKUMENTASI"
                    title="Galeri Pawiwahan"
                    subtitle="Potret Kasih & Keanggunan Abadi"
                    description="Rangkaian memori yang merekam keanggunan busana adat Jawa, keheningan doa, dan keindahan cinta dalam nuansa klasik nan megah."
                />

                {/* Asymmetric Luxury Bento Collage Grid */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 mt-10 sm:mt-12">

                    {/* 1. TOP HERO CARD (Full-Width Landscape) */}
                    <div
                        onClick={() => handleOpenLightbox(0)}
                        className="col-span-2 relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#1A1214] border-2 border-[#C9A45C]/60 shadow-2xl rounded-tl-[36px] sm:rounded-tl-[48px] rounded-br-[36px] sm:rounded-br-[48px] rounded-tr-md rounded-bl-md cursor-pointer group"
                    >
                        <img
                            src={photos[0]?.image_url}
                            alt={photos[0]?.caption || "Wedding Hero"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.96] contrast-[1.04]"
                            loading="lazy"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#111111]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A0D12]/90 text-[#DFC285] border border-[#C9A45C] text-[10px] uppercase tracking-wider font-semibold">
                                <Eye className="w-3.5 h-3.5 text-[#DFC285]" />
                                Perbesar Foto
                            </span>
                        </div>
                    </div>

                    {/* 2. MIDDLE SECTION */}
                    {/* 2.1 Left 2x2 Mini Collage Grid */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5 aspect-[4/5] w-full">
                        {/* Photo 1 (Top-Left of 2x2) */}
                        <div
                            onClick={() => handleOpenLightbox(1)}
                            className="relative w-full h-full overflow-hidden bg-[#1A1214] border-2 border-[#C9A45C]/50 rounded-tl-xl sm:rounded-tl-2xl rounded-tr-sm rounded-br-sm rounded-bl-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[1]?.image_url || photos[0]?.image_url}
                                alt={photos[1]?.caption || "Gallery 2"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        {/* Photo 2 (Top-Right of 2x2) */}
                        <div
                            onClick={() => handleOpenLightbox(2)}
                            className="relative w-full h-full overflow-hidden bg-[#1A1214] border-2 border-[#C9A45C]/50 rounded-tr-xl sm:rounded-tr-2xl rounded-tl-sm rounded-br-sm rounded-bl-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[2]?.image_url || photos[0]?.image_url}
                                alt={photos[2]?.caption || "Gallery 3"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        {/* Photo 3 (Bottom-Left of 2x2) */}
                        <div
                            onClick={() => handleOpenLightbox(3)}
                            className="relative w-full h-full overflow-hidden bg-[#1A1214] border-2 border-[#C9A45C]/50 rounded-bl-xl sm:rounded-bl-2xl rounded-tl-sm rounded-tr-sm rounded-br-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[3]?.image_url || photos[0]?.image_url}
                                alt={photos[3]?.caption || "Gallery 4"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        {/* Photo 4 (Bottom-Right of 2x2) */}
                        <div
                            onClick={() => handleOpenLightbox(4)}
                            className="relative w-full h-full overflow-hidden bg-[#1A1214] border-2 border-[#C9A45C]/50 rounded-br-xl sm:rounded-br-2xl rounded-tl-sm rounded-tr-sm rounded-bl-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[4]?.image_url || photos[0]?.image_url}
                                alt={photos[4]?.caption || "Gallery 5"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* 2.2 Right Tall Portrait Card */}
                    <div
                        onClick={() => handleOpenLightbox(5)}
                        className="relative aspect-[4/5] w-full overflow-hidden bg-[#1A1214] border-2 border-[#C9A45C]/60 rounded-tr-[36px] sm:rounded-tr-[48px] rounded-bl-[36px] sm:rounded-bl-[48px] rounded-tl-md rounded-br-md shadow-xl cursor-pointer group"
                    >
                        <img
                            src={photos[5]?.image_url || photos[0]?.image_url}
                            alt={photos[5]?.caption || "Gallery 6"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#111111]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A0D12]/90 text-[#DFC285] border border-[#C9A45C] text-[10px] uppercase tracking-wider font-semibold">
                                <Eye className="w-3.5 h-3.5 text-[#DFC285]" />
                                Perbesar
                            </span>
                        </div>
                    </div>

                    {/* 3. BOTTOM SECTION */}
                    {/* 3.1 Left Tall Portrait Card */}
                    <div
                        onClick={() => handleOpenLightbox(6)}
                        className="relative aspect-[4/5] w-full overflow-hidden bg-[#1A1214] border-2 border-[#C9A45C]/60 rounded-tl-[36px] sm:rounded-tl-[48px] rounded-br-[36px] sm:rounded-br-[48px] rounded-tr-md rounded-bl-md shadow-xl cursor-pointer group"
                    >
                        <img
                            src={photos[6]?.image_url || photos[0]?.image_url}
                            alt={photos[6]?.caption || "Gallery 7"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#111111]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A0D12]/90 text-[#DFC285] border border-[#C9A45C] text-[10px] uppercase tracking-wider font-semibold">
                                <Eye className="w-3.5 h-3.5 text-[#DFC285]" />
                                Perbesar
                            </span>
                        </div>
                    </div>

                    {/* 3.2 Right 2x2 Mini Collage Grid */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5 aspect-[4/5] w-full">
                        {/* Photo 5 */}
                        <div
                            onClick={() => handleOpenLightbox(7 % photos.length)}
                            className="relative w-full h-full overflow-hidden bg-[#1A1214] border-2 border-[#C9A45C]/50 rounded-tl-xl sm:rounded-tl-2xl rounded-tr-sm rounded-br-sm rounded-bl-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[7 % photos.length]?.image_url}
                                alt={photos[7 % photos.length]?.caption || "Gallery 8"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        {/* Photo 6 */}
                        <div
                            onClick={() => handleOpenLightbox(8 % photos.length)}
                            className="relative w-full h-full overflow-hidden bg-[#1A1214] border-2 border-[#C9A45C]/50 rounded-tr-xl sm:rounded-tr-2xl rounded-tl-sm rounded-br-sm rounded-bl-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[8 % photos.length]?.image_url}
                                alt={photos[8 % photos.length]?.caption || "Gallery 9"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        {/* Photo 7 */}
                        <div
                            onClick={() => handleOpenLightbox(9 % photos.length)}
                            className="relative w-full h-full overflow-hidden bg-[#1A1214] border-2 border-[#C9A45C]/50 rounded-bl-xl sm:rounded-bl-2xl rounded-tl-sm rounded-tr-sm rounded-br-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[9 % photos.length]?.image_url}
                                alt={photos[9 % photos.length]?.caption || "Gallery 10"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        {/* Photo 8 */}
                        <div
                            onClick={() => handleOpenLightbox(10 % photos.length)}
                            className="relative w-full h-full overflow-hidden bg-[#1A1214] border-2 border-[#C9A45C]/50 rounded-br-xl sm:rounded-br-2xl rounded-tl-sm rounded-tr-sm rounded-bl-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[10 % photos.length]?.image_url}
                                alt={photos[10 % photos.length]?.caption || "Gallery 11"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIdx !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseLightbox}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D090A]/95 p-4 sm:p-8 backdrop-blur-md"
                    >
                        {/* Close button */}
                        <button
                            onClick={handleCloseLightbox}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-[#1A1214] text-[#E8DCC8] hover:bg-[#4A0D12] hover:text-[#F5EFE4] transition-all border border-[#C9A45C]/60 z-50 cursor-pointer shadow-2xl"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Prev button */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#1A1214]/90 text-[#E8DCC8] hover:bg-[#4A0D12] hover:text-[#F5EFE4] transition-all border border-[#C9A45C]/60 z-50 cursor-pointer shadow-2xl"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Next button */}
                        <button
                            onClick={handleNext}
                            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#1A1214]/90 text-[#E8DCC8] hover:bg-[#4A0D12] hover:text-[#F5EFE4] transition-all border border-[#C9A45C]/60 z-50 cursor-pointer shadow-2xl"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Main Image Container */}
                        <motion.div
                            key={selectedIdx}
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.92, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
                        >
                            <img
                                src={photos[selectedIdx]?.image_url}
                                alt={photos[selectedIdx]?.caption || "Gallery view"}
                                className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl border-2 border-[#C9A45C]/60"
                            />
                            {photos[selectedIdx]?.caption && (
                                <p className="font-serif italic text-sm sm:text-base text-[#DFC285] mt-4 text-center">
                                    "{photos[selectedIdx]?.caption}"
                                </p>
                            )}
                            <span className="text-[11px] font-sans tracking-widest text-[#E8DCC8]/60 mt-1">
                                {selectedIdx + 1} / {photos.length}
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
