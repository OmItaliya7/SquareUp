import { Link } from "react-router-dom";
import cubeLogo from "../../assets/logo/brand/logo-highlight.svg";


const HighlightCTA = () => {
  return (
    <section id="highlight-CTA" className="flex flex-col px-6 py-10 gap-7.5 xl:px-16 xl:py-16 2xl:px-20 2xl:py-20 xl:gap-10 2xl:gap-12.5">
      {/* ROW 1: Logo and Main Text */}
      <div className="flex flex-col gap-6 xl:flex-row xl:gap-7.5 2xl:gap-10 text-center xl:text-left  items-center">
        <img src={cubeLogo} alt="SquareUp" className="size-20 object-contain xl:size-25 2xl:size-37.5" />
        <div className="flex flex-col gap-2.5 xl:gap-3.5 2xl:gap-5 text-text-muted">
          <h2 className=" text-[20px] xl:text-[24px] 2xl:text-[30px] font-medium leading-[1.2]">
            Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.
          </h2>
          <p className="text-sm xl:text-base 2xl:text-lg">
            Combining the power of design, engineering, and project management to create transformative digital experiences. We invite you to join us on our journey and discover how we can help bring your digital ideas to life.
          </p>
        </div>
      </div>

      {/* ROW 2: The Welcome Capsule */}
      <div className="bg-bg-tertiary border border-border-subtle rounded-xl p-5 xl:px-7.5 xl:py-5 2xl:px-10 2xl:py-6">
        <div className="flex flex-col items-center gap-5 xl:flex-row">
          
          {/* Left Side: Welcome Text + Highlight Box */}
          <div className="flex flex-col items-center min-w-0 gap-4 md:flex-row md:gap-5 xl:flex-1">
            <span className="text-text-muted text-base xl:text-lg 2xl:text-[20px] whitespace-nowrap ">
              Welcome to SquareUp
            </span>
              <p className="bg-bg-secondary px-4 py-3 xl:px-3.5 xl:py-2.5 2xl:px-5 2xl:py-3.5 rounded-lg text-base 2xl:text-[20px] text-text-primary flex-1 text-center md:text-left">
                Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation
              </p>
          </div>
          
          <Link to="/contact" className="bg-accent-primary hover:bg-bg-banner text-text-fourth font-medium px-6 py-4 xl:px-5 xl:py-3.5 2xl:px-8.5 2xl:py-4.5 rounded-md w-full xl:w-auto whitespace-nowrap cursor-pointer shrink-0 text-center">
            Start Project
          </Link>
        </div>
      </div>
    </section>
    
  );
};

export default HighlightCTA;