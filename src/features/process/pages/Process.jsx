import Container from "../../../shared/ui/Container";
import SectionHeader from "../../../shared/components/SectionHeader";
import IntroBlock from "../../../shared/components/IntroBlock";
import StepGrid from "../../../shared/components/StepGrid";
import wave from "../../../assets/images/backgrounds/faq-wave.png";
import { processSteps } from "../../../shared/data/processData";
import CTABanner from "../../../shared/components/CTABanner";
import ContactForm from "../../../shared/components/ContactForm";

const Process = () => {
  return (
    <main className="bg-[#1A1A1A] min-h-screen">
      <Container>
      <SectionHeader 
        title="Process of Starting the Project" 
        subtitle="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
        bgImage={wave}
      />
      
      
        <div className="flex flex-col -mt-px">
          {/* Reusable Intro Block */}
          <IntroBlock 
            title="At SquareUp"
            description="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
            label="Here's an overview of our typical process:"
          />
          
          {/* The Steps Grid (Reusable for 'Our Story' on About page) */}
          <StepGrid items={processSteps}  />

        </div>
        <div>
        <CTABanner title="Thank you for your Interest in SquareUp."  subtitle="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."/>
      </div>
      <div>
        <ContactForm />
      </div>
      </Container>
      

      {/* <ContactUs /> */}
    </main>
  );
};

export default Process;