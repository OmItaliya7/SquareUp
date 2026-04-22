import SectionHeader from "../../../shared/components/SectionHeader";
import WorkGrid from "../components/WorkGrid";
import CTABanner from "../../../shared/components/CTABanner";
import { workData } from "../data/workData";
import wave from "../../../assets/images/backgrounds/about-wave.webp";
import IntroBlock from "../../../shared/components/IntroBlock";
import SEO from "../../../shared/components/SEO";

const Work = () => {
  return (
    <>
    <SEO
      title="Portfolio & Case Studies - Web Devlopment and UI/UX Design Projects | SquareUp"
      description="Explore our portfolio of real-world projects including web devlopment, UI/UX design , and mobile apps. See how SquareUp delivers scalable and impactful digital solutions."
      path="/work"
    />
      <section className="w-full border-x border-subtle" id="our-works">
        <SectionHeader 
          title="Our Works" 
          subtitle="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
          bgImage={wave}
        />
        <IntroBlock 
          title="At SquareUp"
          description="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
          label="Here are ten examples of our notable works:"
        />
        <WorkGrid projects={workData} />

        <CTABanner 
          title="Let us Bring your Ideas to Life in the Digital World."
          subtitle="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
        />
      </section>
    </>
  );
};

export default Work;