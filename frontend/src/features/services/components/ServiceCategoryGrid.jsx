// import { memo } from 'react';
// import ServiceCard from './ServiceCard';

// const ServiceCategoryGrid = ({ categoryTitle, items }) => (
//   <div className="border-x border-border-subtle">
//     {/* Category heading  */}
//     <div className="p-10  2xl:p-12.5 border-b border-border-subtle">
//       <h3 className="text-text-muted text-xl xl:text-[22px] 2xl:text-[28px] font-medium text-center md:text-left leading-none">
//         {categoryTitle}
//       </h3>
//     </div>

//     {/* Cards grid  */}
//     <div className="grid grid-cols-2 border-b xl:grid-cols-4 border-border-subtle">
//       {items.map((item, idx) => (
//         <ServiceCard key={item.title} index={idx} total={items.length} icon={item.icon} title={item.title} />
//       ))}
//     </div>
//   </div>
// );

// export default memo(ServiceCategoryGrid);




import { memo } from 'react';
import ServiceCard from './ServiceCard';

const ServiceCategoryGrid = ({ categoryTitle, items }) => (
  <>
    {/* Category heading  */}
    <div className="p-10 2xl:p-12.5">
      <h3 className="text-center md:text-left font-medium text-text-muted text-xl xl:text-[22px] 2xl:text-[28px]">
        {categoryTitle}
      </h3>
    </div>

    {/* Cards grid  */}
    <div className="grid grid-cols-2 divide-x divide-y xl:divide-y-0 border-y xl:grid-cols-4 divide-border-subtle border-border-subtle">
      {items.map((item) => (
        <ServiceCard key={item.title} icon={item.icon} title={item.title} />
      ))}
    </div>
  </>
);

export default memo(ServiceCategoryGrid);