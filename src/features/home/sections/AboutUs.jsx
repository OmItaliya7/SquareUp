import client1 from "../../../assets/icons/clients/client_1.svg"
import client2 from "../../../assets/icons/clients/client_2.svg"
import client3 from "../../../assets/icons/clients/client_3.svg"
import client4 from "../../../assets/icons/clients/client_4.svg"
import client5 from "../../../assets/icons/clients/client_5.svg"
import client6 from "../../../assets/icons/clients/client_6.svg"
import wave from "../../../assets/images/backgrounds/about-wave.webp"

import Container from "../../../shared/ui/Container"
import SectionHeader from "../../../shared/components/SectionHeader"

const testimonials = [
  {
    image: client1,
    name: "John Smith",
    role: "CEO of Chic Boutique",
    title: "SquareUp has been Instrumental in Transforming our Online Presence.",
    desc: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier."
  },
  {
    image: client2,
    name: "Sarah Johnson",
    role: "Founder of HungryBites.",
    title: "Working with SquareUp was a breeze.",
    desc: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend."
  },
  {
    image: client3,
    name: "Mark Thompson",
    role: "CEO of EventMasters",
    title: "SquareUp developed a comprehensive booking and reservation system for our event management company",
    desc: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences."
  },
  {
    image: client4,
    name: "Laura Adams",
    role: "COO of ProTech Solutions.",
    title: "ProTech Solutions turned to SquareUp to automate our workflow",
    desc: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner."
  },
  {
    image: client5,
    name: "Michael Anderson",
    role: "Founder of Dream Homes Realty.",
    title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
    desc: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched."
  },
  {
    image: client6,
    name: "Emily Turner",
    role: "CEO of FitLife Tracker",
    title: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
    desc: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs."
  }
];

const AboutUs = () => {
  return (
    <section className="w-full bg-[#1A1A1A]">
      <Container>
      <SectionHeader
        title="What our Clients say About us"
        subtitle="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
        bgImage={wave}
      />

      
        {/* Main Grid Wrapper with borders to match site architecture */}
        <div className="border-x border-b border-[#262626] bg-[#1A1A1A]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`
                  px-[24px] py-[40px]
                  xl:px-[60px] xl:py-[80px]
                  2xl:px-[100px]
                  flex flex-col gap-[30px]
                  border-[#262626]
                  border-b last:border-b-0     
                  ${i % 2 === 0 ? 'md:border-r' : ''}
                  ${i < testimonials.length - 2 ? 'md:border-b' : 'md:border-b-0'}
                  ${i === testimonials.length - 1 ? 'border-b-0' : ''}
                `}
              >
                {/* Testimonial Content */}
                <div className="flex flex-col gap-5 2xl:gap-6">
                  <h3 className="text-[#D8FF99] text-[18px] xl:text-[20px] 2xl:text-[28px] font-medium leading-[1.5]">
                    {item.title}
                  </h3>
                  <p className="text-[#E6E6E6] font-normal text-[14px] xl:text-[16px] 2xl:text-[18px] leading-[1.5]">
                    {item.desc}
                  </p>
                </div>

                {/* Profile Card Section */}
                <div className="mt-auto flex items-center justify-between bg-[#24242433] border border-[#262626] rounded-xl p-3.5 2xl:p-5">
                  <div className="flex items-center gap-3 ">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="object-cover rounded-lg size-[40px] xl:size-[50px] 2xl:size-[60px]" 
                    />
                    <div className="flex flex-col leading-[1.5]">
                      <span className="text-[16px] 2xl:text-[20px] font-medium text-[#FFFFFF] lg:text-base ">{item.name}</span>
                      <span className="text-[#E6E6E6] font-normal  text-[14px] 2xl:text-[18px] lg:text-sm ">{item.role}</span>
                    </div>
                  </div>
                  
                  <button className="hidden xl:block bg-[#262626] border border-[#2A2A2A] text-white px-[16px] py-[14px] 2xl:px-[20px] 2xl:py-[18px] rounded-lg font-medium text-[14px] 2xl:text-[18px] hover:bg-[#333] transition-all">
                    Open Website
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;