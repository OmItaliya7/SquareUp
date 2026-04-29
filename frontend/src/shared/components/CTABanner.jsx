import grid from "../../assets/images/backgrounds/grid.webp";
import logo from "../../assets/logo/brand/logo-main.svg";
import wave from "../../assets/images/backgrounds/about-wave.webp";
import { Link } from "react-router-dom";

const CTABanner = ({ title, subtitle, className }) => {
  return (
        <section id="CTABanner" className={`relative overflow-hidden px-4 py-12.5 md:px-8 md:py-16 xl:px-0 xl:py-25 2xl:py-30 ${className}`}>
          {/* BACKGROUND LAYERS */}
          <img
            src={wave}
            alt="bg-wave"
            className="absolute inset-0 pointer-events-none w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: `url(${grid})`,
              backgroundRepeat: "repeat",
              backgroundSize: "50px", 
            }}
          />

          {/* CONTENT LAYER  */}
          <div className="relative z-10 flex flex-col items-center gap-7 md:gap-8 xl:gap-10 2xl:gap-12.5 text-center">
            
            {/* Logo Box */}    
              <img 
                src={logo} 
                alt="SquareUp" 
                className="size-12.5 md:size-14 2xl:size-20" 
              />
              
            <div className="flex w-full flex-col gap-1.5 md:gap-2 xl:gap-2.5 2xl:gap-3.5">

              {/* Heading */}
              <h2 className="font-semibold text-2xl md:text-[28px] xl:text-3xl 2xl:text-[38px] text-primary">
                {title}
              </h2>

              {/* Subtitle */}
              <p className="max-w-200 2xl:max-w-250 mx-auto text-sm md:text-base 2xl:text-lg leading-6 lg:leading-normal tracking-[-.6%] text-secondary">
                {subtitle}
              </p>

            </div>  

            {/* Button */}
            <Link to="/contact" className="px-6 py-3.5 2xl:px-8.5 2xl:py-4.5 rounded-md 2xl:rounded-lg bg-accent-primary hover:bg-bg-banner font-medium text-sm 2xl:text-lg leading-normal text-fourth transition-colors">
              Start Project
            </Link>
            
          </div>
        </section>
  );
};

export default CTABanner;