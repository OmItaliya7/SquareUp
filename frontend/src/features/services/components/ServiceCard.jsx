import { memo } from "react";

const ServiceCard = ({ icon, title, id }) => {
  return (
    <div className={`flex flex-col p-5 xl:p-10 2xl:p-12.5 gap-5 xl:gap-6 2xl:gap-7.5 ${id % 2 === 0 ? 'border-b border-subtle ' : 'border-r border-b border-subtle'}`}>
      {/* Icon */}
      <img src={icon} alt={title} loading="lazy" decoding="async" className="object-contain size-14 xl:size-16 2xl:size-22" />
      {/* Title */}
      <h4 className="font-medium text-base 2xl:text-xl leading-normal tracking-[-0.6%] text-secondary">
        {title}
      </h4>
    </div>
  );
};

export default memo(ServiceCard);