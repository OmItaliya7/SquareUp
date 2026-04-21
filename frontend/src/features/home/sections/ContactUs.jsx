import CTABanner from "../../../shared/components/CTABanner";
import ContactForm from "../../../shared/components/ContactForm";

const ContactUs = () => {


  return (
    <section className="w-full" id="contact-us">
      {/* HEADER SECTION */}
      
        <CTABanner
          title="Thank you for your Interest in SquareUp."
          subtitle="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        />
        <ContactForm />
      
      
    </section>
  );
};

export default ContactUs;