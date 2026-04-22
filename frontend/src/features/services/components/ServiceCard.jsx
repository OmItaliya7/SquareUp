import { memo } from "react";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col gap-5 bg-bg-tertiary p-5 xl:gap-6 xl:p-10 2xl:gap-7.5 2xl:p-12.5">
      {/* Icon */}
      <img src={icon} alt={title} loading="lazy" decoding="async" className="object-contain size-14 xl:size-16 2xl:size-22" />
      {/* Title */}
      <h4 className="text-base font-medium leading-normal tracking-[-0.6%] text-secondary 2xl:text-xl">
        {title}
      </h4>
    </div>
  );
};

export default memo(ServiceCard);