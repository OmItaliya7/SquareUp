import Container from "../../../shared/ui/Container";
import SectionHeader from "../../../shared/components/SectionHeader";
import wave from "../../../assets/images/backgrounds/services-wave.webp";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const ServiceCard = ({ item, index }) => {
  return (
    <div className={`flex flex-col justify-between p-7.5 xl:p-10 2xl:p-12.5 border-border-subtle
      border-b 
      md:border-r md:border-b
      ${(index + 1) % 2 === 0 ? "md:border-r-0" : ""} 
      ${index >= 2 ? "md:border-b-0" : ""}

      lg:border-r lg:border-b-0
      ${(index + 1) % 3 === 0 ? "lg:border-r-0" : ""}
      ${index >= 3 ? "lg:border-b-0" : ""}
      
     bg-bg-tertiary gap-6 xl:gap-10  `}> 
     
      <div className="flex flex-col gap-7.5 2xl:gap-10">
        {/* HEADER SECTION: Icon + Title */}
        <div className="flex flex-row md:flex-col items-center md:items-start gap-3.5 md:gap-7.5 2xl:gap-10">
          <div className="shrink-0">
            <img
              src={item.icon}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="size-14.5 xl:size-17.5 2xl:size-22 object-contain"
            />
          </div>

          <h3 className="text-text-primary text-[20px] xl:text-[24px] 2xl:text-[30px] font-semibold leading-tight tracking-[.6%]">
            {item.title}
          </h3>
        </div>

        {/* DESCRIPTION SECTION */}
        
        <p className="text-text-secondary text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal leading-normal 2xl:leading-6 tracking-[-.6%]">
          {item.desc}
        </p>
        
      </div>

      <div>
        <Link
          to={`/services#${item.slug}`}
          aria-label={`Explore ${item.title} services`}
          className="px-4 py-3.5 2xl:py-4.5 rounded-md text-text-primary bg-bg-secondary hover:bg-bg-hover transition-colors font-medium text-sm 2xl:text-lg w-full text-center block"
        >
          Explore {item.title} 
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section>
      <Container>
        <SectionHeader
          title="Our Services"
          subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
          bgImage={wave}
        />

        
        <div
          className="mt-px border border-border-subtle"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((item, i) => (
              <ServiceCard key={item.slug} item={item} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
