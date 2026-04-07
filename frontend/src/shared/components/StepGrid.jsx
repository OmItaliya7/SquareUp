import { memo } from "react";
import StepCard from "./StepCard";

const StepGrid = ({ items, variant = "default" }) => (
  <div className="border-x border-[#262626]">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {items.map((item, index) => (
        <StepCard 
          key={item.number} 
          index={index} 
          variant={variant}
          number={item.number} 
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </div>
);

export default memo(StepGrid);