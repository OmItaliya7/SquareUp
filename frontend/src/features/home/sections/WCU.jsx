import wave from "../../../assets/images/backgrounds/wco-wave.webp"
import SectionHeader from "../../../shared/components/SectionHeader"
import { wcuData } from "../data/wcuData"

const WCUCard = ({ item }) => {
  return (
    <div
      className="px-7.5 py-10 xl:p-15 2xl:p-20 flex flex-col gap-6 xl:gap-7.5 2xl:gap-10"
    >
      {/* ICON BOX */}
      <div className="flex items-center gap-3.5 2xl:gap-5">
        
          <img
            src={item.icon}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="object-contain size-14.5 xl:size-17.5 2xl:size-22"
          />
        
        <h3 className="text-[20px] text-text-primary leading-normal 2xl:text-[26px] font-medium">
          {item.title}
        </h3>
      </div>

      {/* DESCRIPTION */}
      <p className="text-text-secondary text-[14px]  xl:text-[16px] 2xl:text-[20px] leading-normal tracking-[-0.6%]">
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
        <div className="grid grid-cols-1 border-b divide-y md:grid-cols-2 md:divide-x md:divide-y divide-border-subtle border-border-subtle">
          {wcuData.map((item, i) => (
            <WCUCard key={i} item={item} index={i} />
          ))}
        </div>  
    </section> 
  )
}

export default WCU;