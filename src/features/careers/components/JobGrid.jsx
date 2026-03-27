import JobCard from './JobCard';

const JobGrid = ({ categoryTitle, jobs }) => (
  <div className="border-x border-b border-[#262626] bg-[#1A1A1A]">
    
    {/* CATEGORY TITLE BAR */}
    <div className="p-10 2xl:p-[50px] border-b border-[#262626]">
      <h3 className="text-[#98989A] text-xl xl:text-[22px] 2xl:text-[28px] font-medium text-center md:text-left leading-none">
        {categoryTitle}
      </h3>
    </div>

    {/* Updated Grid: No gap, no padding, to let borders connect */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job, index) => (
        <JobCard key={index} index={index} {...job} />
      ))}
    </div>
  </div>
);

export default JobGrid; 