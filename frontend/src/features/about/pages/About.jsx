import SectionHeader from "../../../shared/components/SectionHeader";
import wave from "../../../assets/images/backgrounds/services-wave.webp";
import HighlightCTA from "../../../shared/components/HighlightCTA";
import { storySteps } from "../data/aboutData";
import aboutImg from "../../../assets/images/about/about-main.webp";
import StepGrid from "../../../shared/components/StepGrid";
import SEO from "../../../shared/components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About Us | Digital Product Studio & Development Experts - SquareUp"
        description="Discover SquareUp, a leading digital product agency specializing in design, engineering, and project management. Learn about our collaborative process and how we create exceptional digital experiences for businesses."
        path="/about"
      />
    
      <section className="w-full border-x border-subtle" id="about-page">
        <SectionHeader
          title="About Us"
          subtitle="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
          bgImage={wave}
        />
            {/* 1. ABOUT INTRO SECTION  */}
        <div className="grid md:grid-cols-2 px-4 py-10 md:px-20 md:py-15 xl:px-25 xl:py-20 2xl:px-37.5 2xl:py-25 gap-7.5 xl:gap-25 items-center">
                
          {/* LEFT SIDE: Text Container  */}
          <div className="flex flex-col gap-4 2xl:gap-5 text-left">
            <h2 className="font-semibold text-[28px] xl:text-[38px] 2xl:text-5xl text-primary">
              About SquareUp 
            </h2>
            <p className="text-sm xl:text-base 2xl:text-xl leading-normal tracking-[-0.6%] text-secondary">
              SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
            </p>
          </div>

          {/* RIGHT SIDE: Image */}
          <img
            src={aboutImg}
            alt="SquareUp Cube"
            width="598"
            height="571"
            loading="lazy"
            decoding="async"
            className="object-cover w-full aspect-598/571 max-w-89.5 md:max-w-115 xl:max-w-122.5 2xl:max-w-149.5 border border-subtle rounded-xl lg:rounded-2xl"
          />
        </div>

        {/* 2. OUR STORY HEADER */} 
        <h2 className="py-10 pl-6 xl:py-20 xl:pl-12.5 2xl:py-25 border-y border-subtle font-semibold text-[38px] xl:text-5xl 2xl:text-[58px] text-primary">
          Our Story
        </h2>
            
        <StepGrid items={storySteps} variant="highlight" />

        <HighlightCTA />
        
      </section>
    </>
  );
};

export default About;