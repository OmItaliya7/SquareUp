  import { useState } from "react"
  import { Link, useLocation } from "react-router-dom"
  import { navLinks } from "../../shared/data/navbarData"
  import logo from "../../assets/logo/brand/logo-main.svg"
  import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"
  import Container from "../../shared/ui/Container"

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
        <header className="w-full lg:border-b border-[#262626]">
          <Container>

            <div className="flex items-center justify-between pt-10 pb-5 xl:py-5">
              
              <div className="flex items-center">
                <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
                  <img src={logo} alt="SquareUp logo" className="size-10 2xl:size-15" />
                  <span className="font-semibold text-white">SquareUp</span>
                </Link>
              </div>

              <nav aria-label="Main navigation" className="items-center hidden lg:flex xl:gap-1 2xl:gap-5">

                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={
                      isActive(item.path)
                        ? "bg-[#262626] text-white px-5.5 py-3 rounded-md text-sm 2xl:text-lg font-semibold transition-all"
                        : "text-[#E6E6E6] hover:text-white hover:bg-[#262626] px-5.5 py-3 rounded-md text-sm 2xl:text-lg font-medium transition-all"
                    }
                  >
                    {item.name}
                  </Link>
                ))}

              </nav>

              <div className="flex items-center gap-3">

                {/* Desktop Contact */}
                <Link
                  to="/contact"
                  className="hidden lg:flex bg-[#9EFF00]   px-4.5 py-3 2xl:px-6 2xl:py-4 rounded-md text-sm 2xl:text-lg font-medium text-soft"
                >
                  Contact Us
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setOpen(!open)}
                  aria-label="Toggle menu"
                  aria-expanded={open}
                  aria-controls="mobile-menu"
                  className="lg:hidden w-11.5 h-11.5 bg-[#262626]  rounded-md flex items-center justify-center"
                >
                  {open
                    ? <HiOutlineX size={22} color="#D8FF99" />
                    : <HiOutlineMenuAlt3 size={28} color="#D8FF99" />
                  }
                </button>

              </div>

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
            bg-[#1A1A1A]
            border-b border-[#262626]
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
                      ? "bg-[#262626] text-white px-4 py-3 rounded-md text-sm font-semibold"
                      : "text-[#98989A] hover:text-white hover:bg-[#262626] px-4 py-3 rounded-md text-sm font-medium"
                  }
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-3 bg-[#9EFF00] text-[#262626] w-full py-5 rounded-md text-center font-medium"
                
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
