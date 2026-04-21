import SectionHeader from "../../../shared/components/SectionHeader";
import ContactForm from "../../../shared/components/ContactForm";
import HighlightCTA from "../../../shared/components/HighlightCTA";
import wave from "../../../assets/images/backgrounds/faq-wave.webp";

import mailIcon from "../../../assets/icons/social/mail.svg";
import phoneIcon from "../../../assets/icons/social/phone.svg";
import locationIcon from "../../../assets/icons/social/location.svg";

import facebookIcon from "../../../assets/icons/social/facebook.svg";
import twitterIcon from "../../../assets/icons/social/twitter.svg";
import linkedinIcon from "../../../assets/icons/social/linkedin.svg";

import FAQAccordion from "../../../shared/components/FAQAccordion";
import { memo } from "react";
import SEO from "../../../shared/components/SEO";

const contactInfo = [
  { id: "email", Icon: mailIcon, text: "contact.squareupp@gmail.com", alt: "Emailus" },
  { id: "phone", Icon: phoneIcon, text: "+91 91813 22309", alt: "Callus" },
  { id: "location", Icon: locationIcon, text: "Get Location", alt: "Get directions" },
];

const socialIcons = [
  { id: "fb", src: facebookIcon, alt: "Follow us on Facebook", url: "https://www.facebook.com/people/Enthusia-Softech/61555192523657/" },
  { id: "tw", src: twitterIcon, alt: "Follow us on Twitter", url: "https://enthusiasoftech.com/"},
  { id: "ln", src: linkedinIcon, alt: "Connect with us on LinkedIn", url: "https://www.linkedin.com/company/enthusia-softech/"},
];

const ContactInfoCard = memo(({ Icon, text, alt }) => (
  <div
    className="inline-flex w-full items-center justify-center gap-3.5 rounded-md bg-border-subtle px-5 py-4.5 md:w-auto md:px-2 xl:px-5 xl:py-3.5 2xl:px-6 2xl:py-4.5">
    <img src={Icon} alt={alt} loading="lazy" className="size-6 md:size-5 2xl:size-6 shrink-0" />
    <span className="text-base font-medium whitespace-nowrap text-text-secondary 2xl:text-xl">
      {text}
    </span>
  </div>
));

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us | Get in Touch with SquareUp Digital Agency"
        description="Get in touch with us today and let us help you with any questions or inquiries you may have."
        path="/contact"
      />

      <section className="w-full border-x border-border-subtle" id="contact-page">
        
        <SectionHeader
          title="Contact Us"
          subtitle="Get in touch with us today and let us help you with any questions or inquiries you may have."
          bgImage={wave}
        />
        
        {/* Contact Info Strip */}
        <div className="px-6 py-7.5 xl:py-10 2xl:py-12.5 border-b border-border-subtle">
          <div className="flex flex-col items-center gap-5 2xl:gap-7.5 md:flex-row md:justify-center">
            {contactInfo.map(({ id, Icon, text, alt }) => (
              <ContactInfoCard key={id} Icon={Icon} text={text} alt={alt} />
            ))}
          </div>
        </div>
        
        {/* Section 2: Contact Form */}
        <ContactForm />
        
        {/* Section: Operating Days & Social */}
        <div className="flex flex-col md:flex-row border-y border-border-subtle">
          {/* LEFT */}
          <div className=" flex flex-1 flex-row items-center justify-center gap-3.5 border-b border-border-subtle py-5 md:border-b-0 md:border-r md:py-12 xl:py-12.5">
            <span className="text-text-secondary text-base 2xl:text-[22px] font-medium whitespace-nowrap">
              Operating Days
            </span>

            <span className="whitespace-nowrap rounded-sm border border-border-subtle bg-bg-secondary px-5 py-2.5 text-sm font-medium text-text-secondary xl:text-base 2xl:px-6 2xl:py-3 2xl:text-xl">
              Monday to Friday
            </span>
          </div>
          {/* RIGHT */}
          <div className="flex flex-1 items-center justify-center md:py-12 xl:py-12.5">
            <div className="flex flex-col items-center gap-5 p-5 pb-10 md:flex-row md:rounded-lg md:border md:border-border-subtle md:bg-bg-tertiary md:px-2 md:py-3 xl:p-2.5 xl:pl-5 2xl:p-3.5 2xl:pl-6">
              <span className="text-base font-medium whitespace-nowrap text-text-secondary 2xl:text-lg">
                Stay Connected
              </span>

              <div className="flex items-center gap-2.5 md:gap-1.5 2xl:gap-3.5">
                {socialIcons.map(({ id, src, alt, url }) => (
                  <a key={id} href={url} target="_blank" rel="noopener noreferrer" aria-label={alt}>
                    <img
                      src={src}
                      alt={alt}
                      decoding="async"
                      className="transition duration-300 size-13 2xl:size-16 hover:scale-110 hover:brightness-125"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: FAQ */}
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Do you still have questions? Contact our Team via contact.squareupp@gmail.com"
          bgImage={wave}
        />
        
        <FAQAccordion />
        
        {/* Section 5: Highlight CTA */}
        <HighlightCTA />
      </section>
    </>
  );
};

export default Contact;
