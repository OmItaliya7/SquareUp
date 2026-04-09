import wave from "../../../assets/images/backgrounds/wco-wave.webp"
import Container from "../../../shared/ui/Container"
import SectionHeader from "../../../shared/components/SectionHeader"
import { wcuData } from "../data/wcuData"

const WCUCard = ({ item, index }) => {
  return (
    <div
      className={`px-7.5 py-10 xl:p-15 2xl:p-20 flex flex-col gap-6 xl:gap-7.5 2xl:gap-10 border-border-subtle border-b last:border-b-0 md:even:border-l md:last:border-b-0 ${index < 2 ? "md:border-b" : ""}`}>
      {/* ICON BOX */}
      <div className="flex items-center gap-3.5 2xl:gap-5">
        <div className="shrink-0">
          <img
            src={item.icon}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="object-contain size-14.5 xl:size-17.5 2xl:size-22"
          />
        </div>
        <h3 className=" text-[20px] text-text-primary leading-normal tracking-[.6%]  2xl:text-[26px] font-medium">
          {item.title}
        </h3>
      </div>

      {/* DESCRIPTION */}
      <p className=" font-normal text-text-secondary text-[14px]  xl:text-[16px] 2xl:text-[20px] leading-normal tracking-[-0.6%]">
        {item.desc}
      </p>
    </div>
  );
};

const WCU = () => {
  return (
    <section>
      <Container>
      <SectionHeader
        title="Why Choose SquareUp?"
        subtitle="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
        bgImage={wave}
      />

      
        <div className="border-b border-x border-border-subtle">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {wcuData.map((item, i) => (
              <WCUCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WCU;