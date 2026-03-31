import { memo } from "react";

const JobCard = ({ title, icon, description, index }) => {

  const isOdd = (index + 1) % 2 !== 0;
  const isThird = (index + 1) % 3 !== 0;

  
  return (
    <div
      className={`
        flex flex-col justify-between
        p-7.5 xl:p-10 2xl:p-12.5
        bg-[#1C1C1C]
        gap-6 xl:gap-10 
        border-b border-[#262626]
         ${isOdd ? 'md:border-r' : 'md:border-r-0'} 
         ${isThird ? 'lg:border-r' : 'lg:border-r-0'}
         last:border-b-0 
         lg:nth-last-[-n+3]:border-b-0
       
      `}
    >
      <div className="flex flex-col gap-4.5 2xl:gap-7.5">
        {/* ICON CONTAINER*/}
        <div className="size-14 xl:size-18.5 2xl:size-22 shrink-0 ">
          <img
            src={icon}
            alt={title}
            loading="lazy"
            decoding="async"
            className="object-contain w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-3.5 2xl:gap-5">
          <h3 className="text-white text-[20px] 2xl:text-[24px] font-medium leading-normal tracking-[.6%]">
            {title}
          </h3>
          <p className="text-[#E6E6E6] text-sm xl:text-base 2xl:text-lg font-normal tracking-[.6%]">
            {description}
          </p>
        </div>
      </div>

      <div>
        <button className="px-4 py-3.5 2xl:py-4.5 rounded-lg text-white bg-[#262626] border border-[#2A2A2A] hover:bg-[#2A2A2A] transition-colors font-medium text-sm 2xl:text-lg w-full leading-6">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default memo(JobCard);