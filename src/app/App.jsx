import { createBrowserRouter } from "react-router-dom"
import AppLayout from "../shared/layout/AppLayout"
import Home from "../features/home/pages/Home"
import Services from "../features/services/pages/Services"
import Work from "../features/work/pages/Work"
import Process from "../features/process/pages/Process"
import About from "../features/about/pages/About"
import Careers from "../features/careers/pages/Careers"
import Contact from "../features/contact/pages/Contact"
import { RouterProvider } from "react-router-dom"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "services",
          element: <Services />
        },
        {
          path: "work",
          element: <Work />
        },
        {
          path: "process",
          element: <Process />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "careers",
          element: <Careers />
        },
        {
          path: "contact",
          element: <Contact />
        }
      ]
    }
  ])

const App = () =>{

  return(
    <RouterProvider router={router} />
  )
}

export default App