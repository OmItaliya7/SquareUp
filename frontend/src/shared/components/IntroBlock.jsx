    const IntroBlock = ({ title, description, label }) => (
      <div className="flex flex-col gap-7.5 border-b border-subtle px-4 py-10 xl:gap-10 xl:p-10 xl:pt-20 2xl:gap-12.5 2xl:p-12.5 2xl:pt-30">
        
        <div className="flex flex-col gap-1.5 md:gap-2.5 2xl:gap-3.5">
            <h2 className="text-[28px] font-semibold leading-none text-primary xl:text-[38px] 2xl:text-[48px]">
              {title}
            </h2>
            <p className="max-w-237.5 text-sm tracking-[-.6%] leading-normal text-secondary xl:text-base 2xl:max-w-300 2xl:text-lg">
              {description}
            </p>
        </div>
        
        <p className="inline-flex self-start rounded-md 2xl:rounded-lg bg-bg-secondary p-2.5 text-base text-primary xl:text-lg 2xl:px-3.5 2xl:py-3 2xl:text-[22px] leading-none">
          {label}
        </p>
        
      </div>
  );

  export default IntroBlock;