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
    question: "What types of events can Kolosal handle?",
    answer:
      "We handle various types of events, including corporate events, brand activations, conferences, concerts, exhibitions, and private events, all with professional production standards.",
  },
  {
    question: "Can the visual concept of the event be customized?",
    answer:
      "Yes. The visual style, storytelling approach, and overall tone of the documentation can be tailored to match your brand identity and event objectives.",
  },
  {
    question: "Does Kolosal provide both photo and video services?",
    answer:
      "Yes. We offer photography, videography, and combined documentation packages based on your needs.",
  },
  {
    question: "How long does the production process take after the event?",
    answer:
      "The post-production process typically takes around 7–14 working days, depending on the complexity of the project.",
  },
  {
    question: "Can Kolosal handle out-of-town events?",
    answer:
      "Yes. Our team is ready to handle events outside the city with proper planning and an agreed schedule.",
  },
],

personalDemand: [
  {
    question: "What services are included in Personal Demand?",
    answer:
      "This service includes personal branding, portrait sessions, lifestyle photography, and other personal visual needs.",
  },
  {
    question: "Can clients bring their own concepts?",
    answer:
      "Absolutely. We are very open to discussing and developing concepts based on the client’s ideas and references.",
  },
  {
    question: "Is this service suitable for first-time clients?",
    answer:
      "Yes. We guide clients thoroughly from the planning stage through to the final delivery.",
  },
  {
    question: "How long does a personal project usually take?",
    answer:
      "On average, personal projects are completed within 5–10 working days after the production session.",
  },
  {
    question: "Are the results exclusive to the client?",
    answer:
      "Yes. All final deliverables are exclusive and will not be reused without the client’s permission.",
  },
],

commercial: [
  {
    question: "What types of products can Kolosal handle?",
    answer:
      "We handle a wide range of products, including fashion, F&B, lifestyle, technology, and other commercial products.",
  },
  {
    question: "Does Kolosal help with concept development?",
    answer:
      "Yes. We assist with creative direction, visual concepts, and product storytelling.",
  },
  {
    question: "Can the content be used for advertising purposes?",
    answer:
      "Yes. Our content is optimized for social media, digital advertising, and marketplaces.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "The number of revisions is based on the initial agreement and is clearly communicated before production begins.",
  },
  {
    question: "Does Kolosal accept long-term collaborations?",
    answer:
      "Yes. We are open to long-term partnerships and ongoing production projects.",
  },
],

ui: [
  {
    question: "What types of websites does Kolosal develop?",
    answer:
      "We develop websites such as landing pages, company profiles, portfolios, and custom websites with a strong focus on user experience (UX).",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes. We provide integrated UI/UX design and front-end development services.",
  },
  {
    question: "Are the websites responsive across all devices?",
    answer:
      "Yes. All websites are designed to perform optimally on mobile, tablet, and desktop devices.",
  },
  {
    question: "Can the design be customized to match the client’s brand?",
    answer:
      "Yes. The design will be tailored to fit the client’s brand identity and business needs.",
  },
  {
    question: "Will clients receive the source files and ownership rights?",
    answer:
      "Yes. All final files and source materials become the client’s property upon project completion.",
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
