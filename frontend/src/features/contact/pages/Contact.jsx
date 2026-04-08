import SectionHeader from "../../../shared/components/SectionHeader";
import Container from "../../../shared/ui/Container";
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
  { id: "email", icon: mailIcon, text: "contact.squareupp@gmail.com", alt: "Email us at contact.squareupp@gmail.com" },
  { id: "phone", icon: phoneIcon, text: "+91 91813 22309", alt: "Call us at +91 91813 22309" },
  { id: "location", icon: locationIcon, text: "Get Location", alt: "Get directions to our location" },
];

const socialIcons = [
  { id: "fb", src: facebookIcon, alt: "Follow us on Facebook", url: "https://www.facebook.com/people/Enthusia-Softech/61555192523657/" },
  { id: "tw", src: twitterIcon, alt: "Follow us on Twitter", url: "https://enthusiasoftech.com/"},
  { id: "ln", src: linkedinIcon, alt: "Connect with us on LinkedIn", url: "https://www.linkedin.com/company/enthusia-softech/"},
];

const ContactInfoCard = memo(({ Icon, text, alt }) => (
  <div
    className="
      inline-flex items-center justify-center gap-3.5 
      px-5 py-4.5 md:px-2 xl:px-5 xl:py-3.5 2xl:px-6 2xl:py-4.5
      rounded-md
      bg-[#262626]
      w-full
      md:w-auto
    "
  >
    {/* <Icon className="text-[#9EFF00] text-[24px] 2xl:text-[30px] shrink-0" /> */}
    <img src={Icon} alt={alt} loading="lazy" className="size-6 md:size-5 2xl:size-6 shrink-0" />
   

    <span className="text-base 2xl:text-xl leading-normal font-medium text-[#E6E6E6] whitespace-nowrap">
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
    <main>
      <Container>
        <SectionHeader
          title="Contact Us"
          subtitle="Get in touch with us today and let us help you with any questions or inquiries you may have."
          bgImage={wave}
        />

        <div className="flex flex-col -mt-px">
          {/* Contact Info Strip */}
          <div className="border-x  border-[#262626] px-6 py-7.5 xl:py-10 2xl:py-12.5">
            <div className="max-w-5xl mx-auto ">
              <div className="flex flex-col items-center gap-5 2xl:gap-7.5 md:flex-row md:justify-center">
                {contactInfo.map(({ id, icon: Icon, text }) => (
                  <ContactInfoCard key={id} Icon={Icon} text={text} />
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Contact Form */}
          <div className=" border-b border-[#262626] ">
            <ContactForm />
          </div>

          {/* Section: Operating Days & Social */}
          <div className="border-x border-b border-[#262626] ">
            <div className="flex flex-col md:flex-row">
              {/* LEFT SIDE: Operating Days */}
              <div className="flex-1 flex flex-row items-center justify-center gap-3.5 xl:gap-3.5 py-5 md:py-12 xl:py-12.5 border-b md:border-b-0 md:border-r border-[#262626]">
                <span className="text-[#E6E6E6] text-base 2xl:text-[22px] font-medium">
                  Operating Days
                </span>
                <div className="bg-[#262626] border border-[#262626] rounded-sm px-5 py-2.5 2xl:px-6 2xl:py-3 text-[#E6E6E6] leading-normal font-medium text-sm xl:text-base 2xl:text-xl">
                  Monday to Friday
                </div>
              </div>

              {/* RIGHT SIDE: Stay Connected */}
              <div className="flex items-center justify-center flex-1  md:py-12 xl:py-12.5">
                <div className="flex flex-col md:flex-row items-center gap-5 2xl:gap-5 md:bg-[#1C1C1C] md:border md:border-[#262626] md:rounded-lg p-5 pb-10  md:px-2 md:py-3 xl:pl-5 xl:p-2.5 2xl:pl-6 2xl:p-3.5">
                  <span className="text-[#E6E6E6] text-base  2xl:text-lg font-medium leading-normal">
                    Stay Connected
                  </span>

                  {/* Icon Group  */}
                  <div className="flex items-center gap-2.5 md:gap-1.5 2xl:gap-3.5">
                    {socialIcons.map(({ id, src, alt, url }) => (
                      <a key={id} href={url} target="_blank" rel="noopener noreferrer" aria-label={alt}>
                        <img
                          src={src}
                          alt={alt}
                          decoding="async" 
                          className="transition duration-300 size-13 md:size-10 2xl:size-16 hover:scale-110 hover:brightness-125"
                          loading="lazy"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: FAQ */}

          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Still you have any questions? Contact our Team via hello@squareup.com"
            bgImage={wave}
          />

          <div>
            <FAQAccordion />
          </div>

          {/* Section 5: Highlight CTA */}
          <HighlightCTA />
        </div>
      </Container>
    </main>
    </>
  );
};

export default Contact;
