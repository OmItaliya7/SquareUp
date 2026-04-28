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
    <section id="hero" className="w-full lg:border-x border-subtle">
      <div className="relative overflow-hidden pt-20 pb-51.25 md:pt-26 md:pb-40 xl:pt-28 xl:pb-68.5 text-center">

        {/* Grid BG */}
        <div className="absolute inset-0 opacity-50 pointer-events-none"
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
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none w-225 sm:w-275 md:w-325 xl:w-375 2xl:w-425 opacity-70 mix-blend-screen"
          decoding="async"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center mx-auto max-w-7xl gap-10 2xl:gap-12.5">

          {/* Title */}
          <h1 className="max-w-130 2xl:max-w-200 font-semibold text-[34px] sm:text-[38px] md:text-[40px] lg:text-[44px] xl:text-5xl 2xl:text-[68px] leading-[1.2] text-primary">
            A Digital Product Studio that will Work
          </h1>

          {/* Capsule */}
          <div className="px-5 py-4.5 md:px-7 xl:px-7.5 2xl:px-10 2xl:py-6 border border-subtle rounded-lg 2xl:rounded-xl bg-[#24242433] backdrop-blur-md">
            
            {/* Mobile Capsule */}
            <p className="md:hidden text-base text-muted">
              For startups, enterprise leaders, media & publishers, and social good.
            </p>

            {/* Desktop Capsule */}
            <div className="hidden md:flex items-center gap-1.5">
              <span className="text-base text-muted xl:text-lg 2xl:text-[22px]">
                For
              </span>

              {audience.map((item, index) => (
                <div key={item} className="flex items-center gap-1.5">
                  <span className="px-2.5 py-2 2xl:px-3.5 2xl:py-3 rounded-md 2xl:rounded-lg bg-bg-secondary text-sm xl:text-lg 2xl:text-[22px] text-primary">
                    {item}
                  </span>

                  {index !== audience.length - 1 && (
                    <span className="text-base xl:text-lg 2xl:text-[22px] text-muted">
                      {index === audience.length - 2 ? "and" : ","}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3.25">
            <Link to="/work" className="px-5 py-3.5 2xl:px-7 2xl:py-4.5 border border-strong rounded-lg 2xl:rounded-[10px] bg-[#24242433] backdrop-blur-md font-medium text-sm 2xl:text-lg text-primary">
              Our Works
            </Link>

            <Link to="/contact" className="px-5 py-3.5 2xl:px-7 2xl:py-4.5 rounded-lg 2xl:rounded-[10px] bg-accent-primary font-medium text-sm 2xl:text-lg text-tertiary transition hover:bg-bg-banner">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;