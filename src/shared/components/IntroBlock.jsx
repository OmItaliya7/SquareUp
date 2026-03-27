
const IntroBlock = ({ title, description, label }) => (
  <div className="border-x  border-[#262626] bg-[#1A1A1A]">
    {/* BOX 1: Title & Description */}
    <div className="flex flex-col gap-[30px] xl:gap-[40px] 2xl:gap-[50px] px-[16px] py-[40px] xl:p-[40px] xl:pt-[80px] 2xl:p-[50px] 2xl:pt-[120px] border-b border-[#262626]">
       <div className="flex flex-col gap-[10px]">
          <h2 className="text-[28px] xl:text-[38px] 2xl:text-[48px] font-semibold leading-none text-white ">
            {title}
          </h2>
          <p className="text-[#E6E6E6] font-normal text-sm xl:text-base 2xl:text-lg leading-normal tracking-[.6%] max-w-[950px] 2xl:max-w-[1200px]">
            {description}
          </p>
       </div>
       <div>
       <span className="inline-flex items-center p-[10px] 2xl:px-[14px] 2xl:py-[11px] rounded-lg bg-[#262626] border border-[#2A2A2A] text-white text-base xl:text-lg 2xl:text-[22px]  font-normal">
         {label}
       </span>
    </div>
    </div>
    
  </div>
);

export default IntroBlock;