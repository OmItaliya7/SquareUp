    const IntroBlock = ({ title, description, label }) => (
      <div className="flex flex-col px-4 py-10 xl:p-10 xl:pt-20 2xl:p-12.5 2xl:pt-30 gap-7.5 xl:gap-10 2xl:gap-12.5 border-b border-subtle">
        
        <div className="flex flex-col gap-1.5 md:gap-2.5 2xl:gap-3.5">
            <h2 className="font-semibold text-[28px] xl:text-[38px] 2xl:text-5xl leading-none text-primary">
              {title}
            </h2>
            <p className="max-w-237.5 2xl:max-w-300 text-sm xl:text-base 2xl:text-lg leading-normal tracking-[-.6%] text-secondary">
              {description}
            </p>
        </div>
        
        <p className="inline-flex self-start p-2.5 2xl:px-3.5 2xl:py-3 rounded-md 2xl:rounded-lg bg-bg-secondary text-base xl:text-lg 2xl:text-[22px] leading-none text-primary">
          {label}
        </p>
        
      </div>
  );

  export default IntroBlock;