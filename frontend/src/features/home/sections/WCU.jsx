import wave from "../../../assets/images/backgrounds/wco-wave.webp"
import SectionHeader from "../../../shared/components/SectionHeader"
import { wcuData } from "../data/wcuData"

const WCUCard = ({ item }) => {
  return (
    <div
      className="flex flex-col gap-6 px-7.5 py-10 xl:gap-7.5 xl:p-15 2xl:p-20 2xl:gap-10"
    >
      {/* ICON BOX */}
      <div className="flex items-center gap-3.5 2xl:gap-5">
        
        <img
          src={item.icon}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="size-14.5 object-contain xl:size-17.5 2xl:size-22"
        />
        <h3 className="text-[20px] font-medium text-primary 2xl:text-[26px] leading-normal tracking-[-0.6%]">
          {item.title}
        </h3>
        
      </div>

      {/* DESCRIPTION */}
      <p className="text-[14px] tracking-[-0.6%] leading-normal text-secondary xl:text-[16px] 2xl:text-[20px]">
        {item.desc}
      </p>
      
    </div>
  );
};

const WCU = () => {
  return (
    <section className="w-full" id="why-choose-us">
        <SectionHeader
          title="Why Choose SquareUp?"
          subtitle="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
          bgImage={wave}
        />
        
        <div className="grid grid-cols-1 border-b divide-y divide-subtle border-subtle md:grid-cols-2 md:divide-x">
          {wcuData.map((item, i) => (
            <WCUCard key={i} item={item} />
          ))}
        </div>  
        
    </section> 
  )
}

export default WCU;