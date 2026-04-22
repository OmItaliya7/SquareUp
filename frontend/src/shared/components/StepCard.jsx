import { memo } from "react";

const StepCard = ({ number, title, description, variant = "default" }) => {
  const variants = {
    default: "text-muted",
    highlight: "text-accent-secondary",
  };

  const titleColor = variants[variant] || variants.default;

  return (
    <div className="
      flex flex-col gap-7.5 
      px-6 py-10 
      xl:gap-10 xl:px-10 xl:py-20
      2xl:gap-12.5 2xl:px-12.5 2xl:py-25
    ">      
      
      {/* 1. TOP SECTION: Number and Title Row */}
      <div className="flex items-end gap-2.5 xl:gap-3.5"> 
        {/* Large Neon Number */}
          <span className="text-[80px] font-semibold leading-[0.8] text-accent-secondary xl:text-[120px] 2xl:text-[150px]">
            {number}
          </span>

          <h3 className={`w-full border-b border-subtle pb-3.5 text-xl font-medium leading-none xl:pb-5 xl:text-2xl 2xl:pb-6.5 2xl:text-3xl ${titleColor}`}>
            {title}
          </h3>
      </div>

      {/* 2. BOTTOM SECTION: Description  */}
        <p className="text-[14px] text-muted xl:text-base 2xl:text-lg leading-normal">
          {description}
        </p>
         
    </div>
  );
};

export default memo(StepCard);