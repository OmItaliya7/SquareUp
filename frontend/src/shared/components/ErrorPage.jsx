import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router-dom";

const ErrorPage = () => {

  const error = useRouteError();
  const navigate = useNavigate();

  let title = "Something went wrong";
  let message = "An unexpected error occurred.";
  let status = 500;

  if (isRouteErrorResponse(error)) {
    status = error.status;

    if (error.status === 404) {
      title = "Page Not Found";
      message = "The page you are looking for does not exist.";
    }

    if (error.status === 500) {
      title = "Server Error";
      message = "Something went wrong on our side.";
    }
  }

  const goHome = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-primary bg-linear-to-b from-black to-gray-900 text-center">

      <div className="max-w-xl space-y-6">

        <h1 className="font-bold text-7xl text-accent-primary">
          {status}
        </h1>

        <h2 className="text-3xl font-semibold">
          {title}
        </h2>

        <p className="text-muted">
          {message}
        </p>

        <div className="flex justify-center mt-6 gap-4">

          <button
            aria-label="go back button"
            onClick={goBack}
            className="px-6 py-3 border border-subtle rounded-lg text-primary transition bg-bg-primary hover:bg-bg-secondary"
          >
            Go Back
          </button>

          <button
            aria-label="go home button"
            onClick={goHome}
            className="px-6 py-3 transition bg-red-600 rounded-lg hover:bg-red-500"
          >
            Go Home
          </button>

        </div>

      </div>

    </section>
  );
};

export default ErrorPage;