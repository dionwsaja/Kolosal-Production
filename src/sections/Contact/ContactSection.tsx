import { useForm } from "@formspree/react";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const ContactSection = () => {
  const [state, handleSubmit] = useForm("mykdypwy");

  return (
    <section className="w-full bg-transparent px-4 py-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/20 bg-transparent backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2">
       
          <div className="p-8 md:p-14">
            <span className="text-3xl md:text-5xl gradient-text mb-8  font-bold text-center flex justify-center items-center">
              Contact Us
            </span>

            <p className="mt-6 max-w-md text-white/65 leading-relaxed">
              If you have any questions regarding our services or need help,
              please fill out the form here. We do our best to respond within
              one business day.
            </p>

            <div className="mt-12 space-y-6">
              <a
                href="mailto:kolosalproduction@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-white/20 shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EA4335]/10 border border-[#EA4335]/20 group-hover:scale-110 transition-transform text-[#EA4335]">
                  <IoMdMail size={24} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Email</div>
                  <div className="text-white font-medium truncate">
                    kolosalproduction@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/6287836634387"  
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-white/20 shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 group-hover:scale-110 transition-transform text-[#25D366]">
                  <FaWhatsapp size={24} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Phone / Whatsapp</div>
                  <div className="text-white font-medium truncate">+62 878-3663-4378</div>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/Jakarta,+Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-white/20 shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4285F4]/10 border border-[#4285F4]/20 group-hover:scale-110 transition-transform text-[#EA4335]">
                  <FaLocationDot size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Address</div>
                  <div className="text-white font-medium truncate">Jakarta, Indonesia</div>
                </div>
              </a>
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-white/10 p-6 md:p-14 ">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-white/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">
                  Phone
                </label>
                <input
                  type="text"
                  required
                  name="phone"
                  placeholder="+62..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-white/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-white/20"
                />
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="relative w-full flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {state.submitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : "Send Message"}
                  </span>
                </button>
              </div>

              {state.succeeded && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 animate-in fade-in slide-in-from-top-2 duration-500">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="text-sm font-bold uppercase tracking-widest">Message sent successfully!</p>
                </div>
              )}

              {state.errors && Array.isArray(state.errors) && state.errors.length > 0 && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 animate-in fade-in slide-in-from-top-2 duration-500">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                  <p className="text-sm font-bold uppercase tracking-widest">Failed to send. Please try again.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
