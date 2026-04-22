import { memo } from "react";

const JobCard = ({ title, icon, description }) => {
  return (
    <div
      className="flex flex-col justify-between gap-6 bg-bg-tertiary p-7.5 xl:p-10 xl:gap-10 2xl:p-12.5">
      <div className="flex flex-col gap-6 2xl:gap-7.5">
        {/* ICON CONTAINER*/}
          <img
            src={icon}
            alt={title}
            loading="lazy"
            decoding="async"
            className="object-contain size-14 xl:size-18.5 2xl:size-22"
          />

        <div className="flex flex-col gap-3.5 tracking-[-.6%] 2xl:gap-5">
          <h3 className="text-[20px] font-medium text-primary 2xl:text-[24px]">
            {title}
          </h3>
          <p className="text-sm text-secondary leading-normal xl:text-[16px] 2xl:text-[18px]">
            {description}
          </p>
        </div>
      </div>
      
      <a 
        href={`mailto:contact.squareupp@gmail.com?subject=Application for ${encodeURIComponent(title)}&body=Hello SquareUp Team,%0D%0A%0D%0AI would like to apply for the ${encodeURIComponent(title)} position.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AFull Name:%0D%0AEmail:%0D%0APhone:%0D%0ALinkedIn:%0D%0APortfolio:%0D%0D%0AExperience Summary:%0D%0A%0D%0APlease find my resume attached with this email.%0D%0A%0D%0AThank you for your time and consideration.%0D%0A%0D%0ABest regards,%0D%0A`}
        className="
        block w-full rounded-lg bg-bg-secondary px-4 py-3.5 text-center text-sm font-medium leading-6 text-primary transition-colors hover:bg-bg-hover 2xl:py-4.5 2xl:text-lg"
      >
        Apply Now
      </a>
      
    </div>
  );
};

export default memo(JobCard);