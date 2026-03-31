import { memo } from "react";
import squareIcon from "../../../assets/images/work/link-btn.webp";

const WorkCard = ({ category, image, brand, url, description, index }) => {
  const isLeft = index % 2 === 0; 
  return (
    <div className={`
      group flex flex-col bg-[#1A1A1A] border-[#262626]
      lg:border-r ${isLeft ? 'lg:border-r' : ''}
      border-b
      gap-5  xl:gap-7.5
    `}>
      
      {/* PART 1: Category Title Box (Matches Figma 'Hug' block) */}
      <div className=" p-[24px] xl:px-[40px] xl:py-[24px] 2xl:px-[50px] 2xl:py-[30px] border-b border-[#262626]">
        <h4 className="text-[#98989A] text-xl 2xl:text-[26px] font-medium ">
          {category}
        </h4>
      </div>

      {/* PART 2: Main Content Block */}
      <div className="flex flex-col px-[24px] pb-[40px] xl:px-[40px] xl:pb-[80px] 2xl:px-[50px] 2xl:pb-[100px] gap-[20px] xl:gap-[24px] 2xl:gap-[30px]">
        
      
        {/* Project Image */}
        <div className="overflow-hidden rounded-[10px] 2xl:rounded-xl border border-[#262626] bg-[#1C1C1C]">
          <img 
            src={image} 
            alt={brand} 
            className="object-cover w-full aspect-16/10" 
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Brand & Visit Link Section */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[10px] tracking-[.6%] ">
            <h3 className="text-lg font-medium 2xl:text-2xl text-[#E6E6E6]">{brand}</h3>
            <span className="inline-block px-[10px] py-[8px] xl:px-[12px] 2xl:px-[14px] 2xl:py-[10px] rounded-lg bg-[#262626] border border-[#262626] text-[#98989A] text-sm xl:text-base 2xl:text-xl  font-normal">
              {url}
            </span>
          </div>
    
          <a href={url} target="_blank" rel="noopener noreferrer" >
            <img src={squareIcon} alt="Visit" className="size-[46px] 2xl:size-[54px]"  loading="lazy"/>
          </a>
        </div>

        {/* Project Description */}
        <div>
          <p className= " text-[#98989A] text-[14px] xl:text-base 2xl:text-lg font-normal leading-[150%]">
            {description}
          </p>
        </div>
        
  
      </div>
    </div>
  );
};

export default memo(WorkCard);