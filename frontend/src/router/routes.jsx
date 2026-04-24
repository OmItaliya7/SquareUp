import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import AppLayout from "../shared/layout/AppLayout";
import ErrorPage from "../shared/components/ErrorPage";

const Home = lazy(() => import("../features/home/pages/Home"));
const Services = lazy(() => import("../features/services/pages/Services"));
const Work = lazy(() => import("../features/work/pages/Work"));
const Process = lazy(() => import("../features/process/pages/Process"));
const About = lazy(() => import("../features/about/pages/About"));
const Careers = lazy(() => import("../features/careers/pages/Careers"));
const Contact = lazy(() => import("../features/contact/pages/Contact"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "process",
        element: <Process />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
