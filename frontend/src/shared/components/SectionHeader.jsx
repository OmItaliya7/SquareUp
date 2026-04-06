import { memo } from "react";
import grid from "../../assets/images/backgrounds/grid.webp";

const SectionHeader = ({ title, subtitle, bgImage }) => {
  return (
    <div className="bg-[#1A1A1A] w-full">
      
        <div className="
          relative 
          border-x border-b border-[#262626]
          bg-[#1A1A1A]
          px-4 py-12.5
          md:px-25 md:py-20
          xl:px-62.5 xl:py-25
          2xl:px-75 2xl:py-30
        ">
          
          {/* 1. BACKGROUND WAVE */}
          {bgImage && (
          <img
            src={bgImage}
            alt="background image"
            className="absolute inset-0 object-cover w-full h-full pointer-events-none opacity-60 mix-blend-overlay"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        )}

          {/* 2. SQUARES GRID  */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{  
              backgroundImage: `url(${grid})`,
              backgroundRepeat: "repeat",
              backgroundSize: "50px", 
            }}
          />

          {/* 3. BRAND TINT*/}
          <div className="absolute inset-0 bg-[#ACFF24] opacity-[0.01] mix-blend-color-dodge pointer-events-none" />

          {/* CONTENT LAYER */}
          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
            <h1 className="
              text-white font-semibold
              text-[28px] 
              xl:text-[38px] 
              2xl:text-[48px]
              leading-[1.2]
            ">
              {title}
            </h1>

            <p className="
              text-[#E6E6E6] 
              max-w-200
              font-normal
              text-[14px] 
              xl:text-[18px] 
              2xl:text-[20px]
              xl:leading-normal
              leading-6
              tracking-[.6%]
            ">
              {subtitle}
            </p>
          </div>
        </div>
      
    </div>
  )
}

export default memo(SectionHeader)