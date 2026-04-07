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
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[#1A1A1A] text-white px-6">
          <h1 className="mb-4 text-3xl font-semibold">
            ⚠️ Page failed to load
          </h1>

          <p className="text-[#98989A] mb-6">
            Something went wrong while loading this page.
          </p>

          <button
            onClick={this.handleReload}
            className="bg-[#9EFF00] text-[#1A1A1A] px-6 py-3 rounded-md font-medium"
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