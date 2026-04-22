import { memo } from 'react';
import ServiceCard from './ServiceCard';

const ServiceCategoryGrid = ({ categoryTitle, items }) => (
  <>
    {/* Category heading  */}
    <div className="p-10 2xl:p-12.5">
      <h3 className="text-center text-xl font-medium leading-none text-muted md:text-left xl:text-[22px] 2xl:text-[28px]">
        {categoryTitle}
      </h3>
    </div>

    {/* Cards grid  */}
    <div className="grid grid-cols-2 divide-x divide-y divide-subtle border-y border-subtle xl:grid-cols-4 xl:divide-y-0">
      {items.map((item) => (
        <ServiceCard key={item.title} icon={item.icon} title={item.title} />
      ))}
    </div>
  </>
);

export default memo(ServiceCategoryGrid);