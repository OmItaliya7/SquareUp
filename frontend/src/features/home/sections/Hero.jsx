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
    <section className="w-full lg:border-x border-subtle" id="hero">
      <div className="relative overflow-hidden pt-20 pb-51.25 text-center md:pt-26 md:pb-40 xl:pt-28 xl:pb-68.5">

        {/* Grid BG */}
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
          className="absolute bottom-0 -translate-x-1/2 pointer-events-none left-1/2 w-225 opacity-70 mix-blend-screen sm:w-275 md:w-325 xl:w-375 2xl:w-425"
          decoding="async"
          loading="eager"
          fetchPriority="high"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 2xl:gap-12.5">

          {/* Title */}
          <h1 className="max-w-130 2xl:max-w-200 text-[34px] font-semibold leading-[1.2] sm:text-[38px] md:text-[40px] lg:text-[44px] xl:text-[48px] 2xl:text-[68px]">
            A Digital Product Studio that will Work
          </h1>

          {/* Capsule */}
          <div className="rounded-xl border border-subtle bg-[#24242433] px-5 py-4.5 backdrop-blur-md sm:px-5 md:px-7 xl:px-7.5 2xl:px-10 2xl:py-6">
            
            {/* Mobile Capsule */}
            <p className="text-base text-muted md:hidden">
              For startups, enterprise leaders, media & publishers, and social good.
            </p>

            {/* Desktop Capsule */}
            <div className="hidden items-center gap-1.5 md:flex">
              <span className="text-base text-muted xl:text-lg 2xl:text-[22px]">
                For
              </span>

              {audience.map((item, index) => (
                <div key={item} className="flex items-center gap-1.5">
                  <span className="rounded-md bg-bg-secondary px-2.5 py-2 text-sm text-primary xl:text-lg 2xl:px-3.5 2xl:py-3 2xl:text-[22px]">
                    {item}
                  </span>

                  {index !== audience.length - 1 && (
                    <span className="text-base text-muted xl:text-lg 2xl:text-[22px]">
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
              className="bg-[#24242433] backdrop-blur-md border border-strong px-5 py-3.5 2xl:px-7 2xl:py-4.5 font-medium text-primary text-sm 2xl:text-lg rounded-lg"
            >
              Our Works
            </Link>

            <Link
              to="/contact"
              className="bg-accent-primary text-tertiary font-medium text-sm 2xl:text-lg px-5 py-3.5 2xl:px-7 2xl:py-4.5 rounded-lg"
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
