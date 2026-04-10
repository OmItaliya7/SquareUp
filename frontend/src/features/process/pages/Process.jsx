import Container from "../../../shared/ui/Container";
import SectionHeader from "../../../shared/components/SectionHeader";
import IntroBlock from "../../../shared/components/IntroBlock";
import StepGrid from "../../../shared/components/StepGrid";
import wave from "../../../assets/images/backgrounds/faq-wave.webp";
import { processSteps } from "../data/processData";
import CTABanner from "../../../shared/components/CTABanner";
import ContactForm from "../../../shared/components/ContactForm";
import SEO from "../../../shared/components/SEO";

const Process = () => {
  return (
    <>
    <SEO
      title="Our Process | How We Design & Build Digital Products — SquareUp"
      description="Learn how SquareUp designs, develops, and delivers scalable digital products through a structured, client-focused process from idea to launch."
      path="/process"
    />
 
      <Container>
        <SectionHeader 
          title="Process of Starting the Project" 
          subtitle="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
          bgImage={wave}
        />
        
        
          <div className="flex flex-col -mt-px">
            {/*  Intro Block */}
            <IntroBlock 
              title="At SquareUp"
              description="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
              label="Here's an overview of our typical process:"
            />
            
            {/* The Steps Grid  */}
            <StepGrid items={processSteps} variant="default" />

          </div>
          <CTABanner title="Thank you for your Interest in SquareUp."  subtitle="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."/>
        <ContactForm />
      </Container>

    </>
  );
};

export default Process;