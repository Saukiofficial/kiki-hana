import React, { useState, useEffect } from 'react';
import { useForm, router } from '@inertiajs/react';
import SectionHeader from '../UI/SectionHeader';
import { MessageSquareHeart, Send, HeartHandshake, User, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import AnimatedSuccessModal from '../UI/AnimatedSuccessModal';

export default function WishesSection({ invitation, wishes = [], guestName }) {
    const [liveWishes, setLiveWishes] = useState(wishes);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [submittedSender, setSubmittedSender] = useState('');

    const groom = invitation?.groom || invitation?.couples?.find(c => c.role === 'groom');
    const bride = invitation?.bride || invitation?.couples?.find(c => c.role === 'bride');
    const groomName = groom?.nickname || 'Syauqi';
    const brideName = bride?.nickname || 'Hana';

    // Sync liveWishes whenever parent prop updates
    useEffect(() => {
        setLiveWishes(wishes);
    }, [wishes]);

    // Realtime Polling: Check for new wishes every 12 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            router.reload({
                only: ['invitation', 'stats'],
                preserveScroll: true,
                preserveState: true,
            });
        }, 12000);

        return () => clearInterval(interval);
    }, []);

    const { data, setData, post, processing, reset, errors } = useForm({
        sender_name: guestName || '',
        relationship: '',
        message: '',
    });

    const handleWishSubmit = (e) => {
        e.preventDefault();
        
        const newWishOptimistic = {
            id: Date.now(),
            sender_name: data.sender_name,
            relationship: data.relationship,
            message: data.message,
            created_at: new Date().toISOString(),
        };

        const currentSender = data.sender_name;

        post(`/${invitation.slug}/wishes`, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setSubmittedSender(currentSender);
                setShowSuccessModal(true);
                setLiveWishes((prev) => [newWishOptimistic, ...prev.filter(w => w.id !== newWishOptimistic.id)]);
                confetti({
                    particleCount: 90,
                    spread: 75,
                    origin: { y: 0.65 },
                    colors: ['#C9A45C', '#7A1820', '#4A0D12', '#DFC285'],
                });
                reset('message', 'relationship');
            },
        });
    };

    return (
        <section id="wishes" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#151112] relative overflow-hidden">
            {/* Ambient Burgundy Glow */}
            <div className="absolute inset-0 bg-radial from-[#4A0D12]/20 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <SectionHeader
                    tag="BUKU TAMU"
                    title="Untaian Doa & Harapan"
                    subtitle="Buku Tamu Realtime"
                    description="Setiap kata dan doa yang Anda panjatkan merupakan lentera kebaikan bagi perjalanan hidup kami."
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-12 items-start">
                    {/* Form Column (5 cols) */}
                    <div className="lg:col-span-5 bg-[#1A1214] border border-[#C9A45C]/50 rounded-sm p-6 sm:p-7 shadow-2xl backdrop-blur-xs">
                        <div className="flex items-center gap-2 mb-4">
                            <MessageSquareHeart className="w-5 h-5 text-[#C9A45C]" />
                            <h3 className="font-serif text-xl text-[#E8DCC8] font-medium">
                                Kirim Ucapan & Doa
                            </h3>
                        </div>

                        <form onSubmit={handleWishSubmit} className="space-y-4">
                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-[#DFC285] mb-1.5">
                                    Nama Anda
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.sender_name}
                                    onChange={(e) => setData('sender_name', e.target.value)}
                                    placeholder="Nama Lengkap"
                                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#241719] border border-[#C9A45C]/45 focus:border-[#C9A45C] focus:outline-none text-xs sm:text-sm text-[#E8DCC8] placeholder-[#E8DCC8]/40 font-sans"
                                />
                                {errors.sender_name && (
                                    <span className="text-[10px] text-red-400 mt-0.5 block">{errors.sender_name}</span>
                                )}
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-[#DFC285] mb-1.5">
                                    Hubungan / Kerabat (Opsional)
                                </label>
                                <input
                                    type="text"
                                    value={data.relationship}
                                    onChange={(e) => setData('relationship', e.target.value)}
                                    placeholder="Contoh: Teman, Rekan Kerja, Saudara"
                                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#241719] border border-[#C9A45C]/45 focus:border-[#C9A45C] focus:outline-none text-xs sm:text-sm text-[#E8DCC8] placeholder-[#E8DCC8]/40 font-sans"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-[#DFC285] mb-1.5">
                                    Pesan Doa
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder={`Tuliskan ucapan selamat dan doa tulus untuk ${groomName} & ${brideName}...`}
                                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#241719] border border-[#C9A45C]/45 focus:border-[#C9A45C] focus:outline-none text-xs sm:text-sm text-[#E8DCC8] placeholder-[#E8DCC8]/40 font-sans leading-relaxed resize-none"
                                />
                                {errors.message && (
                                    <span className="text-[10px] text-red-400 mt-0.5 block">{errors.message}</span>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xs bg-gradient-to-r from-[#4A0D12] via-[#7A1820] to-[#4A0D12] hover:from-[#5C1218] hover:to-[#5C1218] text-[#F5EFE4] border-2 border-[#C9A45C] text-xs uppercase tracking-[0.24em] font-semibold transition-all cursor-pointer disabled:opacity-50 shadow-xl transform hover:scale-[1.01] active:scale-[0.99]"
                            >
                                <Send className="w-3.5 h-3.5 text-[#DFC285]" />
                                <span>{processing ? 'Mengirim...' : 'Kirim Doa Restu'}</span>
                            </button>
                        </form>
                    </div>

                    {/* Wishes Feed Column (7 cols) */}
                    <div className="lg:col-span-7 bg-[#1A1214] border border-[#C9A45C]/50 rounded-sm p-6 sm:p-7 shadow-2xl backdrop-blur-xs">
                        <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-[#C9A45C]/35">
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#DFC285]">
                                    Buku Tamu Realtime
                                </span>
                            </div>
                            <span className="text-xs font-serif italic text-[#C9A45C] font-medium">
                                {liveWishes.length} Doa Terhimpun
                            </span>
                        </div>

                        {liveWishes.length === 0 ? (
                            <div className="text-center py-12 px-4">
                                <div className="w-12 h-12 rounded-full bg-[#4A0D12]/60 border border-[#C9A45C]/50 flex items-center justify-center text-[#DFC285] mx-auto mb-3">
                                    <HeartHandshake className="w-6 h-6 text-[#DFC285]" />
                                </div>
                                <h4 className="font-serif text-lg text-[#E8DCC8] font-medium mb-1">
                                    Belum Ada Untaian Doa
                                </h4>
                                <p className="font-serif italic text-xs sm:text-sm text-[#E8DCC8]/70 max-w-sm mx-auto leading-relaxed">
                                    Jadilah orang pertama yang mengirimkan ucapan selamat dan doa restu untuk kedua mempelai melalui formulir di samping.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4 max-h-[460px] overflow-y-auto pr-2">
                                {liveWishes.map((item, idx) => (
                                    <div
                                        key={item.id || idx}
                                        className="p-4 rounded-sm bg-[#23181B] border border-[#C9A45C]/35 shadow-sm transition-all hover:border-[#C9A45C]/70"
                                    >
                                        <div className="flex items-center justify-between gap-2 mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-[#4A0D12] border border-[#C9A45C]/60 flex items-center justify-center text-[#DFC285]">
                                                    <User className="w-3.5 h-3.5 text-[#DFC285]" />
                                                </div>
                                                <span className="font-serif text-sm sm:text-base font-semibold text-[#DFC285]">
                                                    {item.sender_name}
                                                </span>
                                            </div>
                                            {item.relationship && (
                                                <span className="px-2.5 py-0.5 rounded-full bg-[#4A0D12]/70 text-[9px] uppercase tracking-wider text-[#DFC285] font-sans font-semibold border border-[#C9A45C]/30">
                                                    {item.relationship}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-xs sm:text-sm text-[#E8DCC8]/90 font-light leading-relaxed pl-8">
                                            "{item.message}"
                                        </p>

                                        <span className="text-[10px] text-[#E8DCC8]/50 block text-right mt-1.5 font-light">
                                            {new Date(item.created_at || Date.now()).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Animated Success Modal Notification */}
            <AnimatedSuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                title="Untaian Doa Terkirim!"
                subtitle="Matur Nuwun Atas Doa & Harapan Tulus Anda"
                message={`Setiap kata dan doa yang Anda panjatkan telah tercatat di buku tamu digital dan menjadi berkah berharga bagi ${groomName} & ${brideName}.`}
                senderName={submittedSender}
            />
        </section>
    );
}
