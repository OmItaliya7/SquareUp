import Container from '../../../shared/ui/Container';
import SectionHeader from '../../../shared/components/SectionHeader';
import IntroBlock from '../../../shared/components/IntroBlock';
import ServiceCategoryGrid from '../components/ServiceCategoryGrid';
import { servicesData } from '../data/servicesData';
import wave from "../../../assets/images/backgrounds/services-wave.webp";
import CTABanner from '../../../shared/components/CTABanner';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ServicesPage = () => {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "")
    const el = document.getElementById(id)

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }
}, [location])


  return (
    <main className="bg-[#1A1A1A]">
      <Container>
      <SectionHeader
        title="Our Services"
        subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        bgImage={wave}
      />
      
      
        <div className="flex flex-col -mt-[1px]">
          {servicesData.map((service) => (
            <div key={service.id} id={service.id} className="flex flex-col ">
              <IntroBlock 
                title={service.mainTitle}
                description={service.description}
                label={service.label}
              />
              
              {/* Render the grid of categories for this specific service */}
              {service.categories.map((cat, index) => (
                <ServiceCategoryGrid 
                  key={index} 
                  categoryTitle={cat.name} 
                  items={cat.services} 
                />
              ))}
            </div>
          ))}
        </div>
      

      <CTABanner 
        title="Let us Bring your Ideas to Life in the Digital World."
        subtitle="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
      />
      </Container>
    </main>
  );
};

export default ServicesPage;

