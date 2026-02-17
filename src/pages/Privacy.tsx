import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {

  return (
    <div className="min-h-screen bg-[#00030D] text-slate-300 font-sans selection:bg-red-900 selection:text-white">
      <header className="pt-48 pb-16 px-6 bg-[#00030D] ">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-5xl md:text-7xl font-bold gradient-text tracking-tight">
            Privacy Policy
          </span>
          <p className="text-lg mt-4 text-slate-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-12">
        
        <section className="space-y-4">
          <p className="leading-relaxed">
            Welcome to <strong>Kolosal Production</strong>. 
            We respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, and protect your information when you visit our website at <span className="text-white font-medium">kolosalproduction.vercel.app</span> or use our creative production services.
          </p>
        </section>

        <section className="space-y-4 border-l-2 border-yellow-600 pl-6">
          <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
          <p>We may collect several types of information for the purpose of providing and improving our services to you:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>
              <strong className="text-slate-200">Personal Data:</strong> When you contact us via forms or WhatsApp, we may ask for certain personally identifiable information such as your name, email address, phone number, and company details.
            </li>
            <li>
              <strong className="text-slate-200">Usage Data:</strong> Information on how you access and use the website. This may include your IP address, browser type, pages visited, and the time spent on those pages.
            </li>
            <li>
              <strong className="text-slate-200">Media & Portfolio:</strong> If you are a client, the photo or video materials we produce for you will be stored in accordance with the agreed-upon cooperation contract.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
          <p>We use the collected data for various purposes, including:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>To provide and maintain our services (Video, Photo, Live Streaming services, etc.).</li>
            <li>To notify you about changes to our services.</li>
            <li>To provide customer support.</li>
            <li>To monitor the usage of our services to detect, prevent, and address technical issues.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">3. Data Security</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. 
            While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Links to Other Sites</h2>
          <p>
            Our service may contain links to other sites that are not operated by us (e.g., Google Drive, YouTube, Instagram). 
            If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
          </p>
        </section>

        <section className="mt-12 p-8 rounded-2xl max-w-7xl flex items-center justify-center ">
          <button className="bg-gradient-to-r from-[#6c4120] to-[#f7d07f] text-white px-6 py-2 rounded-full hover:scale-105 transition cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </button>
        </section>

      </main>
    </div>
  );
};

export default PrivacyPolicy; 