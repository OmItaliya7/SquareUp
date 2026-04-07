
import { memo } from "react";

const StepCard = ({ number, title, description, index, variant = "default" }) => {
  const isLeft = index % 2 === 0;
  const variants = {
    default: "text-[#98989A]",
    highlight: "text-[#D8FF99]",
  };

  const titleColor = variants[variant] || variants.default;

  return (
    <div className={`
      flex flex-col border-[#262626]
      ${isLeft ? 'lg:border-r' : ''}
      border-b 
      px-6 py-10 xl:px-10 xl:py-20 2xl:px-12.5 2xl:py-25
      gap-7.5 xl:gap-10 2xl:gap-12.5
    `}>      
      
      {/* 1. TOP SECTION: Number and Title Row */}
      <div className="flex items-end gap-2.5 xl:gap-3.5"> 
        {/* Large Neon Number */}
        <div className="shrink-0">
          <span className="text-[80px] xl:text-[120px] 2xl:text-[150px] font-semibold text-[#D8FF99] leading-[0.8] block">
            {number}
          </span>
        </div>
        
        {/* Title: The line below this div will now align with the number's baseline */}
        <div className="flex-1 border-b border-[#262626]">
          <h3 className={`text-xl font-medium xl:text-2xl 2xl:text-3xl  pb-3.5 xl:pb-5 2xl:pb-6.5 ${titleColor}`}>
            {title}
          </h3>
        </div>
      </div>

      {/* 2. BOTTOM SECTION: Description  */}
      <div>
        <p className="text-[#98989A] text-[14px] xl:text-base 2xl:text-lg font-normal leading-normal">
          {description}
        </p>
      </div>
      
    </div>
  );
};

export default memo(StepCard);