import { RouterProvider } from "react-router-dom";
import { router } from "./src/router/routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;