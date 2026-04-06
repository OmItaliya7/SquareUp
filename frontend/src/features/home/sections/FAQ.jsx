
import Container from "../../../shared/ui/Container";
import SectionHeader from "../../../shared/components/SectionHeader";
import wave from "../../../assets/images/backgrounds/faq-wave.webp";
import FAQAccordion from "../../../shared/components/FAQAccordion";

const FAQ = () => {
  return (
    <section className="bg-[#1A1A1A]">
      <Container>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Still you have any questions? Contact our Team via hello@squareup.com"
        bgImage={wave}
      />
        <FAQAccordion />
      </Container>
    </section>
  );
};

export default FAQ;
