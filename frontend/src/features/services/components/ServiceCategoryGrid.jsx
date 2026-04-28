import { memo } from 'react';
import ServiceCard from './ServiceCard';

const ServiceCategoryGrid = ({ categoryTitle, items }) => (
  <>
    {/* Category heading  */}
    <div className="p-10 2xl:p-12.5">
      <h3 className="font-medium text-xl xl:text-[22px] 2xl:text-[28px] text-muted text-center md:text-left">
        {categoryTitle}
      </h3>
    </div>

    {/* Cards grid  */}
    <div className="grid grid-cols-2 xl:grid-cols-4 border-y border-subtle divide-subtle divide-x divide-y xl:divide-y-0">
      {items.map((item) => (
        <ServiceCard key={item.title} icon={item.icon} title={item.title} />
      ))}
    </div>
  </>
);

export default memo(ServiceCategoryGrid);