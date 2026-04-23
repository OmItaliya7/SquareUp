import SectionHeader from "../../../shared/components/SectionHeader";
import wave from "../../../assets/images/backgrounds/services-wave.webp";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const ServiceCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-6 bg-bg-tertiary p-7.5 xl:gap-0 xl:p-10 2xl:p-12.5"> 
     
        {/*  Icon + Title */}
        <div className="flex items-center gap-3.5 md:flex-col md:items-start md:gap-7.5 2xl:gap-10">
          <img
            src={item.icon}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="size-14.5 object-contain xl:size-17.5 2xl:size-22"
          />
          <h3 className="text-[20px] font-semibold leading-normal tracking-[-0.6%] text-primary xl:text-[24px] 2xl:text-[30px]">
            {item.title}
          </h3>
        </div>

        {/* DESCRIPTION SECTION */}  
        <p className="text-[14px] tracking-[-0.6%] text-secondary xl:pt-3.5 xl:text-[16px] 2xl:pt-5 2xl:text-[18px] leading-normal 2xl:leading-6">
          {item.desc}
        </p>
      
        <Link
          to={`/services#${item.slug}`}
          aria-label={`Explore ${item.title} services`}
          className="mt-auto block w-full rounded-md bg-bg-secondary px-4 py-3.5 text-center text-sm font-medium text-primary transition-colors hover:bg-bg-hover 2xl:py-4.5 2xl:text-lg xl:mt-21 2xl:mt-26"
        >
          Explore {item.title} 
        </Link>
    </div>
  );
};

const Services = () => {
  return (
    <section className="w-full" id="service-home">
      
        <SectionHeader
          title="Our Services"
          subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
          bgImage={wave}
        />
          <div className="grid grid-cols-1 border-b divide-y divide-subtle border-subtle md:grid-cols-2 md:divide-x lg:grid-cols-3">
            {servicesData.map((item, i) => (
              <ServiceCard key={item.slug} item={item} index={i} />
            ))}
          </div> 
      
    </section>
  );
};

export default Services;