import Container from '../../../shared/ui/Container';
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
      title="Services | Web Development & UI/UX Design Solutions - SquareUp"
      description="Explore our services including web development, UI/UX design, mobile apps, and custom software solutions tailored for startups and businesses."
      path="/services"
    />
    <main className="bg-[#1A1A1A]">
      <Container>
      <SectionHeader
        title="Our Services"
        subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        bgImage={wave}
      />
      
      
        <div className="flex flex-col -mt-px">
          {servicesData.map((service) => (
            <div key={service.slug} id={service.slug} className="flex flex-col ">
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
        </div>
      

      <CTABanner 
        title="Let us Bring your Ideas to Life in the Digital World."
        subtitle="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
      />
      </Container>
    </main>
    </>
  );
};

export default ServicesPage;

