import { memo } from "react";
import StepCard from "./StepCard";

const StepGrid = ({ items, variant = "default" }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {items.map((item) => (
        <StepCard key={item.id} {...item} variant={variant} />
      ))}
    </div>
);

export default memo(StepGrid);