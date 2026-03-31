import Container from "../../../shared/ui/Container";
import SectionHeader from "../../../shared/components/SectionHeader";
import wave from "../../../assets/images/backgrounds/services-wave.webp";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const ServiceCard = ({ item, index }) => {
  return (
    <div className={`flex flex-col justify-between p-[30px] xl:p-[40px] 2xl:p-[50px]  border-[#262626] 
      border-b 
      md:border-r md:border-b
      ${(index + 1) % 2 === 0 ? "md:border-r-0" : ""} 
      ${index >= 2 ? "md:border-b-0" : ""}

      lg:border-r lg:border-b-0
      ${(index + 1) % 3 === 0 ? "lg:border-r-0" : ""}
      ${index >= 3 ? "lg:border-b-0" : ""}

     bg-[#1C1C1C] gap-[24px] xl:gap-[40px]  `}> 
     
      <div className="flex flex-col gap-[30px] 2xl:gap-[40px]">
        {/* HEADER SECTION: Icon + Title */}
        <div className="flex flex-row md:flex-col items-center md:items-start gap-[14px] md:gap-[30px] 2xl:gap-[40px]">
          <div className="shrink-0">
            <img
              src={item.icon}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="size-[58px] xl:size-[70px] 2xl:size-[88px] object-contain"
            />
          </div>

          <h3 className="text-white text-[20px] xl:text-[24px] 2xl:text-[30px] font-semibold leading-tight tracking-[.6%]">
            {item.title}
          </h3>
        </div>

        {/* DESCRIPTION SECTION */}
        <div className="flex flex-col gap-[14px]">
          <p className="text-[#E6E6E6] text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal leading-normal 2xl:leading-[24px] tracking-[-.6%]">
            {item.desc}
          </p>
        </div>
      </div>

      <div>
        <Link
          to={`/services#${item.slug}`}
          aria-label={`Learn more about ${item.title} service`}
          className="px-[16px] py-[14px] 2xl:py-[18px] rounded-md text-white bg-[#262626] border border-[#2A2A2A] hover:bg-[#2A2A2A] transition-colors font-medium text-sm 2xl:text-lg w-full text-center block"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="bg-[#1A1A1A]">
      <Container>
        <SectionHeader
          title="Our Services"
          subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
          bgImage={wave}
        />

        
        <div
          className="
          border border-[#262626] mt-[-1px]       
        "
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
