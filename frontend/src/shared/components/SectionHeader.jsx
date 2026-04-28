import { memo } from "react";
import grid from "../../assets/images/backgrounds/grid.webp";

const SectionHeader = ({ title, subtitle, bgImage, className = "" }) => {
  return (
        <div className="relative px-4 py-12.5 md:px-25 md:py-20 xl:px-62.5 xl:py-25 2xl:px-75 2xl:py-30 border-b border-subtle">
          {/* 1. BACKGROUND WAVE */}
          {bgImage && (
          <img
            src={bgImage}
            alt="background image"
            className="absolute inset-0 pointer-events-none w-full h-full object-cover opacity-60 mix-blend-overlay"
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

          {/* CONTENT LAYER */}
          <div className="relative z-10 flex flex-col gap-4 text-center">
            <h1 className="font-semibold text-[28px] xl:text-[38px] 2xl:text-5xl leading-[1.2] text-primary">
              {title}
            </h1>

            <p className="max-w-250 text-sm xl:text-base 2xl:text-lg leading-6 tracking-[-.6%] text-secondary ">
              {subtitle}
            </p>
          </div>
        </div>
  )
}
export default memo(SectionHeader)