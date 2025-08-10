import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/index.css";
import { LayoutContextProvider } from "./context/LayoutContext";
import { WorkspaceContextProvider } from "./context/WorkspaceContext.jsx";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LayoutContextProvider>
        <WorkspaceContextProvider>
          <App />
        </WorkspaceContextProvider>
      </LayoutContextProvider>
    </BrowserRouter>
  </StrictMode>
);
