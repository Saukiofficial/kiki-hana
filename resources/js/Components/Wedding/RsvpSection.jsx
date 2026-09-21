import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import SectionHeader from '../UI/SectionHeader';
import { Send, CheckCircle2, UserCheck, Users, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BotanicalCorner, BotanicalFlourish } from '../UI/BotanicalOrnament';
import AnimatedSuccessModal from '../UI/AnimatedSuccessModal';

export default function RsvpSection({ invitation, guestName }) {
    const [submitted, setSubmitted] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        guest_name: guestName || '',
        attendance_status: 'attending',
        guest_count: 1,
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/${invitation.slug}/rsvp`, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setSubmitted(true);
                setShowSuccessModal(true);
                confetti({
                    particleCount: 100,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#C9A45C', '#7A1820', '#4A0D12', '#DFC285'],
                });
                reset('message');
            },
        });
    };

    const statusLabel = data.attendance_status === 'attending' 
        ? 'Akan Hadir' 
        : (data.attendance_status === 'declined' ? 'Berhalangan Hadir' : 'Masih Ragu');

    return (
        <section id="rsvp" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#151112] relative overflow-hidden">
            {/* Ambient Burgundy Glow */}
            <div className="absolute inset-0 bg-radial from-[#4A0D12]/20 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-2xl mx-auto relative z-10">
                <SectionHeader
                    tag="KONFIRMASI"
                    title="Konfirmasi Kehadiran"
                    subtitle="Répondez S'il Vous Plaît"
                    description="Mohon kesediaan Bapak/Ibu/Saudara/i untuk mengonfirmasi kehadiran demi kelancaran persiapan acara kami."
                />

                <div className="relative bg-[#1A1214] border-2 border-[#C9A45C]/55 rounded-sm p-6 sm:p-10 shadow-2xl mt-8 backdrop-blur-xs">
                    <BotanicalCorner position="top-left" className="absolute top-2 left-2 w-10 h-10 text-[#C9A45C]/80" />
                    <BotanicalCorner position="top-right" className="absolute top-2 right-2 w-10 h-10 text-[#C9A45C]/80" />
                    <BotanicalCorner position="bottom-left" className="absolute bottom-2 left-2 w-10 h-10 text-[#C9A45C]/80" />
                    <BotanicalCorner position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10 text-[#C9A45C]/80" />

                    {submitted ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 rounded-full bg-[#4A0D12] border-2 border-[#C9A45C] flex items-center justify-center mx-auto mb-4 text-[#DFC285] shadow-lg">
                                <CheckCircle2 className="w-8 h-8 text-[#DFC285]" />
                            </div>
                            <h3 className="font-serif text-2xl sm:text-3xl text-[#E8DCC8] font-medium mb-2">
                                Konfirmasi Berhasil Dikirimkan
                            </h3>
                            <p className="text-xs sm:text-sm text-[#E8DCC8]/80 font-light max-w-md mx-auto mb-6 leading-relaxed">
                                Konfirmasi ({statusLabel}) dan doa restu Anda telah kami catat dengan penuh rasa bahagia. Sampai jumpa di hari bahagia pernikahan kami!
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#C9A45C]/60 text-xs uppercase tracking-wider text-[#DFC285] hover:text-[#F5EFE4] hover:border-[#C9A45C] bg-[#4A0D12]/60 hover:bg-[#4A0D12] transition-colors cursor-pointer font-semibold shadow-md"
                            >
                                Ubah / Perbarui Konfirmasi
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Guest Name */}
                            <div>
                                <label className="block text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#DFC285] mb-2">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.guest_name}
                                    onChange={(e) => setData('guest_name', e.target.value)}
                                    placeholder="Contoh: Bapak Ir. Hendra Wijaya"
                                    className="w-full px-4 py-3 rounded-sm bg-[#241719] border border-[#C9A45C]/45 focus:border-[#C9A45C] focus:outline-none text-sm text-[#E8DCC8] placeholder-[#E8DCC8]/40 transition-colors font-sans"
                                />
                                {errors.guest_name && (
                                    <span className="text-[11px] text-red-400 mt-1 block">{errors.guest_name}</span>
                                )}
                            </div>

                            {/* Attendance Status */}
                            <div>
                                <label className="block text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#DFC285] mb-2">
                                    Konfirmasi Kehadiran
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {[
                                        { value: 'attending', label: '✓ Hadir' },
                                        { value: 'declined', label: '✕ Berhalangan' },
                                        { value: 'tentative', label: '? Masih Ragu' },
                                    ].map((opt) => (
                                        <button
                                            type="button"
                                            key={opt.value}
                                            onClick={() => setData('attendance_status', opt.value)}
                                            className={`px-4 py-3 rounded-sm border text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                                                data.attendance_status === opt.value
                                                    ? "bg-gradient-to-r from-[#4A0D12] to-[#7A1820] text-[#F5EFE4] border-[#C9A45C] shadow-lg"
                                                    : "bg-[#241719] text-[#E8DCC8]/75 border-[#C9A45C]/40 hover:border-[#C9A45C]"
                                            }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Guest Count (only if attending) */}
                            {data.attendance_status === 'attending' && (
                                <div>
                                    <label className="block text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#DFC285] mb-2">
                                        Jumlah Tamu yang Hadir
                                    </label>
                                    <select
                                        value={data.guest_count}
                                        onChange={(e) => setData('guest_count', e.target.value)}
                                        className="w-full px-4 py-3 rounded-sm bg-[#241719] border border-[#C9A45C]/45 focus:border-[#C9A45C] focus:outline-none text-sm text-[#E8DCC8] transition-colors font-sans font-medium"
                                    >
                                        <option value={1} className="bg-[#1A1214] text-[#E8DCC8]">1 Orang</option>
                                        <option value={2} className="bg-[#1A1214] text-[#E8DCC8]">2 Orang</option>
                                        <option value={3} className="bg-[#1A1214] text-[#E8DCC8]">3 Orang</option>
                                        <option value={4} className="bg-[#1A1214] text-[#E8DCC8]">4 Orang</option>
                                        <option value={5} className="bg-[#1A1214] text-[#E8DCC8]">5 Orang</option>
                                    </select>
                                </div>
                            )}

                            {/* Warm Message / Wishes */}
                            <div>
                                <label className="block text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#DFC285] mb-2">
                                    Pesan / Doa Restu (Opsional)
                                </label>
                                <textarea
                                    rows={3}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder="Tuliskan untaian doa dan ucapan selamat untuk kedua mempelai..."
                                    className="w-full px-4 py-3 rounded-sm bg-[#241719] border border-[#C9A45C]/45 focus:border-[#C9A45C] focus:outline-none text-sm text-[#E8DCC8] placeholder-[#E8DCC8]/40 transition-colors font-sans leading-relaxed resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xs bg-gradient-to-r from-[#4A0D12] via-[#7A1820] to-[#4A0D12] hover:from-[#5C1218] hover:to-[#5C1218] text-[#F5EFE4] border-2 border-[#C9A45C] text-xs uppercase tracking-[0.24em] font-semibold transition-all shadow-xl disabled:opacity-50 cursor-pointer transform hover:scale-[1.01] active:scale-[0.99]"
                                >
                                    <Send className="w-4 h-4 text-[#DFC285]" />
                                    <span>{processing ? 'Mengirimkan...' : 'Kirim Konfirmasi Kehadiran'}</span>
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            <AnimatedSuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                guestName={data.guest_name}
                status={data.attendance_status}
            />
        </section>
    );
}
