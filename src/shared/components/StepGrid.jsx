import StepCard from "./StepCard";

const StepGrid = ({ items }) => (
  <div className="border-x border-[#262626] bg-[#1A1A1A]">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {items.map((item, index) => (
        <StepCard 
          key={index} 
          index={index} 
          total={items.length} 
          
          {...item} 
        />
      ))}
    </div>
  </div>
);

export default StepGrid;