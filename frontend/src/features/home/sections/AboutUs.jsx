import wave from "../../../assets/images/backgrounds/about-wave.webp"
import SectionHeader from "../../../shared/components/SectionHeader"
import { testimonials } from "../data/homeaboutData"

const TestimonialsCard  = ({item}) => {
  return (
    <div className="flex flex-col gap-6 px-6 py-10 xl:gap-7.5 2xl:gap-8.5 xl:px-15 xl:py-20 2xl:px-25 bg-bg-tertiary">
      
      <div className="flex flex-col gap-5 2xl:gap-6">
          <h3 className="text-accent-secondary text-lg xl:text-xl 2xl:text-[28px] font-medium">
            {item.title}
          </h3>
          <p className="text-sm text-text-secondary xl:text-base 2xl:text-lg">
            {item.desc}
          </p>
      </div>

      {/* Bottom Profile card  */}
      <div className="mt-auto flex p-3.5 2xl:p-5 bg-[#24242433] border border-border-subtle rounded-xl gap-[6px] 2xl:gap-[10px]">
        <div className="flex items-center gap-[10px] xl:gap-[12px] 2xl:gap-[18px] flex-1">
           <img
             src={item.image}
             alt={item.name}
             loading="lazy"
             decoding="async"
             className="object-cover rounded-lg size-10 xl:size-12.5 2xl:size-15"
           />
           <div>
              <p className="text-base font-medium 2xl:text-xl text-text-primary">
                {item.name}
              </p>
              <p className="text-sm text-text-secondary 2xl:text-lg">
                {item.role}
              </p>
           </div>
        </div>

        <button className="hidden xl:block bg-bg-secondary text-text-primary px-4 py-3.5 2xl:px-5 2xl:py-4.5 rounded-lg font-medium text-sm 2xl:text-lg hover:bg-bg-hover transition">
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
        <div className="grid grid-cols-1 border-b divide-y md:grid-cols-2 md:divide-x divide-border-subtle border-border-subtle">
          
            {testimonials.map((item, i) => (
              <TestimonialsCard key={i} item={item} />
            ))}
          
        </div>
      
    </section>
  );
};

export default AboutUs;