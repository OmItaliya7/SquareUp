import JobCard from './JobCard';

const JobGrid = ({ categoryTitle, jobs }) => {

  // If there are no jobs, display an message 
  if (!jobs || jobs.length === 0) {
    return (
      <div className="py-16 text-center">
        <h3 className="text-lg font-medium text-primary">
          No Open Positions
        </h3>
        <p className="mt-2 text-muted">
          We do not have any openings right now. Check back soon!
        </p>
      </div>
    );
  }
  
  return (
  <div className="border-b border-subtle">
    
    {/* CATEGORY TITLE BAR */}
    <h3 className="border-b border-subtle p-10 text-center text-xl font-medium leading-none text-muted md:text-left xl:text-[22px] 2xl:p-12.5 2xl:text-[28px]">
      {categoryTitle}
    </h3>

    {/* JOB CARDS GRID */}
    <div className="grid grid-cols-1 divide-y divide-subtle md:grid-cols-2 md:divide-x lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  </div>
)};

export default JobGrid; 