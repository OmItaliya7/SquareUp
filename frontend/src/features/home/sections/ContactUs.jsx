import Container from "../../../shared/ui/Container";
import CTABanner from "../../../shared/components/CTABanner";
import ContactForm from "../../../shared/components/ContactForm";

const ContactUs = () => {


  return (
    <section className="bg-[#1A1A1A] w-full">
      {/* HEADER SECTION */}
      <Container>
      <CTABanner
        title="Thank you for your Interest in SquareUp."
        subtitle="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
      />
        <ContactForm />
      </Container>
    </section>
  );
};

export default ContactUs;