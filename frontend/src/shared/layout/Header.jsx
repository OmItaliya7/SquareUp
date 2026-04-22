// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { navLinks } from "../../shared/data/navbarData";
// import logo from "../../assets/logo/brand/logo-main.svg";
// import menuIcon from "../../assets/icons/common/menu-toggle.svg";
// import closeIcon from "../../assets/icons/common/close-btn.svg";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path) => {
//     if (path === "/") return location.pathname === "/";
//     return location.pathname.startsWith(path) && location.pathname !== "/";
//   };

//   useEffect(() => {
//     if (!open) return;

//     const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
//     document.body.style.overflow = "hidden";
//     document.body.style.paddingRight = `${scrollBarWidth}px`;

//     return () => {
//       document.body.style.overflow = "";
//       document.body.style.paddingRight = "";
//     };
//   }, [open]);

//   const closeMenu = () => setOpen(false);

//   return (
//     <>
//       {/* HEADER*/}
//       <header className="w-full lg:border-b border-subtle">
        
//         <a href="#main-content" className="text-sm font-medium text-black rounded-md sr-only z-200 focus:not-sr-only focus:absolute focus:top-1 focus:left-1 bg-accent-primary">
//           Skip to main content
//         </a>

//         <div className="flex items-center justify-between pt-10 pb-5 xl:py-5 layout-shell">
//           <Link to="/" onClick={closeMenu} className="flex items-center gap-2 shrink-0"  >
//             <img
//               src={logo}
//               alt="SquareUp logo"
//               className="size-10 2xl:size-15"
//             />
//             <span className="font-semibold text-primary 2xl:text-xl">
//               SquareUp
//             </span>
//           </Link>

//           <nav aria-label="Main navigation" className="items-center hidden lg:flex lg:gap-1">
//             {navLinks.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`px-5.5 py-3 rounded-lg text-sm transition-all 2xl:px-6 2xl:py-3.5 2xl:text-lg ${
//                   isActive(item.path)
//                     ? "bg-bg-secondary font-semibold text-primary"
//                     : "font-medium text-secondary hover:bg-bg-secondary hover:text-primary"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//           {/* Desktop Contact */}
//           <Link to="/contact" className="hidden rounded-md bg-accent-primary px-4.5 py-3 text-sm font-medium text-tertiary lg:flex 2xl:px-6 2xl:py-4 2xl:text-lg">
//             Contact Us
//           </Link>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             aria-label={open ? "Close menu" : "Open menu"}
//             aria-expanded={open}
//             aria-controls="mobile-menu"
//             className="w-11.5 h-11.5 lg:hidden"
//           >
//             <img
//               src={open ? closeIcon : menuIcon}
//               alt={open ? "Close menu" : "Open menu"}
//             />
//           </button>
//         </div>
//       </header>

//       {/*  MOBILE MENU  */}
//       <div id="mobile-menu" className={`absolute z-40 w-full border-b border-subtle bg-bg-primary transition-all duration-300 lg:hidden ${open ? "max-h-125 py-6" : "max-h-0 overflow-hidden" }`}>
//         <nav aria-label="Mobile navigation" className="flex flex-col gap-2 layout-shell">
//           {navLinks.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               onClick={closeMenu}
//               className={`rounded-md px-4 py-3 text-sm ${
//                 isActive(item.path)
//                   ? "bg-bg-secondary font-semibold text-white"
//                   : "font-medium text-muted hover:bg-bg-secondary hover:text-white"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}

//           <Link
//             to="/contact"
//             onClick={closeMenu}
//             className="w-full py-5 mt-3 font-medium text-center rounded-md bg-accent-primary text-tertiary"
//           >
//             Contact Us
//           </Link>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;


















import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../shared/data/navbarData";
import logo from "../../assets/logo/brand/logo-main.svg";
import menuIcon from "../../assets/icons/common/menu-toggle.svg";
import closeIcon from "../../assets/icons/common/close-btn.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path) && location.pathname !== "/";
  };

  useEffect(() => {
    if (!open) return;

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* HEADER*/}
      <header className="w-full lg:border-b border-subtle">
        
        <a href="#main-content" className="text-sm font-medium text-black rounded-md sr-only z-200 focus:not-sr-only focus:absolute focus:top-1 focus:left-1 bg-accent-primary">
          Skip to main content
        </a>

        <div className="flex items-center justify-between pt-10 pb-5 xl:py-5 layout-shell">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="SquareUp logo"
              className="size-10 2xl:size-15"
            />
            <span className="font-semibold text-primary 2xl:text-xl">
              SquareUp
            </span>
          </Link>

          {/* DESKTOP NAVIGATION - KEY CHANGES HERE */}
          <nav aria-label="Main navigation" className="items-center hidden gap-0 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  inline-flex items-center rounded-lg transition-all
                  ${
                    isActive(item.path)
                      ? "bg-bg-secondary font-semibold text-primary px-4.5 py-3 2xl:px-6 2xl:py-3.5"
                      : "font-medium text-secondary hover:bg-bg-secondary hover:text-primary px-4.5 py-3 2xl:px-6 2xl:py-3.5"
                  }
                  text-sm 2xl:text-lg whitespace-nowrap
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact */}
          <Link to="/contact" className="hidden rounded-md bg-accent-primary px-4.5 py-3 text-sm font-medium text-tertiary lg:flex 2xl:px-6 2xl:py-4 2xl:text-lg">
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="w-11.5 h-11.5 lg:hidden"
          >
            <img
              src={open ? closeIcon : menuIcon}
              alt={open ? "Close menu" : "Open menu"}
            />
          </button>
        </div>
      </header>

      {/*  MOBILE MENU  */}
      <div id="mobile-menu" className={`absolute z-40 w-full border-b border-subtle bg-bg-primary transition-all duration-300 lg:hidden ${open ? "max-h-125 py-6" : "max-h-0 overflow-hidden" }`}>
        <nav aria-label="Mobile navigation" className="flex flex-col gap-2 layout-shell">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className={`rounded-md px-4 py-3 text-sm ${
                isActive(item.path)
                  ? "bg-bg-secondary font-semibold text-white"
                  : "font-medium text-muted hover:bg-bg-secondary hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={closeMenu}
            className="w-full py-5 mt-3 font-medium text-center rounded-md bg-accent-primary text-tertiary"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
