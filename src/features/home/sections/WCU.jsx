


import expertice from "../../../assets/icons/home/expertise.png"
import client from "../../../assets/icons/home/client-centric.png"
import solution from "../../../assets/icons/home/results.png"
import partenership from "../../../assets/icons/home/collborative.png"
import wave from "../../../assets/images/backgrounds/wco-wave.png"

import Container from "../../../shared/ui/Container"
import SectionHeader from "../../../shared/components/SectionHeader"

const wcuData = [
  {
    icon: expertice,
    title: "Expertise",
    desc: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
  },
  {
    icon: client,
    title: "Client-Centric Approach",
    desc: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
  },
  {
    icon: solution,
    title: "Results-Driven Solutions",
    desc: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
  },
  {
    icon: partenership,
    title: "Collabortive Partnership",
    desc: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
  }
];

const WCU = () => {
  return (
    <section className="bg-[#1A1A1A]">
      <Container>
      <SectionHeader
        title="Why Choose SquareUp?"
        subtitle="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
        bgImage={wave}
      />

      
        <div className="border-x border-b border-[#262626] bg-[#1A1A1A]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {wcuData.map((item, i) => (
              <div
                key={i}
                className={`
                  px-[30px] py-[40px] xl:p-15 2xl:p-20
                  flex flex-col gap-6 xl:gap-[30px] 2xl:gap-[40px]
                  border-[#262626]
                  border-b last:border-b-0
                  md:even:border-l md:last:border-b-0
                  ${i < 2 ? 'md:border-b' : 'md:border-b-0'}
                `}
              >
                {/* ICON BOX */}
                <div className="flex items-center gap-[14px] 2xl:gap-5">
                  <div className="shirnk-0">
                    <img src={item.icon} alt={item.title} className="object-contain size-[58px] xl:size-[70px] 2xl:size-[88px]" />
                  </div>
                  <h3 className=" text-[20px] text-white leading-normal tracking-[.6%]  2xl:text-[26px] font-medium">
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className=" font-normal text-[#E6E6E6] text-[14px]  xl:text-[16px] 2xl:text-[20px] leading-normal tracking-[-0.6%]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WCU;