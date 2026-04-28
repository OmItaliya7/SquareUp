import { memo } from "react";
import squareIcon from "../../../assets/images/work/link-btn.svg";
import { Link } from "react-router-dom";

const WorkCard = ({ category, image, brand, url, description }) => {
  return (
    <div className="flex flex-col pb-10 xl:pb-20 2xl:pb-25 gap-5 xl:gap-7.5">

      {/*  TITLE */}
      <h4 className="px-6 py-5 xl:px-10 xl:py-6 2xl:px-12.5 2xl:py-7.5 border-b border-subtle font-medium text-lg xl:text-xl 2xl:text-[26px] leading-none text-muted">
        {category}
      </h4>

      {/* CONTENT */}
      <div className="flex flex-col px-6 xl:px-10 2xl:px-12.5 gap-5 xl:gap-6 2xl:gap-7.5">

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
        <div className="flex justify-between items-end lg:items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-2.5 leading-normal tracking-[-.6%]">
            <h3 className="font-medium text-lg 2xl:text-2xl text-secondary">
              {brand}
            </h3>

            <a href={url} target="_blank" rel="noopener noreferrer" className="w-fit px-2.5 py-2 xl:px-3 2xl:px-3.5 2xl:py-2.5 border border-subtle rounded-md 2xl:rounded-lg bg-bg-secondary text-sm xl:text-base 2xl:text-xl text-muted transition-colors hover:text-accent-primary">
              {url}
            </a>
          </div>

          {/* RIGHT ICON */}
          <Link to={url} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md 2xl:rounded-lg bg-[#262626] transition-colors hover:bg-bg-hover">
            <img src={squareIcon} alt={`Visit ${brand} website`} className="size-6.5 2xl:size-8.5" />
          </Link>

        </div>

        {/* DESCRIPTION */}
        <p className="text-sm xl:text-base 2xl:text-lg leading-normal text-muted">
          {description}
        </p>

      </div>
    </div>
  );
};

export default memo(WorkCard);