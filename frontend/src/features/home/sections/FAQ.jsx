import SectionHeader from "../../../shared/components/SectionHeader";
import wave from "../../../assets/images/backgrounds/faq-wave.webp";
import FAQAccordion from "../../../shared/components/FAQAccordion";

const FAQ = () => {
  return (
    <section className="w-full" id="faq-home">
      
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Do you still have questions?Contact our Team via contact.squareupp@gmail.com"
        bgImage={wave}
      />
        <FAQAccordion />
      
    </section>
  );
};

export default FAQ;
