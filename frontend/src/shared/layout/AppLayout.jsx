// import { Outlet, useLocation } from "react-router-dom"
// import {useEffect} from "react"
// import Header from "./Header"
// import Footer from "./Footer"
// import { Suspense } from "react"
// import Loader from "../ui/Loader"
// import ErrorBoundary from "../components/ErrorBoundary"

// const AppLayout = () => {

//     const location = useLocation();
//     useEffect(() => {
//     if (location.hash) {
//         const id = location.hash.replace("#", "");
//         const element = document.getElementById(id);

//         if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//         return;
//         }
//     }
//     //  scroll to top
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     }, [location.pathname, location.hash]);

//     return(
//         <div>
//             <Header />
//             <main id="main-content" >
//                 <div className="max-w-[1920px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-[162px]">
//                     <ErrorBoundary>
//                         <Suspense fallback={<Loader />}>
//                             <Outlet />
//                         </Suspense>
//                     </ErrorBoundary>
//                 </div>
//             </main>
//             <Footer />
//         </div>
//     )
// }

// export default AppLayout;










// import { Outlet, useLocation } from "react-router-dom"
// import { useEffect } from "react"
// import Header from "./Header"
// import Footer from "./Footer"
// import { Suspense } from "react"
// import Loader from "../ui/Loader"
// import ErrorBoundary from "../components/ErrorBoundary"

// const AppLayout = () => {
//     const location = useLocation();
    
//     useEffect(() => {
//         if (location.hash) {
//             const id = location.hash.replace("#", "");
//             const element = document.getElementById(id);
//             if (element) {
//                 element.scrollIntoView({ behavior: "smooth" });
//                 return;
//             }
//         }
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     }, [location.pathname, location.hash]);

//     return (
//         <div>
//             <Header />
//             <main 
//                 id="main-content" 
//                 className="flex justify-center"
//                 style={{
//                     width: '100%',
//                     margin: '0 auto',
//                     boxSizing: 'border-box'
//                 }}
//             >
//                 <div className="w-full xl:max-w-[1280px] 2xl:max-w-[1500px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-0">
//                     <ErrorBoundary>
//                         <Suspense fallback={<Loader />}>
//                             <Outlet />
//                         </Suspense>
//                     </ErrorBoundary>
//                 </div>
//             </main>
//             <Footer />
//         </div>
//     )
// }

// export default AppLayout;





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
        <div>
            <Header />
            <main 
                id="main-content" 
                className="flex justify-center"
            >
                <div className="w-full max-w-[1640px] px-4 sm:px-5 xl:px-20 2xl:px-6">
                    <ErrorBoundary>
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                    </ErrorBoundary>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout;
