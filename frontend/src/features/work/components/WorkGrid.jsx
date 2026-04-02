import { memo } from "react";
import WorkCard from "./WorkCard";

const WorkGrid = ({ projects }) => {

  if(!projects || projects.length === 0) {
    return (
      <div className="border-x border-[#262626] bg-[#1A1A1A] py-16 text-center">
        <h3 className="text-lg font-medium text-white">
          No Projects Yet
        </h3>
        <p className="text-[#98989A] mt-2">
          We are currently working on exciting projects. Stay tuned!
        </p>
      </div>
    );
  }
 
  return (
  <div className="border-x border-[#262626] bg-[#1A1A1A]">
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
)};

export default memo(WorkGrid);