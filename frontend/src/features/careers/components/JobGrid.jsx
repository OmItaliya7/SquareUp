import JobCard from './JobCard';

const JobGrid = ({ categoryTitle, jobs }) => {

  // If there are no jobs, display an message 
  if (!jobs || jobs.length === 0) {
    return (
      <div className="py-16 text-center border-b border-x border-border-subtle">
        <h3 className="text-lg font-medium text-text-primary">
          No Open Positions
        </h3>
        <p className="mt-2 text-text-muted">
          We do not have any openings right now. Check back soon!
        </p>
      </div>
    );
  }

  
  return (
  <div className="border-b border-x border-border-subtle">
    
    {/* CATEGORY TITLE BAR */}
    <div className="p-10 2xl:p-12.5 border-b border-border-subtle">
      <h3 className="text-text-muted text-xl xl:text-[22px] 2xl:text-[28px] font-medium text-center md:text-left leading-none">
        {categoryTitle}
      </h3>
    </div>

    {/* JOB CARDS GRID */}
    <div className="grid grid-c-b ols-1 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  </div>
)};

export default JobGrid; 