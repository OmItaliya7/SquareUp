import { RouterProvider } from "react-router-dom"
import { router } from "./router/routes"  
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loader from "../shared/ui/Loader";



const App = () =>{

  return(
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={ <Loader /> }>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App