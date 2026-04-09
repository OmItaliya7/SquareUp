import grid from "../../assets/images/backgrounds/grid.webp";
import logo from "../../assets/logo/brand/logo-main.svg";
import wave from "../../assets/images/backgrounds/about-wave.webp";
import { Link } from "react-router-dom";

const CTABanner = ({ title, subtitle }) => {
  return (
    <section className="w-full ">
      
        <div className="
          relative overflow-hidden 
          border-x  border-border-subtle
          px-4 py-12.5
          xl:py-25
          2xl:py-30
        ">
          {/* BACKGROUND LAYERS */}
          <img
            src={wave}
            alt=""
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
          <div className="absolute inset-0 bg-bg-banner opacity-[0.02] mix-blend-color-dodge pointer-events-none" />

          {/* CONTENT LAYER  */}
          <div className="relative z-10 flex flex-col items-center text-center gap-5.75 xl:gap-[25.5px] 2xl:gap-[52.2px]">
            
            {/* Logo Box */}    
              <img 
                src={logo} 
                alt="SquareUp" 
                className="size-12.5 xl:size-15 2xl:size-20 " 
              />
              
            <div className="space-y-2 xl:space-y-2.5 2xl:space-y-3.5">
              {/* Heading */}
              <h2 className="text-2xl font-semibold text-text-primary xl:text-3xl 2xl:text-[38px] ">
                {title}
              </h2>

              {/* Subtitle */}
              <p className="text-text-secondary text-sm xl:text-base 2xl:text-lg font-normal leading-6 lg:leading-normal tracking-[-0.06%] max-w-200 mx-auto">
                {subtitle}
              </p>
            </div>  

            {/* Button */}
            <Link to="/contact" className="px-6 py-3.5 2xl:px-8.5 2xl:py-4.5 bg-accent-primary hover:bg-bg-banner transition-colors text-sm 2xl:text-lg font-medium rounded-lg text-text-fourth">
              Start Project
            </Link>
          </div>
        </div>
    
    </section>
  );
};

export default CTABanner;