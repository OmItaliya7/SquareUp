import {lazy, Suspense} from "react";
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
                title="SquareUp | Web Development, UI/UX Design & Mobile App Agency"
                description="SquareUp is a modern digital product studio offering web development, UI/UX design, and scalable software solutions for startups and growing businesses."
                path="/" 
            />
            
                <Hero />
                <section className="w-full border-x border-subtle" id="Home page">
                <LogoStrip />

                <Suspense fallback={<Loader />} >
                    <Services />
                </Suspense>

                <Suspense fallback={<Loader />} >
                    <WCU />
                </Suspense>

                <Suspense fallback={<Loader />} >
                    <AboutUs />
                </Suspense>

                <Suspense fallback={<Loader />} >
                    <FAQ />
                </Suspense>

                <Suspense fallback={<Loader />} >
                    <ContactUs />
                </Suspense>
            </section>
        </>
    )
}

export default Home;