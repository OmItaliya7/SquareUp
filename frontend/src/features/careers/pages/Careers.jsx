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
      
        <section className="w-full border-x border-subtle" id="careers">
          
            <SectionHeader
              title="Join Our Team at SquareUp"
              subtitle="Unlock your potential and join our team of innovators and problem solvers."
              bgImage={wave}
            />
        
            {/* 1. INTRO BLOCK */}
            <IntroBlock
              title="Welcome to SquareUp, where talent meets opportunity!"
              description="At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us."
              label="Why Work at SquareUp?"
            />

            {/* 2. WHY WORK BOXES  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-subtle divide-y lg:divide-x divide-subtle">
              {whyWorkData.map((item) => (
                <div key={item.id} className="flex flex-col px-6 py-10 xl:px-10 xl:py-20 2xl:px-12.5 2xl:py-25 gap-5 xl:gap-7.5 2xl:gap-12.5">
                  {/* 1. Title  */}
                    <h3 className="pb-4 md:pb-6 xl:pb-10 2xl:pb-12.5 border-b border-subtle font-medium text-[26px] xl:text-[32px] 2xl:text-[40px] leading-[1.3] lg:leading-normal text-accent-secondary">
                      {item.title}
                    </h3>

                  {/* 2. Description */}
                    <p className="text-sm xl:text-base 2xl:text-lg leading-normal text-muted">
                      {item.description}
                    </p>
                </div>
              ))}
            </div>
         
            {/* 3. CURRENT OPENINGS HEADER BLOCK */}
            <div className="py-10 pl-4 xl:p-10 xl:pt-20 xl:pr-62.5 2xl:p-12.5 2xl:pt-30">
              <div className="flex flex-col gap-1.5 xl:gap-2.5 2xl:gap-3.5">
                <h2 className="font-semibold text-[28px] xl:text-[38px] 2xl:text-5xl leading-none text-primary">
                  Current Openings
                </h2>
                <p className="text-sm xl:text-base 2xl:text-lg leading-normal tracking-[-.6%] text-muted">
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
            <HighlightCTA className="border-t border-subtle" />
        </section>
      
      </>
    );
  };

  export default Careers;