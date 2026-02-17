import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "@formspree/react";


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

            <div className="mt-12 space-y-6 break-all truncate">
              <a
                href="mailto:kolosalproduction@gmail.com"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-colors group border border-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/50">Email</div>
                  <div className="text-white">
                    kolosalproduction@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/6287836634387"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-colors group border border-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/50">Phone / Whatsapp</div>
                  <div className="text-white">+62 878-3663-4378</div>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/Jakarta,+Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-colors group border border-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/50">Address</div>
                  <div className="text-white">Jakarta, Indonesia</div>
                </div>
              </a>
            </div>
          </div>

         
          <div className="border-t md:border-t-0 md:border-l border-white/10 p-6 md:p-14">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+62..."
                  className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none focus:border-white/30"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full rounded-xl bg-white py-3 font-medium text-black transition hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Sending..." : "Submit"}
              </button>

           
              {state.succeeded && (
                <p className="text-sm font-medium text-green-500">
                   Message Succesfully sent
                </p>
              )}

              {state.errors && Array.isArray(state.errors) && state.errors.length > 0 && (
                <p className="text-sm font-medium text-red-500">
                 Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
