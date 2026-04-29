import { memo } from "react";

const StepCard = ({ number, title, description, variant = "default", id }) => {

  const variants = {
    default: "text-muted",
    highlight: "text-accent-secondary",
  };

  const titleColor = variants[variant] || variants.default;

  return (
    <div className={`flex flex-col px-6 py-10 xl:px-10 xl:py-20 2xl:px-12.5 2xl:py-25 gap-7.5 xl:gap-10 2xl:gap-12.5 border-b border-subtle ${id % 2 !== 0 ? "lg:border-r border-subtle" : ""} `}>      
      
      {/* 1. Number and Title Row */}
      <div className="flex items-end gap-2.5 xl:gap-3.5"> 
          <span className="font-semibold text-[80px] xl:text-[120px] 2xl:text-[150px] leading-[0.8] text-accent-secondary">
            {number}
          </span>

          <h3 className={`w-full pb-3.5 xl:pb-5 2xl:pb-6.5 border-b border-subtle font-medium text-xl xl:text-2xl 2xl:text-3xl ${titleColor}`}>
            {title}
          </h3>
      </div>

      {/* 2. Description  */}
      <p className="text-sm xl:text-base 2xl:text-lg leading-normal text-muted">
        {description}
      </p>
         
    </div>
  );
};

export default memo(StepCard);