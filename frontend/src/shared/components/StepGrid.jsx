// import { memo } from "react";
// import StepCard from "./StepCard";

// const StepGrid = ({ items, variant = "default" }) => (
//   <div className="border-x border-border-subtle">
//     <div className="grid grid-cols-1 lg:grid-cols-2">
//       {items.map((item, index) => (
//         <StepCard 
//           key={item.number} 
//           index={index} 
//           variant={variant}
//           number={item.number} 
//           title={item.title}
//           description={item.description}
//         />
//       ))}
//     </div>
//   </div>
// );

// export default memo(StepGrid);



import { memo } from "react";
import StepCard from "./StepCard";

const StepGrid = ({ items, variant = "default" }) => (
    <div className="grid grid-cols-1 border-b divide-y lg:divide-x lg:grid-cols-2 divide-border-subtle border-border-subtle">
      {items.map((item) => (
        <StepCard 
          key={item.number} {...item} variant={variant} />
      ))}
    </div>
);

export default memo(StepGrid);