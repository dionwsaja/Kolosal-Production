import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        controls.start({
          rotate: -90,
          transition: { duration: 0.25, ease: "easeInOut" },
        });
      }, 300);
      return () => clearTimeout(timer);
    } else {
      controls.start({ rotate: 0, transition: { duration: 0.2 } });
    }
  }, [isOpen, controls]);

  const navLink = ({ isActive }: { isActive: boolean }) =>
    `relative transition-colors duration-300
   ${isActive ? "text-orange-300" : "text-white hover:text-orange-300"}`;

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4">
        <div className="flex items-center justify-between rounded-full bg-transparent backdrop-blur-[10px] px-6 py-6 shadow-lg shadow-yellow-400/5">
          <Link to="/">
            <img src={logo} alt="logo Kolosal Production" className="w-36" />
          </Link>

          <div className="hidden md:flex gap-x-8 font-medium">
            <NavLink to="/" className={navLink}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLink}>
              About
            </NavLink>
            <NavLink to="/services" className={navLink}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={navLink}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={navLink}>
              Contact
            </NavLink>
          </div>

          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsOpen(true)}
          >
            <span className="w-6 h-0.5 bg-white rounded" />
            <span className="w-6 h-0.5 bg-white rounded" />
            <span className="w-6 h-0.5 bg-white rounded" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 right-0 z-60 h-screen w-full bg-transparent backdrop-blur-md text-white px-8 py-24"
          >
            <motion.button
              animate={controls}
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-3xl"
            >
              ×
            </motion.button>

            <nav className="flex flex-col items-end gap-10 text-xl">
              <NavLink
                to="/"
                className={navLink}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={navLink}
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={navLink}
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                className={navLink}
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/contact"
                className={navLink}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
