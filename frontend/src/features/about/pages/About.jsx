import SectionHeader from "../../../shared/components/SectionHeader";
import wave from "../../../assets/images/backgrounds/services-wave.webp";
import Container from "../../../shared/ui/Container";
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
    <main className="bg-[#1A1A1A]">
      <Container>
      <SectionHeader
        title="About Us"
        subtitle="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
        bgImage={wave}
      />
      
        <div className="flex flex-col -mt-px">
          {/* 1. ABOUT INTRO SECTION  */}
          <div className=" border-b md:border-x border-[#262626] bg-[#1A1A1A]">
            <div
              className="
              grid md:grid-cols-2 items-center
              px-4 xl:px-25 2xl:px-37.5
              py-10 xl:py-20 2xl:py-25
              gap-7.5 xl:gap-25
            "
            >
              {/* LEFT SIDE: Text Container  */}
              <div className="flex flex-col gap-4 text-left 2xl:gap-5 max-w-155">
                <h2 className="text-white  text-[28px] xl:text-[38px] 2xl:text-[48px] font-semibold leading-none">
                  About SquareUp
                </h2>
                <p className=" text-[#E6E6E6] text-sm xl:text-base 2xl:text-[20px] leading-normal tracking-[.6%]  font-normal">
                  SquareUp is a digital product agency that is passionate about
                  crafting exceptional digital experiences. We specialize in
                  design, engineering, and project management, helping
                  businesses thrive in the digital landscape. At SquareUp, we
                  follow a structured and collaborative process to ensure the
                  successful delivery of exceptional digital products. Our
                  process combines industry best practices, creative thinking,
                  and a client-centric approach.
                </p>
              </div>

              {/* RIGHT SIDE: Image */}
              <div className="flex justify-center w-full md:justify-end ">
                <div className="w-full max-w-89.5 md:max-w-115 xl:max-w-122.5 2xl:max-w-149.5 aspect-598/571 rounded-xl lg:rounded-2xl overflow-hidden border border-[#262626]">
                  <img
                    src={aboutImg}
                    alt="SquareUp Cube"
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. OUR STORY HEADER */}
          <div className="border-x border-b border-[#262626] ">
            <div className=" pl-6 xl:pl-12.5 py-10 xl:py-20 2xl:py-25 ">
              <h2 className="text-white text-[38px] xl:text-[48px] 2xl:text-[58px] leading-none font-semibold">
                Our Story
              </h2>
            </div>
          </div>

          <StepGrid items={storySteps} variant="highlight" />

          <HighlightCTA />
        </div>
      </Container>
    </main>
    </>
  );
};

export default About;
