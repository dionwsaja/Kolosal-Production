import { TestimonialsColumn } from "../../components/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Halooo aku Vina Muliana mau kasih dukungan untuk Kolosal Productionn karena udah keren banget untuk semua production productionnya, jadi sukses terus buat kolosal production yaaaa!",
    image: "https://media.licdn.com/dms/image/v2/C5603AQE0F00fPGsytQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1645189198961?e=2147483647&v=beta&t=d1Xk6Ql2N9hMj_8nV6Pr-YSBCxGBjAuOhONzj_dkIjs",
    name: "Vina Muliana",
    role: "Content Creator",
  },
  {
    text: "Untuk Kolosal Production Sukses terus menginspirasi dan terus membuat karya karya film yang tentu saja bermanfaat dan berdampak untuk bangsa dan bernegara",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_nyGkM47YI5Jgb9QwJ3Eo5vU737EJY78lHwX1GEIKDM-EY=s900-c-k-c0x00ffffff-no-rj",
    name: "Tsamara Amany",
    role: "Content Creator",
  },
  {
    text: "Menurut GUEEE okee dieee,die NYAmpe ,die ENNjoyyy,kerjanya MANteppp,fotonya BAGuss,Videonya KERENNN. MENURUT GUA MINIMAL Orang WAJIB at Least sekali pake Kolosal Production untuk jadi Vendornya Mereka yaaa. COBAINNN AJA DLUUU",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZnluxCImM4a70REtabYWLAwve1m36GzSGA&s  ",
    name: "Andri Senopati",
    role: "Content Creator",
  },
  {
    text: "Saya dukung kegiatan ananda sekalian untuk masa depan dan kemajuan bangsa ini,mudah mudahan ananda sekalian sukses dalam mencapai cita citanya",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Almh. Mayjen TNI (Purn.) Salim S. Mengga ",
    role: "(Wagub Sulbar 2025 - 2026)",
  },
  {
    text: "Ayo kita mendukung sepenuhnya Kolosal Production untuk lebih maju demi kemajuan pemuda dan bangsa Indonesia",
    image: "https://brantas-abipraya.co.id/sites/default/files/team/isra_0.png",
    name: "Isra Daming Pramulya ",
    role: "Sekretaris DPD Gerindra dan Sekretaris Jenderal PMII",
  },
  {
    text: "Kolosal Production telah memberikan pelayanan yang terbaik dibidang photography, fotoshoot,dan pembuatan video.Jadi teman teman yang ingin dan membutuhkan fotografer videografer baik dibidang apapun.Boleh banget nanti hubungin Kolosal Production",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFGLbswjCzipQ/profile-displayphoto-shrink_200_200/B56ZZd.5hDHUAk-/0/1745333492268?e=2147483647&v=beta&t=lF_DLH1VTkSnzLrkkajXcQPYTEMgofTexoAw7q6ycyo",
    name: "Yusnalia Kadir",
    role: "Winner Putri Hijabfluencer Diy dan 2nd Putri Hijabfluencer",
  },
  {
    text: "Ehh serius KEErenn bangett fotooonyaa",
    image: "https://instagram.fcgk9-1.fna.fbcdn.net/v/t51.82787-15/526837457_18408318766117474_3993922487930511189_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzY4OTM2MzI1Mzk2MTg0ODI4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=3Tp7JgP75F8Q7kNvwEmm3Ft&_nc_oc=AdnLeVMbP5pZfFvztcUixCQSV89BqhQg4lE6b0YxElZfPq6JXplJrwAfEv716PrIUowEi7u32swRXJFxoPCFGWjS&_nc_ad=z-m&_nc_cid=1225&_nc_zt=23&_nc_ht=instagram.fcgk9-1.fna&_nc_gid=6I7FrIhr3zYvslnNhXqecA&oh=00_Afv5qWYb8dG1uiO8lcBNTUNIfx-U3WAtqC97_2ZJ7Jiekw&oe=698F5A7F",
    name: "Zelina",
    role: "Winner Putri Hijabfluencer Banten 2025",
  },
  {
    text: "WEH aku dulu juga gituuu,ko keren keren banget dahh. SEMANGATT terusss ya",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MkHqJCCsjf4fScdv1VZidFUYZFWMWAWOiw&s",
    name: "Aulion",
    role: "Content Creator",
  },
  {
    text: "Halo gw manik,support banget Kolosal Production dari UI isinya teman teman Gen Z tau caranya digital merketing, website,editing ,dan lain sebagainya. Jadi pastinya gw support Kolosal Production",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHgZTWP7wJ_7g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678313714848?e=2147483647&v=beta&t=qHs0b_UJ4oiCyX8pVai-dFJs_JSPT07bsvDRjU4zobA",
    name: "Manik Marganamahendra",
    role: "Ketua BEM UI 2019-2020 dan Wakil Ketua Umum Partai Perindo IV",
  },
  {
    text: "Demi apa siii ko keren banget videonya",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Salma_Ranggita_visits_the_Palembang_City_Goverment_Office.jpg",
    name: "Salma Ranggita",
    role: "Puteri Indonesia Pariwisata 2025 dan Miss Cosmo Indonesia 2025",
  },
  {
    text: "Happy bangettt karena hasil video dan fotonya bagusss. Jadi kalo temen teman butuh rekomendasi bikin hasil foto video yang bagus yangg OKEE dan pastinya bakal ngarahin juga.Langsung aja hubungin Kolosal Production.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFKhhxDdklrzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705341024555?e=2147483647&v=beta&t=B8MFsGMcOozql44SgP9B7V-s8DZst8ml2gM9-dSGV2I",
    name: "Salmahita Attaya",
    role: "Content Creator",
  },
  {
    text: "Kerenn banget mantap Semangatt teruss ya",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Dean_of_the_Faculty_of_Engineering%2C_University_of_Indonesia%2C_Professor_Heri_Hermansyah_15_%28cropped%29.jpg",
    name: "Prof. Heri Hermansyah",
    role: "Rektor Universitas Indonesia",
  },
  {
    text: "keren banget totalitas banget pastinya semuanya profesionall bangettt. Sat Set dan seru seru juga ga kaku pokonya quick banget cepet banget.Pastinya di next next event kita akan terus kolaborasi bareng kolosal Production",
    image: "https://media.licdn.com/dms/image/v2/D5622AQG4DLf3KvmLFw/feedshare-shrink_800/feedshare-shrink_800/0/1697727602756?e=2147483647&v=beta&t=kJJIdrnGvAuWuiJos_N8j8mk2WC3Q_8d6Grah0LK3R0",
    name: "Syahrul Khaidar",
    role: "CEO & The Founder of Zeekend",
  },
  {
    text: "Gua memberikan dukungan kepada Kolosal Production agar bisa terus berkembang dan menjadi agency yang terpercaya dan dapat memberikan pelayanan yang terbaik serta lebih berkembang dalam segi bisnisnya",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0KIOyPN1r_dbylCh1LrDgJHzONKtULnqAg&s",
    name: "Raymond Chin",
    role: "Entrepreneur & Content Creator",
  },
  {
    text: "Untuk Kolosal Production sudah kereng banget dengan services yang diberikannya, hasil-hasilnya gua liat juga bagus banget. Hopefully bisa lebih berkembang dan maju lagi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIg0wusI_NTbPNnexYO4u3h2C-zs3eIcivQ&s",
    name: "Dr. Richard Lee",
    role: "CEO of Athena Group, Doctor, Entrepreneur",
  },
  {
    text: "Wah cepet banget hasilnya kerennn bangettt lagi",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEt4KolLWI2fg/profile-displayphoto-scale_200_200/B56ZuT0O2iHAAY-/0/1767711502492?e=2147483647&v=beta&t=UbdBQ8O28SccRENV-QHNtwCecQ3R5cJDOS6Rw9NYZgo",
    name: "Achmad Za'im Mudzaki",
    role: "Festival Director BELFEST",
  },
];

const firstColumn = testimonials.slice(0, 6);
const secondColumn = testimonials.slice(6, 11);
const thirdColumn = testimonials.slice(11, 16);

const Testimonials = () => {
  return (
    <section className="bg-[#00030D] pt-36 max-w-7xl mx-auto  relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-135 mx-auto"
        >
          <span className="text-3xl md:text-5xl font-bold tracking-tighter pt-4 gradient-text mt-5">
            What our users say
          </span>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex max-w-7xl  justify-center pt-16 gap-6 mt-10 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-200 overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={30} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block w- "
            duration={20}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block "
            duration={20}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
