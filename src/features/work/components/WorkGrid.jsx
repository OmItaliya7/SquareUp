

import WorkCard from "./WorkCard";

const WorkGrid = ({ projects }) => (
  <div className="border-x border-[#262626] bg-[#1A1A1A]">
    {/* 1 column on mobile/tablet, 2 columns on desktop (lg) */}
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {projects.map((project, index) => (
        <WorkCard 
          key={index} 
          index={index} 
          total={projects.length} 
          {...project} 
        />
      ))}
    </div>
  </div>
);

export default WorkGrid;