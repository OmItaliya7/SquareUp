// import { memo } from "react";
// import WorkCard from "./WorkCard";

// const WorkGrid = ({ projects }) => {

//   if(!projects || projects.length === 0) {
//     return (
//       <div className="py-16 text-center border-x border-border-subtle">
//         <h3 className="text-lg font-medium text-white">
//           No Projects Yet
//         </h3>
//         <p className="mt-2 text-text-muted">
//           We are currently working on exciting projects. Stay tuned!
//         </p>
//       </div>
//     );
//   }
 
//   return (
//   <div className="border-x border-border-subtle ">
//     <div className="grid grid-cols-1 lg:grid-cols-2">
//       {projects.map((project, index) => (
//         <WorkCard 
//           key={project.id} 
//           index={index} 
//           total={projects.length} 
//           category={project.category} 
//           image={project.image}
//           brand={project.brand}
//           url={project.url}
//           description={project.description}
//         />
//       ))}
//     </div>
//   </div>
// )};

// export default memo(WorkGrid);




import { memo } from "react";
import WorkCard from "./WorkCard";

const WorkGrid = ({ projects }) => {

  if(!projects || projects.length === 0) {
    return (
      <div className="py-16 text-center border-b border-border-subtle">
        <h3 className="text-lg font-medium text-white">No Projects Yet</h3>
        <p className="mt-2 text-text-muted">Stay tuned!</p>
      </div>
    );
  }
 
  return (
    <div className="grid grid-cols-1 border-b divide-x divide-y lg:grid-cols-2 divide-border-subtle border-border-subtle">
      {projects.map((project) => (
        <WorkCard 
          key={project.id} 
          {...project}
        />
      ))}
    </div>
)};

export default memo(WorkGrid);