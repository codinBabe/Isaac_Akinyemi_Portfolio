import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorBoundary from "./utils/ErrorBoundary.jsx";
import BouncingDots from "./utils/Loader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<BouncingDots />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
