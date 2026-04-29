import SectionHeader from "../../../shared/components/SectionHeader";
import wave from "../../../assets/images/backgrounds/services-wave.webp";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const ServiceCard = ({ item }) => {
  return (
    <div className="flex flex-col xl:justify-between p-7.5 xl:p-10 2xl:p-12.5 gap-6 xl:gap-0 "> 
     
        {/*  Icon + Title */}
        <div className="flex items-center md:flex-col md:items-start gap-3.5 md:gap-7.5 2xl:gap-10">
          <img
            src={item.icon}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="object-contain size-14.5 xl:size-17.5 2xl:size-22"
          />
          <h3 className="font-semibold text-xl xl:text-2xl 2xl:text-3xl tracking-[-0.6%] text-primary">
            {item.title}
          </h3>
        </div>

        {/* DESCRIPTION SECTION */}  
        <p className="text-sm xl:text-base 2xl:text-lg tracking-[-0.6%] 2xl:leading-6 text-secondary xl:pt-3.5 2xl:pt-5">
          {item.desc}
        </p>
      
        <Link to={`/services#${item.slug}`} aria-label={`Explore ${item.title} services`} className="block w-full mt-auto xl:mt-20 2xl:mt-25 px-4 py-3.5 2xl:py-4.5 rounded-md 2xl:rounded-lg bg-bg-secondary font-medium text-sm 2xl:text-lg text-primary text-center transition-colors hover:bg-bg-hover">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-subtle divide-y md:divide-x lg:divide-y-0 divide-subtle">
          {servicesData.map((item, i) => (
            <ServiceCard key={item.slug} item={item} index={i} />
          ))}
        </div> 
      
    </section>
  );
};

export default Services;