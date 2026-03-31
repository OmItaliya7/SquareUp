import {lazy, Suspense} from "react";
import { Helmet } from "react-helmet-async"
import SEO from "../../../shared/components/SEO";


import Hero from "../sections/Hero";
import LogoStrip from "../sections/LogoStrip";
import Loader from "../../../shared/ui/Loader";

const Services = lazy(() => import("../sections/Services"));
const WCU = lazy(() => import("../sections/WCU"));
const AboutUs = lazy(() => import("../sections/AboutUs"));
const FAQ = lazy(() => import("../sections/FAQ"));
const ContactUs = lazy(() => import("../sections/ContactUs"));

const Home = () => {
    return(
        <>
            <SEO
                title="SquareUp | Digital Agency for Web, UI/UX & Scalable Solutions"
                description="SquareUp is a modern digital agency delivering UI/UX design, web development, and scalable digital solutions."
                path="/" 
            />
            <Hero />
            <LogoStrip />

            <Suspense fallback={<Loader />} >
                <Services />
                <WCU />
                <AboutUs />
                <FAQ />
                <ContactUs />
            </Suspense>
        </>
    )
}

export default Home;