import grid from "../../assets/images/backgrounds/grid.webp";
import logo from "../../assets/logo/brand/logo-main.svg";
import wave from "../../assets/images/backgrounds/about-wave.webp";

const CTABanner = ({ title, subtitle }) => {
  return (
    <section className="bg-[#1A1A1A] w-full">
      
        <div className="
          relative overflow-hidden 
          border-x  border-[#262626]
          bg-[#1A1A1A]
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
          <div className="absolute inset-0 bg-[#ACFF24] opacity-[0.02] mix-blend-color-dodge pointer-events-none" />

          {/* CONTENT LAYER  */}
          <div className="relative z-10 flex flex-col items-center text-center gap-5.75 xl:gap-[25.5px] 2xl:gap-[52.2px]">
            
            {/* Logo Box */}
            <div className="size-12.5] xl:size-15 2xl:size-20 bg-[#ACFF24] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(172,255,36,0.3)]">
              <img 
                src={logo} 
                alt="SquareUp" 
                className="w-6.5 h-7.5 xl:w-8 xl:h-9 2xl:w-10.5 2xl:h-12" 
              />
            </div>

            <div className="space-y-2 xl:space-y-2.5 2xl:space-y-3.5">
              {/* Heading */}
              <h2 className="text-2xl font-semibold text-white xl:text-3xl 2xl:text-[38px] ">
                {title}
              </h2>

              {/* Subtitle */}
              <p className="text-[#E6E6E6] text-sm xl:text-base 2xl:text-lg font-normal leading-6 lg:leading-normal tracking-[-0.06%] max-w-200 mx-auto">
                {subtitle}
              </p>
            </div>  

            {/* Button */}
            <button className="px-6 py-3.5 2xl:px-8.5 2xl:py-4.5 bg-[#9EFF00] hover:bg-[#ACFF24] transition-colors text-sm 2xl:text-lg font-medium rounded-lg text-[#1A1A1A]">
              Start Project
            </button>
          </div>
        </div>
    
    </section>
  );
};

export default CTABanner;