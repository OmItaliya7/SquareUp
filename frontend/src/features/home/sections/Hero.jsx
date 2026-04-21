import grid from "../../../assets/images/backgrounds/grid.webp";
import { Link } from "react-router-dom";

const audience = [
  "Startups",
  "Enterprise leaders",
  "Media & Publishers",
  "Social Good",
];

const Hero = () => {
  return (
    <section className="w-full lg:border-x border-border-subtle" id="hero">
      <div className="relative overflow-hidden pt-20 pb-[205px] text-center md:pt-26 md:pb-40 xl:pt-28 xl:pb-[274px]">

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url(${grid})`,
            backgroundRepeat: "repeat",
            backgroundSize: "60px",
          }}
        />

        {/* Mountain Background */}
        <img
          src="/images/hero-bg.webp"
          alt="hero background"
          width="1400"
          height="700"
          className="pointer-events-none absolute bottom-0 left-1/2 w-[900px] -translate-x-1/2 opacity-70 mix-blend-screen sm:w-[1100px] md:w-[1300px] xl:w-[1500px] 2xl:w-[1700px]"
          decoding="async"
          loading="eager"
          fetchPriority="high"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center gap-10 2xl:gap-[50px]">

          {/* Title */}
          <h1 className="max-w-[900px] text-[34px] font-semibold leading-[1.2] sm:text-[44px] md:text-[56px] md:leading-none lg:text-[64px] xl:text-[72px] 3xl:text-[80px]">
            A Digital Product Studio that will Work
          </h1>

          {/* Capsule */}
          <div className="rounded-xl border border-border-subtle bg-[#24242433] px-4 py-4 backdrop-blur-md sm:px-5 md:px-7 xl:px-8 2xl:px-10 2xl:py-5">
            
            {/* Mobile */}
            <p className="text-base text-text-muted md:hidden">
              For startups, enterprise leaders, media & publishers, and social good.
            </p>

            {/* Desktop */}
            <div className="hidden items-center gap-1.5 md:flex">
              <span className="text-base text-text-muted xl:text-lg 2xl:text-[22px]">
                For
              </span>

              {audience.map((item, index) => (
                <div key={item} className="flex items-center gap-1.5">
                  <span className="rounded-md bg-bg-secondary px-2.5 py-2 text-sm text-text-primary xl:text-lg 2xl:px-3.5 2xl:py-3 2xl:text-[22px]">
                    {item}
                  </span>

                  {index !== audience.length - 1 && (
                    <span className="text-base text-text-muted xl:text-lg 2xl:text-[22px]">
                      {index === audience.length - 2 ? "and" : ","}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3.25">
            <Link
              to="/work"
              className="bg-[#24242433] backdrop-blur-md border border-border-strong px-5 py-3.5 2xl:px-7 2xl:py-4.5 font-medium text-text-primary text-sm rounded-lg"
            >
              Our Works
            </Link>

            <Link
              to="/contact"
              className="bg-accent-primary text-text-tertiary font-medium text-sm px-5 py-3.5 2xl:px-7 2xl:py-4.5 rounded-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
