import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center text-text-primary bg-bg-primary">
          <h1 className="mb-4 text-3xl font-semibold">
            ⚠️ Page failed to load
          </h1>

          <p className="mb-6 text-text-muted">
            Something went wrong while loading this page.
          </p>

          <button
            onClick={this.handleReload}
            className="px-6 py-3 font-medium rounded-md bg-accent-primary text-text-fourth"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;