import { memo } from "react";
import StepCard from "./StepCard";

const StepGrid = ({ items, variant = "default" }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-subtle divide-y lg:divide-x divide-subtle">
      {items.map((item) => (
        <StepCard key={item.number} {...item} variant={variant} />
      ))}
    </div>
);

export default memo(StepGrid);