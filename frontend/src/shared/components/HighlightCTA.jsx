import { Link } from "react-router-dom";
import cubeLogo from "../../assets/logo/brand/logo-highlight.svg";


const HighlightCTA = ({ className }) => {
  return (
    <section id="highlight-CTA" className={`flex flex-col px-6 py-10 xl:p-15 2xl:p-20 gap-7.5 xl:gap-10 2xl:gap-12.5 ${className}`}>
      {/* ROW 1: Logo and Main Text */}
      <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-7.5 2xl:gap-10 text-center xl:text-left">
        <img src={cubeLogo} alt="SquareUp" className="object-contain size-20 xl:size-25 2xl:size-37.5" />
        <div className="flex flex-col gap-2.5 xl:gap-3.5 2xl:gap-5 text-muted">
          <h2 className="font-medium text-xl xl:text-2xl 2xl:text-3xl leading-[1.2] xl:leading-none">
            Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.
          </h2>
          <p className="text-sm xl:text-base 2xl:text-lg">
            Combining the power of design, engineering, and project management to create transformative digital experiences. We invite you to join us on our journey and discover how we can help bring your digital ideas to life.
          </p>
        </div>
      </div>

      {/* ROW 2: The Welcome Capsule */}
      <div className="p-5 xl:px-7.5 xl:py-5 2xl:px-10 2xl:py-6 border border-subtle rounded-[10px] 2xl:rounded-xl bg-bg-tertiary">
        <div className="flex flex-col xl:flex-row items-center gap-5">
          
          {/* Left Side: Welcome Text + Highlight Box */}
          <div className="flex flex-col md:flex-row xl:flex-1 min-w-0 gap-3.5 2xl:gap-5 items-center">
            <span className="whitespace-nowrap text-lg 2xl:text-xl text-muted">
              Welcome to SquareUp
            </span>
              <p className="flex-1 px-3.5 py-2.5 xl:px-3.5 xl:py-2.5 2xl:px-5 2xl:py-3.5 rounded-md 2xl:rounded-lg bg-bg-secondary text-base 2xl:text-xl text-primary text-center md:text-left">
                Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation
              </p>
          </div>
          
          <Link to="/contact" className="w-full xl:w-auto px-5 py-3.5 xl:px-5 xl:py-3.5 2xl:px-8.5 2xl:py-4.5 rounded-md 2xl:rounded-lg bg-accent-primary cursor-pointer font-medium text-sm 2xl:text-lg text-fourth text-center transition-colors hover:bg-bg-banner">
            Start Project
          </Link>
        </div>
      </div>
    </section>
    
  );
};

export default HighlightCTA;