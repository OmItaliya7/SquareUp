import { memo } from "react";
import WorkCard from "./WorkCard";

const WorkGrid = ({ projects }) => {

  if(!projects || projects.length === 0) {
    return (
      <div className="py-16 text-center border-b border-subtle">
        <h3 className="text-lg font-medium text-white">No Projects Yet</h3>
        <p className="mt-2 text-muted">Stay tuned!</p>
      </div>
    );
  }
 
  return (
    <div className="grid grid-cols-1 border-b divide-x divide-y border-subtle divide-subtle lg:grid-cols-2">
      {projects.map((project) => (
        <WorkCard 
          key={project.id} 
          {...project}
        />
      ))}
    </div>
)};

export default memo(WorkGrid);