import wave from "../../../assets/images/backgrounds/about-wave.webp"
import SectionHeader from "../../../shared/components/SectionHeader"
import { testimonials } from "../data/homeaboutData"

const TestimonialsCard  = ({item}) => {
  return (
    <div className="flex flex-col px-6 py-10 xl:px-15 xl:py-20 2xl:px-20 2xl:py-25 gap-6 xl:gap-7.5 2xl:gap-10 bg-bg-tertiary">
      
      <div className="flex flex-col gap-5 2xl:gap-6">
          <h3 className="font-medium text-lg xl:text-xl 2xl:text-[28px] leading-normal text-accent-secondary">
            {item.title}
          </h3>
          <p className="text-sm xl:text-base 2xl:text-lg leading-normal text-secondary">
            {item.desc}
          </p>
      </div>

      {/* Bottom Profile card */}
      <div className="flex mt-auto p-3.5 2xl:p-5 gap-1.5 2xl:gap-2.5 border border-subtle rounded-md 2xl:rounded-lg bg-[#24242433]">
        <div className="flex flex-1 items-center gap-2.5 xl:gap-3 2xl:gap-4.5">
           <img
             src={item.image}
             alt={item.name}
             loading="lazy"
             decoding="async"
             className="object-cover size-10 xl:size-12.5 2xl:size-15 rounded-lg"
           />
           <div>
              <p className="font-medium text-base 2xl:text-xl text-primary">
                {item.name}
              </p>
              <p className="text-sm 2xl:text-lg text-secondary 2xl:pt-0.5">
                {item.role}
              </p>
           </div>
        </div>

        <button className="hidden xl:block px-4 py-3.5 2xl:px-5 2xl:py-4.5 rounded-md 2xl:rounded-lg bg-bg-secondary font-medium text-sm 2xl:text-lg text-primary transition hover:bg-bg-hover">
          Open Website
        </button>
        
      </div>
    </div>
  )
}

const AboutUs = () => {
  return (
    <section className="w-full" id="aboutUs-home">
      <SectionHeader
        title="What our Clients say About us"
        subtitle="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
        bgImage={wave}
      />
      
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-subtle divide-y md:divide-x divide-subtle">
          
            {testimonials.map((item, i) => (
              <TestimonialsCard key={i} item={item} />
            ))}
          
        </div>
      
    </section>
  );
};

export default AboutUs;