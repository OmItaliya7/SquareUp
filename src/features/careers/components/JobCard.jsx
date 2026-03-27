const JobCard = ({ title, icon, description, index }) => {
  return (
    <div
      className={`
        flex flex-col justify-between
        p-[30px] xl:p-[40px] 2xl:p-[50px]
        bg-[#1C1C1C]
        gap-[24px] xl:gap-[40px]
        border-b border-[#262626]
        ${(index + 1) % 2 !== 0 ? 'md:border-r' : 'md:border-r-0'} 
        ${(index + 1) % 3 !== 0 ? 'lg:border-r' : 'lg:border-r-0'}
        last:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0
      `}
    >
      <div className="flex flex-col gap-[18px] 2xl:gap-[30px]">
        {/* ICON CONTAINER: Matches Figma background/border */}
        <div className="size-14 xl:size-18.5 2xl:size-22 shrink-0 ">
          <img
            src={icon}
            alt={title}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-[14px] 2xl:gap-[20px]">
          <h3 className="text-white text-[20px] 2xl:text-[24px] font-medium leading-normal tracking-[.6%]">
            {title}
          </h3>
          <p className="text-[#E6E6E6] text-sm xl:text-base 2xl:text-lg font-normal tracking-[.6%]">
            {description}
          </p>
        </div>
      </div>

      <div>
        <button className="px-[16px] py-[14px] 2xl:py-[18px] rounded-lg text-white bg-[#262626] border border-[#2A2A2A] hover:bg-[#2A2A2A] transition-colors font-medium text-sm 2xl:text-lg w-full leading-[24px]">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;