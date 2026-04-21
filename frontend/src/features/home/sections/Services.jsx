// import SectionHeader from "../../../shared/components/SectionHeader";
// import wave from "../../../assets/images/backgrounds/services-wave.webp";
// import { Link } from "react-router-dom";
// import { servicesData } from "../data/servicesData";

// const ServiceCard = ({ item }) => {
//   return (
//     <div className="flex flex-col justify-between p-7.5 xl:p-10 2xl:p-12.5 bg-bg-tertiary gap-6 xl:gap-10"> 
     
//         {/*  Icon + Title */}
//         <div className="flex md:flex-col items-center md:items-start gap-3.5 md:gap-7.5 2xl:gap-10">
          
//             <img
//               src={item.icon}
//               alt={item.title}
//               loading="lazy"
//               decoding="async"
//               className="size-14.5 xl:size-17.5 2xl:size-22 object-contain"
//             />
          

//           <h3 className="text-text-primary text-[20px] xl:text-[24px] 2xl:text-[30px] font-semibold leading-tight tracking-[.6%]">
//             {item.title}
//           </h3>
//         </div>

//         {/* DESCRIPTION SECTION */}  
//         <p className="text-text-secondary text-[14px] xl:text-[16px] 2xl:text-[18px] leading-normal 2xl:leading-6 tracking-[-.6%]">
//           {item.desc}
//         </p>
      
//         <Link
//           to={`/services#${item.slug}`}
//           aria-label={`Explore ${item.title} services`}
//           className="px-4 py-3.5 2xl:py-4.5 rounded-md text-text-primary bg-bg-secondary hover:bg-bg-hover transition-colors font-medium text-sm 2xl:text-lg w-full text-center block"
//         >
//           Explore {item.title} 
//         </Link>
      
//     </div>
//   );
// };

// const Services = () => {
//   return (
//     <section className="w-full" id="service-home">
      
//         <SectionHeader
//           title="Our Services"
//           subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
//           bgImage={wave}
//         />
//           <div className="grid grid-cols-1 border-b divide-y md:grid-cols-2 lg:grid-cols-3 divide-border-subtle md:divide-x md:divide-y border-border-subtle">
//             {servicesData.map((item, i) => (
//               <ServiceCard key={item.slug} item={item} index={i} />
//             ))}
//           </div> 
      
//     </section>
//   );
// };

// export default Services;








import SectionHeader from "../../../shared/components/SectionHeader";
import wave from "../../../assets/images/backgrounds/services-wave.webp";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const ServiceCard = ({ item }) => {
  return (
    <div className="flex flex-col p-7.5 xl:p-10 2xl:p-12.5 bg-bg-tertiary gap-6 xl:gap-0 justify-between"> 
     
        {/*  Icon + Title */}
        <div className="flex md:flex-col items-center md:items-start gap-3.5 md:gap-7.5 2xl:gap-10">
          <img
            src={item.icon}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="size-14.5 xl:size-17.5 2xl:size-22 object-contain"
          />
          <h3 className="text-text-primary text-[20px] xl:text-[24px] 2xl:text-[30px] font-semibold leading-tight tracking-[-.6%]">
            {item.title}
          </h3>
        </div>

        {/* DESCRIPTION SECTION */}  
        <p className="text-text-secondary text-[14px] xl:text-[16px] 2xl:text-[18px] 2xl:leading-6 tracking-[-.6%]  xl:pt-[14px] 2xl:pt-5">
          {item.desc}
        </p>
      
        <Link
          to={`/services#${item.slug}`}
          aria-label={`Explore ${item.title} services`}
          className="px-4 py-3.5 2xl:py-4.5 rounded-md text-text-primary bg-bg-secondary hover:bg-bg-hover transition-colors font-medium text-sm 2xl:text-lg w-full text-center block xl:mt-[84px] 2xl:mt-[104px]"
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
          <div className="grid grid-cols-1 border-b divide-y md:grid-cols-2 lg:grid-cols-3 divide-border-subtle md:divide-x md:divide-y border-border-subtle">
            {servicesData.map((item, i) => (
              <ServiceCard key={item.slug} item={item} index={i} />
            ))}
          </div> 
      
    </section>
  );
};

export default Services;

