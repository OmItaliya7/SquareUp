
import Container from "../../../shared/ui/Container";
import SectionHeader from "../../../shared/components/SectionHeader";
import wave from "../../../assets/images/backgrounds/faq-wave.webp";
import FAQAccordion from "../../../shared/components/FAQAccordion";

const FAQ = () => {
  return (
    <section>
      <Container>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Do you still have questions? Contact our Team via contact.square-upp@gmail.com"
        bgImage={wave}
      />
        <FAQAccordion />
      </Container>
    </section>
  );
};

export default FAQ;
