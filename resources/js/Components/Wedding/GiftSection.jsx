import React, { useState } from 'react';
import SectionHeader from '../UI/SectionHeader';
import { Copy, Check, CreditCard, Home, Gift } from 'lucide-react';
import Toast from '../UI/Toast';
import { BotanicalCorner, BotanicalFlourish } from '../UI/BotanicalOrnament';

export default function GiftSection({ giftAccounts = [] }) {
    const [copiedIndex, setCopiedIndex] = useState(null);
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    if (!giftAccounts || giftAccounts.length === 0) return null;

    const handleCopy = (text, label, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setToastMessage(`${label} berhasil disalin ke clipboard!`);
        setShowToast(true);

        setTimeout(() => {
            setCopiedIndex(null);
        }, 2000);

        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <section id="gift" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#111111] relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-radial from-[#4A0D12]/25 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <SectionHeader
                    tag="TANDA TRESNA"
                    title="Tanda Kasih"
                    subtitle="Doa Restu & Kado Digital"
                    description="Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda bermaksud memberikan tanda kasih berupa kado pernikahan, kami menyediakan informasi berikut."
                />

                {/* Symmetrically Centered Gift Cards Stack */}
                <div className="max-w-xl mx-auto flex flex-col items-center gap-6 sm:gap-8 mt-12 w-full">
                    {giftAccounts.map((account, index) => {
                        const isAddress = !account.account_number && account.recipient_address;

                        return (
                            <div
                                key={account.id || index}
                                className="relative w-full bg-gradient-to-br from-[#2F0B10] via-[#1B1113] to-[#140E10] border-2 border-[#C9A45C]/60 rounded-sm p-6 sm:p-8 shadow-2xl flex flex-col justify-between text-center overflow-hidden transition-all duration-300 hover:border-[#C9A45C]"
                                style={{
                                    boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(201, 164, 92, 0.15)'
                                }}
                            >
                                {/* Javanese Corner Ornaments */}
                                <BotanicalCorner position="top-left" className="absolute top-1.5 left-1.5 w-8 h-8 text-[#C9A45C]/80" />
                                <BotanicalCorner position="top-right" className="absolute top-1.5 right-1.5 w-8 h-8 text-[#C9A45C]/80" />
                                <BotanicalCorner position="bottom-left" className="absolute bottom-1.5 left-1.5 w-8 h-8 text-[#C9A45C]/80" />
                                <BotanicalCorner position="bottom-right" className="absolute bottom-1.5 right-1.5 w-8 h-8 text-[#C9A45C]/80" />

                                <div>
                                    {/* Card Header Badge */}
                                    <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#4A0D12] border border-[#C9A45C]/50 mb-3 shadow-md">
                                        {isAddress ? (
                                            <Home className="w-3.5 h-3.5 text-[#DFC285]" />
                                        ) : (
                                            <CreditCard className="w-3.5 h-3.5 text-[#DFC285]" />
                                        )}
                                        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#DFC285]">
                                            {account.bank_name}
                                        </span>
                                    </div>

                                    {!isAddress ? (
                                        <div className="my-3">
                                            <p className="font-mono text-2xl sm:text-3xl tracking-widest text-[#DFC285] font-bold select-all drop-shadow-sm">
                                                {account.account_number}
                                            </p>
                                            <p className="text-xs sm:text-sm text-[#E8DCC8] font-serif italic mt-1.5 mb-6 font-semibold">
                                                a/n {account.account_holder}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="my-3">
                                            <p className="font-serif text-lg sm:text-xl text-[#DFC285] font-semibold mb-1.5">
                                                {account.account_holder}
                                            </p>
                                            <p className="text-xs sm:text-sm text-[#E8DCC8]/85 leading-relaxed mb-6 font-light max-w-md mx-auto">
                                                {account.recipient_address}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex justify-center w-full">
                                    {!isAddress ? (
                                        <button
                                            onClick={() => handleCopy(account.account_number, `Nomor Rekening ${account.bank_name}`, index)}
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full bg-[#111111] hover:bg-[#4A0D12] text-[#F5EFE4] border border-[#C9A45C] text-xs uppercase tracking-wider font-semibold transition-all shadow-xl cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            {copiedIndex === index ? (
                                                <>
                                                    <Check className="w-4 h-4 text-[#DFC285]" />
                                                    <span className="text-[#DFC285]">Nomor Rekening Tersalin!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-4 h-4 text-[#DFC285]" />
                                                    <span>Salin Nomor Rekening</span>
                                                </>
                                            )}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleCopy(account.recipient_address, 'Alamat Pengiriman Kado', index)}
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full bg-[#111111] hover:bg-[#4A0D12] text-[#F5EFE4] border border-[#C9A45C] text-xs uppercase tracking-wider font-semibold transition-all shadow-xl cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            {copiedIndex === index ? (
                                                <>
                                                    <Check className="w-4 h-4 text-[#DFC285]" />
                                                    <span className="text-[#DFC285]">Alamat Lengkap Tersalin!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-4 h-4 text-[#DFC285]" />
                                                    <span>Salin Alamat Lengkap</span>
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Toast show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />
        </section>
    );
}
