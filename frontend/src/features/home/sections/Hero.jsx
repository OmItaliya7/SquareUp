import grid from "../../../assets/images/backgrounds/grid.webp";
import Container from "../../../shared/ui/Container";
import { Link } from "react-router-dom";

const audience = [
  "Startups",
  "Enterprise leaders",
  "Media & Publishers",
  "Social Good",
];

const Hero = () => {
  return (
    <section className="w-full">
      <Container>
        <div
          className="
          relative overflow-hidden
          border-b md:border-x border-[#262626]
          flex items-center justify-center text-center  
          h-140          
          md:h-162.5
          xl:h-172.75        
          2xl:h-199       
        "
        >
          {/* GRID OVERLAY */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: `url(${grid})`,
              backgroundRepeat: "repeat",
              backgroundSize: "60px",
            }}
          />

          {/* MOUNTAIN */}
      
          <img
            src="/images/hero-bg.webp"
            alt="hero background"
            width="1200"
            height="600"
            className="absolute bottom-0 -translate-x-1/2 pointer-events-none left-1/2 w-225 md:w-300 xl:w-350 opacity-80 mix-blend-screen"
            decoding="async"
            loading="eager"
            fetchPriority="high"
          />

          {/* CONTENT */}
          <div className="relative z-10">
            <div className="flex flex-col gap-7.5 2xl:gap-10">
              {/* TITLE */}
              <div>
                <h1
                  className="
                  text-white font-semibold 
                  text-[34px] sm:text-[44px] md:text-[56px]
                  lg:text-[64px] xl:text-[72px] 3xl:text-[80px]
                  leading-[1.2]
                  md:leading-none
                "
                >
                  A Digital Product Studio <br className="hidden md:block" />
                  that will Work
                </h1>
              </div>

              <div
                className="
                bg-[#24242433] backdrop-blur-md z-10
                border border-[#262626]
                rounded-md
                py-4.5
                px-5 xl:px-7.5 
                2xl:px-10 2xl:py-6
                inline-flex mx-auto
              "
              >
                {/* MOBILE -> paragraph */}
                <p className="text-[#98989A] text-base font-normal leading-normal md:hidden">
                  For startups, enterprise leaders, media & publishers, and
                  social good.
                </p>

                {/* DESKTOP -> pills */}
                <div className="hidden gap-3 md:flex ">
                  <span className="text-[#98989A] text-lg 2xl:text-[22px] flex items-center justify-center">
                    For
                  </span>

                  {audience.map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5">

                      {i !== 0 && (
                        <span className="text-[#98989A] text-sm xl:text-lg 2xl:text-[22px]">
                          {i === audience.length - 1 ? "and" : ","}
                        </span>
                      )}

                      <span className="text-white text-sm xl:text-lg 2xl:text-[22px] bg-[#262626] border border-[#2A2A2A] rounded-md px-2.5 py-2 2xl:px-3.5 2xl:py-3">
                        {item}
                      </span>

                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div
              className="
              mt-10 2xl:mt-12.5
              flex 
              gap-3.25
              justify-center"
            >
              <Link
                to="/work"
                className="bg-[#24242433] backdrop-blur-md border border-[#333333] px-5 py-3.5 2xl:px-7 2xl:py-4.5 font-medium text-white text-sm rounded-lg"
              >
                Our Works
              </Link>

              <Link
                to="/contact"
                className="bg-[#9EFF00] text-[#262626] font-medium text-sm px-5 py-3.5 2xl:px-7 2xl:py-4.5 rounded-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
