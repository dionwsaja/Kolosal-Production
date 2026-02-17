import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
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

            <div
              className="relative group"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <button
                className={`flex items-center gap-1 cursor-pointer transition-colors duration-300 ${
                  isMoreOpen ? "text-orange-300" : "text-white"
                }`}
              >
                More
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isMoreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 rounded-2xl bg-transparent backdrop-blur-[10px] border border-white/10 p-2 shadow-2xl"
                  >
                    <NavLink
                      to="/privacy"
                      className={({ isActive }) =>
                        `block px-4 py-2.5 rounded-xl text-sm transition-colors ${
                          isActive
                            ? "bg-white/10 text-orange-300"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      Privacy Policy
                    </NavLink>
                    <NavLink
                      to="/coming-soon"
                      className={({ isActive }) =>
                        `block px-4 py-2.5 rounded-xl text-sm transition-colors ${
                          isActive
                            ? "bg-white/10 text-orange-300"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      Coming Soon
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact" className={navLink}>
              Contact
            </NavLink>
          </div>

          <button
            className="md:hidden flex flex-col gap-1 cursor-pointer"
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
            <Link
              to="/"
              className="absolute top-8 left-8"
              onClick={() => setIsOpen(false)}
            >
              <img src={logo} alt="logo Kolosal Production" className="w-28" />
            </Link>
            <motion.button
              animate={controls}
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-3xl cursor-pointer"
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

              <div className="flex flex-col items-end w-full">
                <button
                  onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                  className="flex items-center gap-2 text-white text-xl cursor-pointer"
                >
                  More
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      isMobileMoreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isMobileMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col items-end gap-4 mt-4 pr-4 border-r border-white/10"
                    >
                      <NavLink
                        to="/privacy"
                        className={navLink}
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileMoreOpen(false);
                        }}
                      >
                        Privacy Policy
                      </NavLink>
                      <NavLink
                        to="/coming-soon"
                        className={navLink}
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileMoreOpen(false);
                        }}
                      >
                        Coming Soon
                      </NavLink>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
