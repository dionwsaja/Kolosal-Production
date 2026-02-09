import { FAQ } from "../../components/faq-tabs";

const Accordion = () => {
  const categories = {
    EventDocumentation: "Event Documentation",
    personalDemand: "Personal Demand",
    commercial: "Commercial & Product Design",
    ui: "UI/UX & Web Development",
  };

  const faqData = {
    EventDocumentation: [
      {
        question: "Jenis event apa saja yang bisa ditangani Kolosal?",
        answer:
          "Kami menangani berbagai jenis event seperti acara korporat, brand activation, konferensi, konser, pameran, hingga acara privat dengan standar produksi profesional.",
      },
      {
        question: "Apakah konsep visual event bisa disesuaikan?",
        answer:
          "Bisa. Gaya visual, storytelling, hingga tone dokumentasi dapat disesuaikan dengan identitas brand dan tujuan event Anda.",
      },
      {
        question: "Apakah Kolosal menyediakan foto dan video sekaligus?",
        answer:
          "Ya. Kami menyediakan paket dokumentasi foto, video, maupun kombinasi keduanya sesuai kebutuhan.",
      },
      {
        question: "Berapa lama proses pengerjaan setelah event selesai?",
        answer:
          "Proses post-production biasanya memakan waktu sekitar 7–14 hari kerja, tergantung kompleksitas proyek.",
      },
      {
        question: "Apakah Kolosal bisa menangani event luar kota?",
        answer:
          "Ya. Tim kami siap menangani event di luar kota dengan perencanaan dan jadwal yang disepakati.",
      },
    ],

    personalDemand: [
      {
        question: "Apa saja yang termasuk layanan Personal Demand?",
        answer:
          "Layanan ini mencakup personal branding, portrait, lifestyle photography, serta kebutuhan visual personal lainnya.",
      },
      {
        question: "Apakah klien bisa membawa konsep sendiri?",
        answer:
          "Tentu. Kami sangat terbuka untuk berdiskusi dan mengembangkan konsep berdasarkan ide dan referensi dari klien.",
      },
      {
        question: "Apakah layanan ini cocok untuk klien pertama kali?",
        answer:
          "Sangat cocok. Kami akan memandu klien dari tahap perencanaan hingga hasil akhir secara menyeluruh.",
      },
      {
        question: "Berapa lama pengerjaan untuk proyek personal?",
        answer:
          "Rata-rata proyek personal selesai dalam waktu 5–10 hari kerja setelah sesi produksi.",
      },
      {
        question: "Apakah hasilnya bersifat eksklusif untuk klien?",
        answer:
          "Ya. Seluruh hasil produksi bersifat eksklusif dan tidak digunakan kembali tanpa izin klien.",
      },
    ],

    commercial: [
      {
        question: "Produk apa saja yang bisa ditangani Kolosal?",
        answer:
          "Kami menangani berbagai produk seperti fashion, F&B, lifestyle, teknologi, dan produk komersial lainnya.",
      },
      {
        question: "Apakah Kolosal membantu dalam pembuatan konsep?",
        answer:
          "Ya. Kami membantu mulai dari creative direction, konsep visual, hingga storytelling produk.",
      },
      {
        question: "Apakah hasil konten bisa digunakan untuk iklan?",
        answer:
          "Bisa. Konten kami dioptimalkan untuk media sosial, digital ads, dan marketplace.",
      },
      {
        question: "Berapa kali revisi yang disediakan?",
        answer:
          "Jumlah revisi disesuaikan dengan kesepakatan awal dan dijelaskan secara transparan sebelum produksi.",
      },
      {
        question: "Apakah Kolosal menerima kerja sama jangka panjang?",
        answer:
          "Ya. Kami terbuka untuk kerja sama jangka panjang dan produksi berkelanjutan.",
      },
    ],

    ui: [
      {
        question: "Website seperti apa yang dikerjakan Kolosal?",
        answer:
          "Kami mengerjakan website seperti landing page, company profile, portfolio, dan website custom dengan fokus UX.",
      },
      {
        question: "Apakah desain dan development ditangani sekaligus?",
        answer:
          "Ya. Kami menangani UI/UX design dan front-end development secara terintegrasi.",
      },
      {
        question: "Apakah website responsif di semua device?",
        answer:
          "Ya. Semua website dirancang agar optimal di mobile, tablet, dan desktop.",
      },
      {
        question: "Apakah desain bisa disesuaikan dengan brand klien?",
        answer:
          "Bisa. Desain akan disesuaikan dengan identitas visual dan kebutuhan brand klien.",
      },
      {
        question: "Apakah klien mendapatkan file dan hak kepemilikan?",
        answer:
          "Ya. Seluruh file final dan source menjadi milik klien setelah proyek selesai.",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <FAQ
        title="Frequently Asked Questions"
        subtitle="Pertanyaan yang sering diajukan"
        categories={categories}
        faqData={faqData}
      />
    </div>
  );
};

export default Accordion;
