  import Container from "../../../shared/ui/Container";
  import SectionHeader from "../../../shared/components/SectionHeader";
  import IntroBlock from "../../../shared/components/IntroBlock";
  import HighlightCTA from "../../../shared/components/HighlightCTA";
  import JobGrid from "../components/JobGrid";
  import { whyWorkData, jobCategories } from "../data/careersData";
 import wave from "../../../assets/images/backgrounds/faq-wave.webp";

import SEO from "../../../shared/components/SEO";

  const Careers = () => {
    return (
      <>
        <SEO
          title="Careers | Join Our Team - SquareUp"
          description="Explore career opportunities at SquareUp, a digital product agency dedicated to crafting exceptional digital experiences."
          path="/careers"
        />
      
        <Container>
        <SectionHeader
          title="Join Our Team at SquareUp"
          subtitle="Unlock your potential and join our team of innovators and problem solvers."
          bgImage={wave}
        />

        
          <div className="flex flex-col -mt-px">
            {/* 1. INTRO BLOCK (Reusable) */}
            <IntroBlock
              title="Welcome to SquareUp, where talent meets opportunity!"
              description="At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us."
              label="Why Work at SquareUp?"
            />

            {/* 2. WHY WORK BOXES  */}
            <div className="grid grid-cols-1 border-b divide-y border-x border-border-subtle lg:grid-cols-2 divide-border-subtle lg:divide-y-0 lg:divide-x">
              {whyWorkData.map((item, idx) => (
                <div
                  key={idx}
                  className={`px-6 py-10 xl:px-10 xl:py-20 2xl:px-12.5 2xl:py-25 flex flex-col  `}
                >
                  {/* 1. Title Container with Border  */}
                  <div className="pb-4 border-b border-border-subtle md:pb-6 lg:pb-8">
                    <h3 className="text-accent-secondary text-[26px] xl:text-[32px] 2xl:text-[40px] font-medium leading-normal">
                      {item.title}
                    </h3>
                  </div>

                  {/* 2. Description Container*/}
                  <div className="pt-4 md:pt-6 lg:pt-8">
                    <p className="text-sm font-normal leading-normal text-text-muted xl:text-base 2xl:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
         
            {/* 3. CURRENT OPENINGS HEADER BLOCK */}
            <div className="py-10 pl-4 border-b border-x border-border-subtle xl:pl-10 xl:pb-10 xl:pt-20">
              <div className="flex flex-col gap-1.5 xl:gap-2.5 2xl:gap-3.5">
                <h2 className="text-text-primary text-[28px] xl:text-[38px] 2xl:text-[48px] font-semibold">
                  Current Openings
                </h2>
                <p className="max-w-5xl text-sm font-normal text-text-muted xl:text-base 2xl:text-lg">
                  We are always on the lookout for talented individuals who are
                  passionate about creating exceptional digital experiences.
                  Whether you're a designer, engineer, project manager, or have
                  skills that align with our agency's mission, we encourage you
                  to explore our open positions.
                </p>
              </div>
            </div>

            {/* 4. JOB CATEGORIES LOOP */}
            {jobCategories.map((category, index) => (
              <JobGrid
                key={index}
                categoryTitle={category.name}
                jobs={category.jobs}
              />
            ))}

            {/* 5. CTA HIGHLIGHT (Reusable) */}
            <HighlightCTA />
          </div>
        </Container>
      
      </>
    );
  };

  export default Careers;