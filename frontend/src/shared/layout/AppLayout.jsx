import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
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
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname, location.hash]);

    return (
        <>
            <Header />
            <main id="main-content" className="flex justify-center">
                <div className="w-full max-w-[1640px] px-4 sm:px-5 xl:px-20 2xl:px-6">
                    <ErrorBoundary>
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                    </ErrorBoundary>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AppLayout;
