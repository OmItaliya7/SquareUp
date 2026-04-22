import { memo } from "react";
import StepCard from "./StepCard";

const StepGrid = ({ items, variant = "default" }) => (
    <div className="grid grid-cols-1 border-b divide-y border-subtle divide-subtle lg:grid-cols-2 lg:divide-x">
      {items.map((item) => (
        <StepCard key={item.number} {...item} variant={variant} />
      ))}
    </div>
);

export default memo(StepGrid);