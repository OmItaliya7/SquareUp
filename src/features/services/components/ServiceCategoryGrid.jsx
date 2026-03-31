import { memo } from 'react';
import ServiceCard from './ServiceCard';

const ServiceCategoryGrid = ({ categoryTitle, items }) => (
  <div className="border-x  border-[#262626] bg-[#1A1A1A]">
    {/* Category heading  */}
    <div className="p-10  2xl:p-12.5 border-b border-[#262626]">
      <h3 className="text-[#98989A] text-xl xl:text-[22px] 2xl:text-[28px] font-medium text-center md:text-left leading-none">
        {categoryTitle}
      </h3>
    </div>

    {/* Cards grid  */}
    <div className="grid grid-cols-2 xl:grid-cols-4 border-b border-[#262626]">
      {items.map((item, idx) => (
        <ServiceCard key={item.title} index={idx} total={items.length} icon={item.icon} title={item.title} />
      ))}
    </div>
  </div>
);

export default memo(ServiceCategoryGrid);