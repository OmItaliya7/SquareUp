import { memo } from "react";
import WorkCard from "./WorkCard";

const WorkGrid = ({ projects }) => {

  if(!projects || projects.length === 0) {
    return (
      <div className="py-16 border-b border-subtle text-center">
        <h3 className="font-medium text-lg text-white">No Projects Yet</h3>
        <p className="mt-2 text-muted">Stay tuned!</p>
      </div>
    );
  }
 
  return (
    
    <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-subtle divide-subtle divide-x divide-y">
      {projects.map((project) => (
        <WorkCard 
          key={project.id} 
          {...project}
        />
      ))}
    </div>
    
)};

export default memo(WorkGrid);