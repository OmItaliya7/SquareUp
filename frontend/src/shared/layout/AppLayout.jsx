import { Outlet, useLocation } from "react-router-dom"
import {useEffect} from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Suspense } from "react"
import Loader from "../ui/Loader"
import ErrorBoundary from "../components/ErrorBoundary"

const AppLayout = () => {

    const location = useLocation();
    useEffect(() => {
    if (location.hash) {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
        }
    }
    //  scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname, location.hash]);

    return(
        <div>
            <Header />
            <main id="main-content">
                <ErrorBoundary>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout;