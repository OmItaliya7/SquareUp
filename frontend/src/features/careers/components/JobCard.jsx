import { memo } from "react";

const JobCard = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col justify-between p-7.5 xl:p-10 2xl:p-12.5 gap-6 xl:gap-10 bg-bg-tertiary">
      <div className="flex flex-col gap-6 2xl:gap-7.5">
        {/* ICON*/}
        <img
          src={icon}
          alt={title}
          loading="lazy"
          decoding="async"
          className="object-contain size-14 xl:size-18.5 2xl:size-22"
        />

        <div className="flex flex-col gap-3.5 2xl:gap-5 tracking-[-.6%]">
          <h3 className="font-medium text-xl 2xl:text-2xl leading-normal text-primary">
            {title}
          </h3>
          <p className="text-sm xl:text-base 2xl:text-lg leading-normal text-secondary">
            {description}
          </p>
        </div>
      </div>
      
      <a 
        href={`mailto:contact.squareupp@gmail.com?subject=Application for ${encodeURIComponent(title)}&body=Hello SquareUp Team,%0D%0A%0D%0AI would like to apply for the ${encodeURIComponent(title)} position.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AFull Name:%0D%0AEmail:%0D%0APhone:%0D%0ALinkedIn:%0D%0APortfolio:%0D%0D%0AExperience Summary:%0D%0A%0D%0APlease find my resume attached with this email.%0D%0A%0D%0AThank you for your time and consideration.%0D%0A%0D%0ABest regards,%0D%0A`}
        className="block w-full px-4 py-3.5 2xl:py-4.5 rounded-md 2xl:rounded-lg bg-bg-secondary font-medium text-sm 2xl:text-lg leading-6 text-primary text-center transition-colors hover:bg-bg-hover">
        Apply Now
      </a>
      
    </div>
  );
};

export default memo(JobCard);