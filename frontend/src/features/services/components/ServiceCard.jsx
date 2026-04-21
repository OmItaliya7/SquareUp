// import { memo } from "react";

// const ServiceCard = ({ icon, title, index, total }) => {
//   const isEven = (index + 1) % 2 === 0
//   const isFourth = (index + 1) % 4 === 0
//   const isLastRowMobile = index >= total - 2
//   const isLastRowDesktop = index >= total - 4
//   return (
//     <div
//       className={` 
//         flex flex-col gap-5 xl:gap-6 2xl:gap-7.5        
//         p-5 xl:p-10 2xl:p-12.5
//         bg-bg-tertiary
//         border-r border-border-subtle
//         ${isEven ? 'border-r-0 xl:border-r' : ''}
//         ${isFourth ? 'xl:border-r-0' : ''}
//         border-b border-border-subtle
//         ${isLastRowMobile ? 'border-b-0 xl:border-b' : ''}
//         ${isLastRowDesktop ? 'xl:border-b-0' : ''}
//       `}
//     >
//       {/* Icon */}
//       <div className="size-14 xl:size-16 2xl:size-22 shrink-0">
//         <img src={icon} alt={title} loading="lazy" decoding="async" className="object-contain w-full h-full" />
//       </div>

//       {/* Title */}
//       <h4 className="font-medium leading-snug text-text-secondary text-base 2xl:text-xl tracking-[.6%]">
//         {title}
//       </h4>
//     </div>
//   );
// };

// export default memo(ServiceCard);




import { memo } from "react";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col gap-5 xl:gap-6 2xl:gap-7.5 p-5 xl:p-10 2xl:p-12.5 bg-bg-tertiary">
      {/* Icon */}
      <img src={icon} alt={title} loading="lazy" decoding="async" className="object-contain size-14 xl:size-16 2xl:size-22" />
      {/* Title */}
      <h4 className="text-base font-medium text-text-secondary 2xl:text-xl tracking-[.6%]">
        {title}
      </h4>
    </div>
  );
};

export default memo(ServiceCard);