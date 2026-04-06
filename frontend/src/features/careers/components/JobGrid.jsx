import JobCard from './JobCard';

const JobGrid = ({ categoryTitle, jobs }) => {

  // If there are no jobs, display an message 
  if (!jobs || jobs.length === 0) {
    return (
      <div className="border-x border-b border-[#262626] bg-[#1A1A1A] py-16 text-center">
        <h3 className="text-lg font-medium text-white">
          No Open Positions
        </h3>
        <p className="text-[#98989A] mt-2">
          We do not have any openings right now. Check back soon!
        </p>
      </div>
    );
  }

  
  return (
  <div className="border-x border-b border-[#262626] bg-[#1A1A1A]">
    
    {/* CATEGORY TITLE BAR */}
    <div className="p-10 2xl:p-12.5 border-b border-[#262626]">
      <h3 className="text-[#98989A] text-xl xl:text-[22px] 2xl:text-[28px] font-medium text-center md:text-left leading-none">
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