

const StepCard = ({ number, title, description, index, page }) => {
  const isAboutPage = page === 'about';
  return (
    <div className={`
      flex flex-col bg-[#1A1A1A] border-[#262626]
      xl:border-r ${index % 2 === 0 ? 'xl:border-r' : 'xl:border-r-0'}
      border-b 
      px-[24px] py-[40px] xl:px-[40px] xl:py-[80px] 2xl:px-[50px] 2xl:py-[100px]
      gap-[30px] xl:gap-[40px] 2xl:gap-[50px]
    `}>      
      
      {/* 1. TOP SECTION: Number and Title Row */}
      <div className="flex items-end gap-[10px] xl:gap-[14px]"> 
        {/* Large Neon Number */}
        <div className="shrink-0">
          <span className="text-[80px] xl:text-[120px] 2xl:text-[180px] font-semibold text-[#D8FF99] leading-[0.8] block">
            {number}
          </span>
        </div>
        
        {/* Title: The line below this div will now align with the number's baseline */}
        <div className="flex-1 border-b border-[#262626]">
          <h3 className={`text-xl font-medium xl:text-2xl 2xl:text-3xl text-[#98989A] pb-[14px] xl:pb-[20px] 2xl:pb-[26px] ${isAboutPage ? 'text-[#D8FF99]' : 'text-[#E6E6E6]'}`}>
            {title}
          </h3>
        </div>
      </div>

      {/* 2. BOTTOM SECTION: Description Body */}
      {/* Removed 'gap' from parent and added specific margin-top for precision */}
      <div className="">
        <p className="text-[#98989A] text-[14px] xl:text-base 2xl:text-lg font-normal leading-normal">
          {description}
        </p>
      </div>
      
    </div>
  );
};

export default StepCard;