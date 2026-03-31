import { memo } from "react";
import WorkCard from "./WorkCard";

const WorkGrid = ({ projects }) => (
  <div className="border-x border-[#262626] bg-[#1A1A1A]">
    {/* 1 column on mobile/tablet, 2 columns on desktop  */}
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {projects.map((project, index) => (
        <WorkCard 
          key={project.id} 
          index={index} 
          total={projects.length} 
          category={project.category} 
          image={project.image}
          brand={project.brand}
          url={project.url}
          description={project.description}
        />
      ))}
    </div>
  </div>
);

export default memo(WorkGrid);