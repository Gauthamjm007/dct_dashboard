import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
import ErrorBoundary from "react-error-boundary";
import Test from "./Test";
function App() {
  return (
    <>
      <ErrorBoundary>
        <Test />
        <Dashboard />
      </ErrorBoundary>
    </>
  );
}

export default App;
