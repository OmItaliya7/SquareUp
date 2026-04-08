import { memo } from "react";
import squareIcon from "../../../assets/images/work/link-btn.webp";

const WorkCard = ({ category, image, brand, url, description, index }) => {
  const isLeft = index % 2 === 0; 
  return (
    <div
      className={`
      group flex flex-col border-[#262626]
      lg:border-r ${isLeft ? "lg:border-r" : ""}
      border-b
      gap-5  xl:gap-7.5
    `}
    >
      {/*  Category Title Box  */}
      <div className=" p-6 xl:px-10 xl:py-6 2xl:px-12.5 2xl:py-7.5 border-b border-[#262626]">
        <h4 className="text-[#98989A] text-xl 2xl:text-[26px] font-medium ">
          {category}
        </h4>
      </div>

      {/*  Main Content Block */}
      <div className="flex flex-col px-6 pb-10 xl:px-10 xl:pb-20 2xl:px-12.5 2xl:pb-25 gap-5 xl:gap-6 2xl:gap-7.5">
        {/* Project Image */}
        <div className="overflow-hidden rounded-[10px] 2xl:rounded-xl border border-[#262626] bg-[#1C1C1C]">
          <img
            src={image}
            alt={brand}
            className="object-cover w-full aspect-16/10"
            width="800"
            height="500"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Brand & Visit Link Section */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2.5 tracking-[.6%] ">
            <h3 className="text-lg font-medium 2xl:text-2xl text-[#E6E6E6]">
              {brand}
            </h3>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-2.5 py-2 xl:px-3 2xl:px-3.5 2xl:py-2.5 rounded-lg bg-[#262626] border border-[#262626] text-[#98989A] text-sm xl:text-base 2xl:text-xl font-normal hover:text-[#D8FF99] transition-colors"
            >
              {url}
            </a>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${brand} website`}
          >
            <img
              src={squareIcon}
              alt={`Visit ${brand} website`}
              className="size-11.5 2xl:size-13.5"
              loading="lazy"
            />
          </a>
        </div>

        {/* Project Description */}
        <div>
          <p className=" text-[#98989A] text-[14px] xl:text-base 2xl:text-lg font-normal leading-[150%]">
            {description}
          </p>
        </div>
      </div>
    </div>
      
  );
};

export default memo(WorkCard);