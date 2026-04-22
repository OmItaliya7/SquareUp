import { memo } from "react";
import squareIcon from "../../../assets/images/work/link-btn.webp";

const WorkCard = ({ category, image, brand, url, description }) => {
  return (
    <div className="flex flex-col gap-5 pb-10 xl:pb-20 xl:gap-7.5 2xl:pb-25">

      {/*  TITLE */}
      <h4 className="border-b border-subtle
        px-6 py-5
        text-lg font-medium text-muted
        xl:px-10 xl:py-6 xl:text-[20px]
        2xl:px-12.5 2xl:py-7.5 2xl:text-[26px] 
        leading-none
      ">
        {category}
      </h4>

      {/* CONTENT */}
      <div className="flex flex-col gap-5 px-6 xl:gap-6 xl:px-10 2xl:gap-7.5 2xl:px-12.5">

        {/* IMAGE */}
        <img
          src={image}
          alt={brand}
          width="800"
          height="500"
          className="object-cover w-full aspect-16/10 rounded-[10px] 2xl:rounded-xl"
          loading="lazy"
          decoding="async"
        />

        {/* BRAND + URL + ICON */}
        <div className="flex items-end justify-between lg:items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-2.5 leading-normal tracking-[-.6%]">
            <h3 className="text-lg font-medium 2xl:text-2xl text-secondary ">
              {brand}
            </h3>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-2.5 py-2 xl:px-3 2xl:px-3.5 2xl:py-2.5 rounded-md 2xl:rounded-lg bg-bg-secondary border border-subtle text-muted text-sm xl:text-base 2xl:text-xl hover:text-accent transition-colors"
            >
              {url}
            </a>
          </div>

          {/* RIGHT ICON */}
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${brand} website`}>
            <img
              src={squareIcon}
              alt={`Visit ${brand} website`}
              className="size-11.5 2xl:size-13.5"
              loading="lazy"
            />
          </a>

        </div>

        {/* DESCRIPTION */}
        <p className="text-muted text-[14px] xl:text-base 2xl:text-lg leading-normal">
          {description}
        </p>

      </div>
    </div>
  );
};

export default memo(WorkCard);