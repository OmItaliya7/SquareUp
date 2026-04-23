import SectionHeader from '../../../shared/components/SectionHeader';
import IntroBlock from '../../../shared/components/IntroBlock';
import ServiceCategoryGrid from '../components/ServiceCategoryGrid';
import { servicesData } from '../data/servicesData';
import wave from "../../../assets/images/backgrounds/services-wave.webp";
import CTABanner from '../../../shared/components/CTABanner';
import SEO from "../../../shared/components/SEO";

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Web Development, UI/UX Services & Mobile App Services | SquareUp"
        description="Discover our professional services including web development, UI/UX design, mobile app development, and custom software solutions tailored for startups and growing businesses."
        path="/services"
      />
      <section className="w-full border-x border-subtle" id="services">
        
          <SectionHeader
            title="Our Services"
            subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
            bgImage={wave}
          />
            
            {servicesData.map((service) => (
              <div key={service.slug} id={service.slug}>
                
                <IntroBlock 
                  title={service.mainTitle}
                  description={service.description}
                  label={service.label}
                />
            
                {service.categories.map((cat, index) => (
                  
                  <ServiceCategoryGrid 
                    key={index} 
                    categoryTitle={cat.name} 
                    items={cat.services} 
                  />
                  
                ))}
              </div>
            ))}   
            
          <CTABanner 
            title="Let us Bring your Ideas to Life in the Digital World."
            subtitle="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
          />
      </section>
    </>
  );
};

export default ServicesPage;