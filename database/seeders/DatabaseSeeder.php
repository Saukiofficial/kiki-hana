<?php

namespace Database\Seeders;

use App\Models\Couple;
use App\Models\Event;
use App\Models\Gallery;
use App\Models\GiftAccount;
use App\Models\Invitation;
use App\Models\LoveStory;
use App\Models\Rsvp;
use App\Models\Wish;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Create Default Master Invitation (Syauqi & Hana)
        $invitationsData = [
            [
                'slug' => 'syauqi-hana',
                'title' => 'The Wedding Celebration of Syauqi & Hana',
            ],
            [
                'slug' => 'fikrul-puspita',
                'title' => 'The Wedding Celebration of Syauqi & Hana',
            ],
            [
                'slug' => 'fikrul-ita',
                'title' => 'The Wedding Celebration of Syauqi & Hana',
            ],
        ];

        $createdInvitations = [];

        foreach ($invitationsData as $inv) {
            $createdInvitations[] = Invitation::updateOrCreate(
                ['slug' => $inv['slug']],
                [
                    'title' => $inv['title'],
                    'quote_arabic' => 'وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
                    'quote_translation' => 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.',
                    'quote_source' => 'QS. Ar-Rum : 21',
                    'opening_text' => 'Dengan penuh rasa syukur dan memohon rahmat serta ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i sekalian untuk hadir dan memberikan doa restu pada hari bahagia pernikahan kami.',
                    'closing_text' => 'Merupakan suatu kehormatan dan kebahagiaan yang tak terhingga bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan melimpahkan doa restu bagi langkah awal kehidupan rumah tangga kami.',
                    'wedding_date' => '2026-09-28 08:00:00',
                    'music_title' => 'Satu Shaf Dibelakangku',
                    'music_artist' => 'Arvian Dwi',
                    'music_url' => '/musik/arvian-dwi-satu-shaf-dibelakangku.mp3',
                    'hero_image' => '/images/wedding/prewed-08.jpg',
                    'cover_image' => '/images/wedding/prewed-08.jpg',
                    'og_image' => '/images/wedding/prewed-08.jpg',
                    'background_video_url' => null,
                    'theme_settings' => [
                        'primary_theme' => 'luxury-javanese-heritage',
                        'palette' => 'burgundy-charcoal-antiquegold',
                        'font_display' => 'Cormorant Garamond',
                    ],
                    'is_active' => true,
                ]
            );
        }

        foreach ($createdInvitations as $invitation) {
            $invId = $invitation->id;

            // Clear previous child records to prevent duplication
            Couple::where('invitation_id', $invId)->delete();
            Event::where('invitation_id', $invId)->delete();
            LoveStory::where('invitation_id', $invId)->delete();
            Gallery::where('invitation_id', $invId)->delete();
            GiftAccount::where('invitation_id', $invId)->delete();

            // 2. Create Groom & Bride
            Couple::create([
                'invitation_id' => $invId,
                'role' => 'groom',
                'full_name' => 'MOH. SYAUQI, S.E.',
                'nickname' => 'Syauqi',
                'father_name' => 'Fathorrahman',
                'mother_name' => 'Hantini (Almh.)',
                'child_order_text' => 'Putra dari Bapak Fathorrahman & Ibu Hantini (Almh.)',
                'instagram' => 'syauqi',
                'photo_url' => '/images/wedding/groom.jpg',
                'bio' => 'Dsn. Jepun Timur, Lenteng Timur, Kec. Lenteng, Kab. Sumenep',
            ]);

            Couple::create([
                'invitation_id' => $invId,
                'role' => 'bride',
                'full_name' => 'SUHANA, S.Pd.',
                'nickname' => 'Hana',
                'father_name' => 'Moh. Tahir',
                'mother_name' => 'Isniwati',
                'child_order_text' => 'Putri dari Bapak Moh. Tahir & Ibu Isniwati',
                'instagram' => 'suhana',
                'photo_url' => '/images/wedding/bride.jpg',
                'bio' => 'Dsn. Tonggal, Ds. Meddelan, Kec. Lenteng, Kab. Sumenep',
            ]);

            // 3. Create Events (Akad & Resepsi)
            Event::create([
                'invitation_id' => $invId,
                'title' => 'Akad Nikah',
                'date' => '2026-09-28',
                'start_time' => '08.00 WIB',
                'end_time' => 'Selesai',
                'venue_name' => 'Kediaman Mempelai Wanita',
                'venue_subname' => 'Rumah Mempelai Wanita',
                'address' => 'Dsn. Tonggal, Ds. Meddelan, Kec. Lenteng, Kab. Sumenep',
                'maps_url' => 'https://www.google.com/maps?q=-7.03202595,113.80005895',
                'calendar_google_url' => 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad+Nikah+Syauqi+%26+Hana&dates=20260928T010000Z/20260928T030000Z&details=Akad+Nikah+Pernikahan+Syauqi+dan+Hana&location=Dsn.+Tonggal+Ds.+Meddelan+Kec.+Lenteng+Kab.+Sumenep',
                'sort_order' => 1,
            ]);

            Event::create([
                'invitation_id' => $invId,
                'title' => 'Resepsi Pernikahan',
                'date' => '2026-09-28',
                'start_time' => '13.00 WIB (1 Siang)',
                'end_time' => 'Selesai',
                'venue_name' => 'Kediaman Mempelai Wanita',
                'venue_subname' => 'Dsn. Tonggal, Ds. Meddelan',
                'address' => 'Dsn. Tonggal, Ds. Meddelan, Kec. Lenteng, Kab. Sumenep',
                'maps_url' => 'https://www.google.com/maps?q=-7.03202595,113.80005895',
                'calendar_google_url' => 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Syauqi+%26+Hana&dates=20260928T060000Z/20260928T100000Z&details=Resepsi+Pernikahan+Syauqi+dan+Hana&location=Dsn.+Tonggal+Ds.+Meddelan+Kec.+Lenteng+Kab.+Sumenep',
                'sort_order' => 2,
            ]);

            // 4. Create Love Stories
            LoveStory::create([
                'invitation_id' => $invId,
                'year_or_date' => 'Januari 2018',
                'title' => 'Awal Cerita Kami',
                'story' => 'Januari 2018. Tak ada yang menyangka, di sebuah acara yang kami datangi tanpa rencana, Tuhan mempertemukan dua orang asing. Dari sapa yang canggung, menjadi cerita yang panjang. Dari pertemuan yang tak sengaja, menjadi doa yang disengaja.',
                'image_url' => '/images/wedding/prewed-01.jpg',
                'sort_order' => 1,
            ]);

            LoveStory::create([
                'invitation_id' => $invId,
                'year_or_date' => '04 Oktober 2018',
                'title' => 'Lamaran',
                'story' => 'Setelah perjalanan panjang sejak Januari 2018, tibalah kami pada sebuah keputusan. Pada tanggal 04 Oktober 2018, dengan restu kedua keluarga, kami mengikat janji dalam sebuah pertunangan. Bukan hanya sekadar cincin yang melingkar, tapi juga komitmen untuk saling menjaga, menguatkan, dan melangkah bersama menuju tujuan yang sama. Hari itu, dua keluarga menjadi satu dalam doa.',
                'image_url' => '/images/wedding/prewed-05.jpg',
                'sort_order' => 2,
            ]);

            LoveStory::create([
                'invitation_id' => $invId,
                'year_or_date' => '28 September 2026',
                'title' => 'Janji Suci Pernikahan',
                'story' => 'Setelah 8 tahun perjalanan, tawa, doa, dan rindu yang kami lewati bersama, tibalah waktunya kami mengucap janji suci pernikahan. Dengan memohon rahmat dan ridho Allah SWT, kami akan melaksanakan pernikahan sekaligus resepsi pernikahan kami di tgl 28 September 2026.',
                'image_url' => '/images/wedding/couple-javanese.jpg',
                'sort_order' => 3,
            ]);

            // 5. Create Editorial Photo Galleries with All Real Photos
            $galleryImages = [
                [
                    'image_url' => '/images/wedding/couple-javanese.jpg',
                    'caption' => 'Keanggunan busana adat Jawa Syauqi & Hana',
                    'orientation' => 'landscape',
                ],
                [
                    'image_url' => '/images/wedding/prewed-01.jpg',
                    'caption' => 'Keheningan yang penuh doa dan kepastian',
                    'orientation' => 'portrait',
                ],
                [
                    'image_url' => '/images/wedding/prewed-03.jpg',
                    'caption' => 'Pesona anggun sang mempelai wanita',
                    'orientation' => 'portrait',
                ],
                [
                    'image_url' => '/images/wedding/prewed-02.jpg',
                    'caption' => 'Karisma tenang sang mempelai pria',
                    'orientation' => 'portrait',
                ],
                [
                    'image_url' => '/images/wedding/prewed-05.jpg',
                    'caption' => 'Kuntum mawar merah dan senyuman penuh makna',
                    'orientation' => 'portrait',
                ],
                [
                    'image_url' => '/images/wedding/prewed-06.jpg',
                    'caption' => 'Dua hati yang saling bersandar dalam kehangatan',
                    'orientation' => 'landscape',
                ],
                [
                    'image_url' => '/images/wedding/prewed-07.jpg',
                    'caption' => 'Harmoni langkah dan tatapan masa depan',
                    'orientation' => 'portrait',
                ],
                [
                    'image_url' => '/images/wedding/prewed-04.jpg',
                    'caption' => 'Cahaya lentera saksi ikrar janji suci',
                    'orientation' => 'portrait',
                ],
                [
                    'image_url' => '/images/wedding/prewed-09.jpg',
                    'caption' => 'Senyum penuh syukur menyambut hari bahagia',
                    'orientation' => 'portrait',
                ],
            ];

            foreach ($galleryImages as $index => $item) {
                Gallery::create([
                    'invitation_id' => $invId,
                    'image_url' => $item['image_url'],
                    'caption' => $item['caption'],
                    'orientation' => $item['orientation'],
                    'sort_order' => $index + 1,
                ]);
            }

            // 6. Create Gift Accounts (Dana, SeaBank & Physical Address)
            GiftAccount::create([
                'invitation_id' => $invId,
                'bank_name' => 'DANA',
                'account_number' => '087850535708',
                'account_holder' => 'Moh. Syauqi',
                'qr_code_url' => null,
                'notes' => 'Dompet Digital DANA',
                'sort_order' => 1,
            ]);

            GiftAccount::create([
                'invitation_id' => $invId,
                'bank_name' => 'SeaBank',
                'account_number' => '901363709430',
                'account_holder' => 'Moh. Syauqi',
                'qr_code_url' => null,
                'notes' => 'Transfer Bank SeaBank',
                'sort_order' => 2,
            ]);

            GiftAccount::create([
                'invitation_id' => $invId,
                'bank_name' => 'Kirim Kado Fisik (Alamat Kediaman)',
                'account_number' => null,
                'account_holder' => 'Kediaman Mempelai (Syauqi & Hana)',
                'recipient_address' => 'Dsn. Tonggal, Ds. Meddelan, Kec. Lenteng, Kab. Sumenep (Penerima: Syauqi & Hana)',
                'notes' => 'Konfirmasi pengiriman kado dapat melalui WhatsApp',
                'sort_order' => 3,
            ]);
        }
    }
}
