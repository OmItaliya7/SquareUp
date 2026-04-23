import wave from "../../../assets/images/backgrounds/about-wave.webp"
import SectionHeader from "../../../shared/components/SectionHeader"
import { testimonials } from "../data/homeaboutData"

const TestimonialsCard  = ({item}) => {
  return (
    <div className="flex flex-col bg-bg-tertiary gap-6 px-6 py-10 xl:gap-7.5 xl:px-15 xl:py-20 2xl:gap-10 2xl:px-20 2xl:py-25">
      
      <div className="flex flex-col gap-5 2xl:gap-6">
          <h3 className="text-lg font-medium leading-normal text-accent-secondary xl:text-xl 2xl:text-[28px]">
            {item.title}
          </h3>
          <p className="text-[14px] leading-normal text-secondary xl:text-[16px] 2xl:text-[18px]">
            {item.desc}
          </p>
      </div>

      {/* Bottom Profile card  */}
      <div className="mt-auto flex gap-1.5 rounded-xl border border-subtle bg-[#24242433] p-3.5 2xl:gap-2.5 2xl:p-5">
        <div className="flex flex-1 items-center gap-2.5 xl:gap-3 2xl:gap-4.5">
           <img
             src={item.image}
             alt={item.name}
             loading="lazy"
             decoding="async"
             className="object-cover rounded-lg size-10 xl:size-12.5 2xl:size-15"
           />
           <div>
              <p className="text-base font-medium 2xl:text-xl text-primary">
                {item.name}
              </p>
              <p className="text-sm text-secondary 2xl:text-lg 2xl:pt-[2px]">
                {item.role}
              </p>
           </div>
        </div>

        <button className="hidden rounded-lg bg-bg-secondary px-4 py-3.5 text-sm font-medium text-primary transition hover:bg-bg-hover xl:block 2xl:px-5 2xl:py-4.5 2xl:text-lg">
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
        <div className="grid grid-cols-1 border-b divide-y divide-subtle border-subtle md:grid-cols-2 md:divide-x">
          
            {testimonials.map((item, i) => (
              <TestimonialsCard key={i} item={item} />
            ))}
          
        </div>
      
    </section>
  );
};

export default AboutUs;