import grid from "../../assets/images/backgrounds/grid.webp";
import logo from "../../assets/logo/brand/logo-main.svg";
import wave from "../../assets/images/backgrounds/about-wave.webp";
import { Link } from "react-router-dom";

const CTABanner = ({ title, subtitle, className }) => {
  return (
        <section id="CTABanner" className={`relative overflow-hidden px-4 py-12.5 md:px-8 md:py-16 xl:px-0 xl:py-25 2xl:py-30 ${className} `}>
          {/* BACKGROUND LAYERS */}
          <img
            src={wave}
            alt="bg-wave"
            className="absolute inset-0 object-cover w-full h-full pointer-events-none mix-blend-overlay opacity-60"
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
          <div className="relative z-10 flex flex-col items-center gap-7 text-center md:gap-8 xl:gap-10 2xl:gap-12.5">
            
            {/* Logo Box */}    
              <img 
                src={logo} 
                alt="SquareUp" 
                className="size-12.5 md:size-14 2xl:size-20" 
              />
              
            <div className="flex w-full flex-col gap-[6px] md:gap-[8px] xl:gap-[10px] 2xl:gap-[14px] ">
              {/* Heading */}
              <h2 className="text-2xl font-semibold text-primary md:text-[28px] xl:text-3xl 2xl:text-[38px]">
                {title}
              </h2>

              {/* Subtitle */}
              <p className="mx-auto max-w-200 2xl:max-w-250 text-sm leading-6 tracking-[-.6%] text-secondary md:text-base lg:leading-normal 2xl:text-lg">
                {subtitle}
              </p>
            </div>  

            {/* Button */}
            <Link to="/contact" className="rounded-md bg-accent-primary px-6 py-3.5 text-sm font-medium leading-normal text-fourth transition-colors hover:bg-bg-banner 2xl:px-8.5 2xl:py-4.5 2xl:text-lg">
              Start Project
            </Link>
          </div>
        </section>
  );
};

export default CTABanner;