import Hero from "../sections/Hero";
import LogoStrip from "../sections/LogoStrip";
import Services from "../sections/Services";
import WCU from "../sections/WCU";
import AboutUs from "../sections/AboutUs";
import FAQ from "../sections/FAQ";
import ContactUs from "../sections/ContactUs";

const Home = () => {
    return(
        <>
        <Hero />
        <LogoStrip />
        <Services />
        <WCU />
        <AboutUs />
        <FAQ />
        <ContactUs />
        </>
    )
}

export default Home;