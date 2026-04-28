import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../shared/data/navbarData";
import logo from "../../assets/logo/brand/logo-main.svg";
import OpenIcon from "../../assets/icons/common/open-icon.svg";
import CloseIcon from "../../assets/icons/common/close-icon.svg";


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
      <header className="w-full lg:border-b border-subtle lg:sticky top-0 bg-bg-primary z-50">
        
        <a href="#main-content" className="sr-only z-200 rounded-md bg-accent-primary font-medium text-sm text-black focus:not-sr-only focus:absolute focus:left-1 focus:top-1">
          Skip to main content
        </a>

        <div className="layout-shell flex items-center justify-between pt-10 pb-5 xl:py-5">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="SquareUp logo"
              className="size-10 2xl:size-15"
            />
            <span className="font-semibold 2xl:text-xl text-primary">
              SquareUp
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav aria-label="Main navigation" className="hidden lg:flex w-full max-w-[425px] 2xl:max-w-[540px] mx-auto justify-center gap-6 2xl:gap-7.5">
            {navLinks.map((item) => (
              <Link key={item.name} to={item.path} className={`inline-flex items-center rounded-md 2xl:rounded-lg text-sm 2xl:text-lg transition-all duration-200 hover:text-primary ${ isActive(item.path) ? "px-4.5 py-3 2xl:px-7 2xl:py-3.5 bg-bg-secondary font-semibold text-primary" : "font-medium text-secondary"}`}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact */}
          <Link to="/contact" className="hidden lg:flex px-4.5 py-3 2xl:px-6 2xl:py-4 rounded-md 2xl:rounded-lg bg-accent-primary font-medium text-sm 2xl:text-lg text-tertiary">
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" className="lg:hidden p-1.5 rounded-md 2xl:rounded-lg bg-[#262626] transition-all duration-300">
              {open ? <img src={CloseIcon} alt="Close menu" /> : <img src={OpenIcon} alt="Open menu" />}
          </button>
        </div>
      </header>

      {/*  MOBILE MENU  */}
      <div id="mobile-menu" className={`absolute z-40 w-full border-b border-subtle bg-bg-primary transition-all duration-300 lg:hidden ${open ? "max-h-125 py-6" : "max-h-0 overflow-hidden" }`}>
        <nav aria-label="Mobile navigation" className="layout-shell flex flex-col gap-3">
          {navLinks.map((item) => (
            <Link key={item.name} to={item.path} onClick={closeMenu}
              className={`px-4 py-3 rounded-md text-sm transition ${
                isActive(item.path)
                  ? "bg-bg-secondary font-semibold text-white"
                  : "font-medium text-muted hover:bg-bg-secondary hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link to="/contact" onClick={closeMenu} className="w-full px-9 py-3.5 rounded-md bg-accent-primary font-medium text-sm text-tertiary text-center">
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;