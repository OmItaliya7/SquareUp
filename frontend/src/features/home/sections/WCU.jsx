// import wave from "../../../assets/images/backgrounds/wco-wave.webp"
// import SectionHeader from "../../../shared/components/SectionHeader"
// import { wcuData } from "../data/wcuData"

// const WCUCard = ({ item }) => {
//   return (
//     <div
//       className="flex flex-col px-7.5 py-10 xl:p-15 2xl:p-20 gap-6 xl:gap-7.5 2xl:gap-10"
//     >
//       {/* ICON BOX */}
//       <div className="flex items-center gap-3.5 2xl:gap-5">
        
//         <img
//           src={item.icon}
//           alt={item.title}
//           loading="lazy"
//           decoding="async"
//           className="object-contain size-14.5 xl:size-17.5 2xl:size-22"
//         />
//         <h3 className="font-medium text-xl 2xl:text-[26px] leading-normal tracking-[-0.6%] text-primary">
//           {item.title}
//         </h3>
        
//       </div>

//       {/* DESCRIPTION */}
//       <p className="text-sm xl:text-base 2xl:text-xl leading-normal tracking-[-0.6%] text-secondary">
//         {item.desc}
//       </p>
      
//     </div>
//   );
// };

// const WCU = () => {
//   return (
//     <section className="w-full" id="why-choose-us">
//         <SectionHeader
//           title="Why Choose SquareUp?"
//           subtitle="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
//           bgImage={wave}
//         />
        
//         <div className="grid grid-cols-1 md:grid-cols-2 border-b border-subtle divide-y md:divide-x divide-subtle">
//           {wcuData.map((item, i) => (
//             <WCUCard key={i} item={item} />
//           ))}
//         </div>  
        
//     </section> 
//   )
// }

// export default WCU;





import wave from "../../../assets/images/backgrounds/wco-wave.webp"
import SectionHeader from "../../../shared/components/SectionHeader"
import { wcuData } from "../data/wcuData"

const WCUCard = ({ item }) => {
  return (
    <div
      className={`flex flex-col px-7.5 py-10 xl:p-15 2xl:p-20 gap-6 xl:gap-7.5 2xl:gap-10 border-b border-subtle md:${item.id % 2 === 0 ? "border-b border-subtle" : "border-r border-b border-subtle"}`}>
      {/* ICON BOX */}
      <div className="flex items-center gap-3.5 2xl:gap-5">
        
        <img
          src={item.icon}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="object-contain size-14.5 xl:size-17.5 2xl:size-22"
        />
        <h3 className="font-medium text-xl 2xl:text-[26px] leading-normal tracking-[-0.6%] text-primary">
          {item.title}
        </h3>
        
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm xl:text-base 2xl:text-xl leading-normal tracking-[-0.6%] text-secondary">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          {wcuData.map((item) => (
            <WCUCard key={item.id} item={item} />
          ))}
        </div>  
        
    </section> 
  )
}

export default WCU;
