// import { memo } from "react";

// const JobCard = ({ title, icon, description, index }) => {

//   const isOdd = (index + 1) % 2 !== 0;
//   const isThird = (index + 1) % 3 !== 0;

  
//   return (
//     <div
//       className={`
//         flex flex-col justify-between
//         p-7.5 xl:p-10 2xl:p-12.5
//         bg-bg-tertiary
//         gap-6 xl:gap-10 
//         border-b border-border-subtle
//          ${isOdd ? 'md:border-r' : 'md:border-r-0'} 
//          ${isThird ? 'lg:border-r' : 'lg:border-r-0'}
//          last:border-b-0 
//          lg:nth-last-[-n+3]:border-b-0
       
//       `}
//     >
//       <div className="flex flex-col gap-4.5 2xl:gap-7.5">
//         {/* ICON CONTAINER*/}
//         <div className="size-14 xl:size-18.5 2xl:size-22 shrink-0 ">
//           <img
//             src={icon}
//             alt={title}
//             loading="lazy"
//             decoding="async"
//             className="object-contain w-full h-full"
//           />
//         </div>

//         <div className="flex flex-col gap-3.5 2xl:gap-5">
//           <h3 className="text-text-primary text-[20px] 2xl:text-[24px] font-medium leading-normal tracking-[.6%]">
//             {title}
//           </h3>
//           <p className="text-text-secondary text-sm xl:text-base 2xl:text-lg font-normal tracking-[.6%]">
//             {description}
//           </p>
//         </div>
//       </div>

//       <div>
//         <a 
//           href={`mailto:contact.squareupp@gmail.com?subject=Application for ${encodeURIComponent(title)}&body=Hello SquareUp Team,%0D%0A%0D%0AI would like to apply for the ${encodeURIComponent(title)} position.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AFull Name:%0D%0AEmail:%0D%0APhone:%0D%0ALinkedIn:%0D%0APortfolio:%0D%0D%0AExperience Summary:%0D%0A%0D%0APlease find my resume attached with this email.%0D%0A%0D%0AThank you for your time and consideration.%0D%0A%0D%0ABest regards,%0D%0A`}
//           className="block text-center px-4 py-3.5 2xl:py-4.5 rounded-lg text-text-primary bg-bg-secondary hover:bg-bg-hover transition-colors font-medium text-sm 2xl:text-lg w-full leading-6"
//         >
//           Apply Now
//         </a>
//       </div>
//     </div>
//   );
// };

// export default memo(JobCard);








import { memo } from "react";

const JobCard = ({ title, icon, description }) => {

  
  return (
    <div
      className="flex flex-col justify-between bg-bg-tertiary p-7.5 gap-6 xl:p-10 xl:gap-10 2xl:p-12.5">
      <div className="flex flex-col gap-4.5 2xl:gap-7.5">
        {/* ICON CONTAINER*/}
          <img
            src={icon}
            alt={title}
            loading="lazy"
            decoding="async"
            className="object-contain size-14 xl:size-18.5 2xl:size-22"
          />

        <div className="flex flex-col gap-3.5 2xl:gap-5 tracking-[-.6%]">
          <h3 className="text-[20px]  font-medium text-text-primary 2xl:text-[24px]">
            {title}
          </h3>
          <p className="text-sm text-text-secondary xl:text-base 2xl:text-lg">
            {description}
          </p>
        </div>
      </div>
      
        <a 
          href={`mailto:contact.squareupp@gmail.com?subject=Application for ${encodeURIComponent(title)}&body=Hello SquareUp Team,%0D%0A%0D%0AI would like to apply for the ${encodeURIComponent(title)} position.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AFull Name:%0D%0AEmail:%0D%0APhone:%0D%0ALinkedIn:%0D%0APortfolio:%0D%0D%0AExperience Summary:%0D%0A%0D%0APlease find my resume attached with this email.%0D%0A%0D%0AThank you for your time and consideration.%0D%0A%0D%0ABest regards,%0D%0A`}
          className="block text-center px-4 py-3.5 2xl:py-4.5 rounded-lg text-text-primary bg-bg-secondary hover:bg-bg-hover transition-colors font-medium text-sm 2xl:text-lg w-full leading-6"
        >
          Apply Now
        </a>
      
    </div>
  );
};

export default memo(JobCard);