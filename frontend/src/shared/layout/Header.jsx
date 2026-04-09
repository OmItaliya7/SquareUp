  import { useState } from "react"
  import { Link, useLocation } from "react-router-dom"
  import { navLinks } from "../../shared/data/navbarData"
  import logo from "../../assets/logo/brand/logo-main.svg"
  import Container from "../../shared/ui/Container"
  import menuIcon from "../../assets/icons/common/menu-toggle.svg"

  const Header = () => {

    const [open, setOpen] = useState(false)
    const { pathname } = useLocation()

    const isActive = (path) => {
      if (path === "/") return pathname === "/"
      return pathname.startsWith(path) && pathname !=="/"
    }

    const closeMenu = () => setOpen(false)

    return (
      <>
        {/* HEADER*/}
        <header className="w-full lg:border-b border-border-subtle">
          <a href="#main-content" className="text-sm font-medium text-black rounded-md sr-only z-200 focus:not-sr-only focus:absolute focus:top-1 focus:left-1 bg-accent-primary">Skip to main content</a>
          <Container>

            <div className="flex items-center justify-between pt-10 pb-5 xl:py-5">
              
              <div className="flex items-center">
                <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
                  <img src={logo} alt="SquareUp logo" className="size-10 2xl:size-15" />
                  <span className="font-semibold text-text-primary">SquareUp</span>
                </Link>
              </div>

              <nav aria-label="Main navigation" className="items-center hidden lg:flex xl:gap-1 2xl:gap-5">

                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={
                      isActive(item.path)
                        ? "bg-bg-secondary text-text-primary px-5.5 py-3 rounded-md text-sm 2xl:text-lg font-semibold transition-all"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary px-5.5 py-3 rounded-md text-sm 2xl:text-lg font-medium transition-all"
                    }
                  >
                    {item.name}
                  </Link>
                ))}

              </nav>

              

                {/* Desktop Contact */}
                <Link
                  to="/contact"
                  className="hidden lg:flex bg-accent-primary  px-4.5 py-3 2xl:px-6 2xl:py-4 rounded-md text-sm 2xl:text-lg font-medium text-text-tertiary"
                >
                  Contact Us
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setOpen(!open)}
                  aria-label="Toggle menu"
                  aria-expanded={open}
                  aria-controls="mobile-menu"
                  className="lg:hidden w-11.5 h-11.5"
                >
                  <img src={menuIcon} alt="Menu toggle" className={`transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`} />
                </button>

              </div>

            

          </Container>
        </header>


        {/* ================= MOBILE MENU ================= */}
        <div
        id="mobile-menu"
          className={`
            absolute z-40
            lg:hidden
            w-full
            bg-bg-primary
            border-b border-border-subtle
            transition-all duration-300
            ${open ? "max-h-125 py-6" : "max-h-0 overflow-hidden"}
          `}
        >
          <Container>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={
                    isActive(item.path)
                      ? "bg-bg-secondary text-white px-4 py-3 rounded-md text-sm font-semibold"
                      : "text-text-muted hover:text-white hover:bg-bg-secondary px-4 py-3 rounded-md text-sm font-medium"
                  }
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={closeMenu}
                className="w-full py-5 mt-3 font-medium text-center rounded-md bg-accent-primary text-text-tertiary"
                
              >
               Contact Us
                
              </Link>

            </nav>
          </Container>
        </div>
      </>
    )
  }

  export default Header
