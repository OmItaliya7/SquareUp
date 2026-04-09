  const IntroBlock = ({ title, description, label }) => (
    <div className="border-x border-border-subtle">
      {/* BOX 1: Title & Description */}
      <div className="flex flex-col gap-7.5 xl:gap-10 2xl:gap-12.5 px-4 py-10 xl:p-10 xl:pt-20 2xl:p-12.5 2xl:pt-30 border-b border-border-subtle">
        <div className="flex flex-col gap-2.5">
            <h2 className="text-[28px] xl:text-[38px] 2xl:text-[48px] font-semibold leading-none text-text-primary ">
              {title}
            </h2>
            <p className="text-text-muted font-normal text-sm xl:text-base 2xl:text-lg leading-normal tracking-[.6%] max-w-237.5 2xl:max-w-300">
              {description}
            </p>
        </div>
        <div>
        <span className="inline-flex items-center p-2.5 2xl:px-3.5 2xl:py-2.75 rounded-lg bg-bg-secondary text-text-primary text-base xl:text-lg 2xl:text-[22px] font-normal">
          {label}
        </span>
      </div>
      </div>
      
    </div>
  );

  export default IntroBlock;