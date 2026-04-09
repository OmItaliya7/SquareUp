import { Link } from "react-router-dom";
import cubeLogo from "../../assets/logo/brand/logo-highlight.svg";


const HighlightCTA = () => {
  return (
    
    <div className="border-x  border-border-subtle flex flex-col px-6 py-10 gap-7.5 xl:p-15 xl:gap-10 2xl:p-20 2xl:gap-12.5">
      
      {/* ROW 1: Logo and Main Text */}
      <div className="flex flex-col items-center gap-6 text-center xl:flex-row xl:text-left xl:gap-7.5 2xl:gap-10">
        <div className="size-20 xl:size-25 2xl:size-37.5 shrink-0">
          <img src={cubeLogo} alt="SquareUp" className="block object-contain w-full h-full" />
        </div>
        
        <div className="flex flex-col gap-2.5 xl:gap-3.5 2xl:gap-5">
          <h2 className="text-text-muted text-[20px]  xl:text-[24px] 2xl:text-[30px] font-medium leading-[1.2]">
            Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.
          </h2>
          <p className="text-sm font-normal leading-normal text-text-muted xl:text-base 2xl:text-lg">
            Combining the power of design, engineering, and project management to create transformative digital experiences. We invite you to join us on our journey and discover how we can help bring your digital ideas to life.
          </p>
        </div>
      </div>

      {/* ROW 2: The Welcome Capsule (Overflow & Gap Fix) */}
      <div className="bg-bg-tertiary border border-border-subtle rounded-xl p-5 xl:px-7.5 xl:py-5 2xl:px-10 2xl:py-6">
        <div className="flex flex-col items-center justify-between gap-6 xl:flex-row xl:gap-10">
          
          {/* Left Side: Welcome Text + Highlight Box */}
          <div className="flex flex-col items-center w-full gap-4 md:flex-row md:gap-5 xl:flex-1">
            <span className="text-text-muted text-base xl:text-lg 2xl:text-[20px] font-normal whitespace-nowrap ">
              Welcome to SquareUp
            </span>
            
            {/* Added max-width and flex-shrink to prevent pushing the button off-screen */}
            <div className="bg-bg-secondary px-4 py-3 xl:px-3.5 xl:py-2.5 2xl:px-5 2xl:py-3.5 rounded-lg  w-full md:w-auto xl:max-w-187.5 2xl:max-w-237.5  ">
              <p className="text-[16px] 2xl:text-[20px] font-normal text-text-primary leading-normal text-center md:text-left">
                Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation
              </p>
            </div>
          </div>
          
          {/* Right Side: Action Button */}
          <Link to="/contact" className="bg-accent-primary hover:bg-bg-banner text-text-fourth font-medium px-6 py-4 xl:px-5 xl:py-3.5 2xl:px-8.5 2xl:py-4.5 rounded-md w-full xl:w-auto whitespace-nowrap cursor-pointer shrink-0 text-center">
            Start Project
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default HighlightCTA;