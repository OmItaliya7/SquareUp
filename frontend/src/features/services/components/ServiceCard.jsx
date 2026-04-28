import { memo } from "react";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col p-5 xl:p-10 2xl:p-12.5 gap-5 xl:gap-6 2xl:gap-7.5 bg-bg-tertiary">
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







// import { memo } from "react";

// const ServiceCard = ({ icon, title }) => {
//   return (
//     <div className="flex flex-col p-5 xl:p-10 2xl:p-12.5 gap-5 xl:gap-6 2xl:gap-7.5 bg-bg-tertiary">
//       {/* Icon */}
//       <div className="p-6 w-[89px] block  border border-subtle rounded-lg" style={{ background: 'linear-gradient(130.97deg, rgba(158, 255, 0, 0.2) -66.81%, rgba(158, 255, 0, 0) 37.19%)'}}>
//         <img src={icon} alt={title} loading="lazy" decoding="async" className="object-contain w-10 h-10" />
//       </div>
//       {/* Title */}
//       <h4 className="font-medium text-base 2xl:text-xl leading-normal tracking-[-0.6%] text-secondary">
//         {title}
//       </h4>
//     </div>
//   );
// };

// export default memo(ServiceCard);