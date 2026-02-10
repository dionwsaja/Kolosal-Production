import bg from "../../assets/images/bg_3.png";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Footers() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#00030D] ">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center  -scale-x-100"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />

     
      <div className="w-full absolute top-0 h-2 bg-[#00030D] shadow-2xl shadow-[#00030D]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 ">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
  
          <div>
            <p className="mb-4 text-xs tracking-widest text-white/40">
              CONTACT KOLOSAL ON
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="https://www.instagram.com/kolosalproduction/" target="_blank" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:kolosalproduction@gmail.com" target="_blank" className="hover:text-white transition">
                  Email
                </a>
              </li>
              <li>
                <a href="https://wa.me/6287836634387" target="_blank" className="hover:text-white transition">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

     
          <div>
            <p className="mb-4 text-xs tracking-widest text-white/40">
              DETILED SERVICES
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Photography</li>
              <li>Videography</li>
              <li>Digital Production</li>
              <li>Brand Visual</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs tracking-widest text-white/40">
              COMPANY
            </p>
            <ul className="space-y-3 text-sm text-white/80">
            <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
             
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs tracking-widest text-white/40">
              RESOURCES
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Privacy Policy</li>
              <li>Legal</li>
              <li>Security</li>
              <li>Status</li>
            </ul>
          </div>
        </div>


        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Kolosal Production" className="h-8" />
            <span className="text-xs text-white md:text-white/60">
              © {new Date().getFullYear()} Kolosal Production
            </span>
          </div>

          <div className="flex gap-5 text-white md:text-white/60">
            <a
              href="https://www.instagram.com/kolosalproduction/"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTiktok size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
