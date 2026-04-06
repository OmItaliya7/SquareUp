import wave from "../../../assets/images/backgrounds/about-wave.webp"
import Container from "../../../shared/ui/Container"
import SectionHeader from "../../../shared/components/SectionHeader"
import { testimonials } from "../data/homeaboutData"



const TestimonialsCard = ({ item, index, total }) => {
  return (
    <div
      className={`
          px-6 py-10
          xl:px-15 xl:py-20
          2xl:px-25
          flex flex-col gap-7.5
          border-[#262626]
          border-b last:border-b-0
          md:border-r md:border-b
          ${(index + 1) % 2 === 0 ? "md:border-r-0" : ""}
          ${index >= total - 2 ? "md:border-b-0" : ""}
          `}
    >
      {/* Testimonial Content */}
      <div className="flex flex-col gap-5 2xl:gap-6">
        <h3 className="text-[#D8FF99] text-[18px] xl:text-[20px] 2xl:text-[28px] font-medium leading-normal">
          {item.title}
        </h3>
        <p className="text-[#E6E6E6] font-normal text-[14px] xl:text-[16px] 2xl:text-[18px] leading-normal">
          {item.desc}
        </p>
      </div>

      {/* Profile Card Section */}
      <div className="mt-auto flex items-center justify-between bg-[#24242433] border border-[#262626] rounded-xl p-3.5 2xl:p-5">
        <div className="flex items-center gap-3 ">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            decoding="async"
            className="object-cover rounded-lg size-10 xl:size-12.5 2xl:size-15"
          />
          <div className="flex flex-col leading-normal">
            <span className="text-[16px] 2xl:text-[20px] font-medium text-[#FFFFFF] lg:text-base ">
              {item.name}
            </span>
            <span className="text-[#E6E6E6] font-normal  text-[14px] 2xl:text-[18px] lg:text-sm ">
              {item.role}
            </span>
          </div>
        </div>

        <button className="hidden xl:block bg-[#262626] border border-[#2A2A2A] text-white px-4 py-3.5 2xl:px-5 2xl:py-4.5 rounded-lg font-medium text-[14px] 2xl:text-[18px] hover:bg-[#333] transition-all">
          Open Website
        </button>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className="w-full bg-[#1A1A1A]">
      <Container>
      <SectionHeader
        title="What our Clients say About us"
        subtitle="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
        bgImage={wave}
      />

      
        {/* Testimonials Grid */}
        <div className="border-x border-b border-[#262626] bg-[#1A1A1A]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {testimonials.map((item, i) => (
              <TestimonialsCard key={i} item={item} index={i} total={testimonials.length} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;