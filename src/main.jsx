import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import "./styles/index.css";
import { LayoutContextProvider } from "./context/LayoutContext";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { WorkspaceContextProvider } from "./context/WorkspaceContext.jsx";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LayoutContextProvider>
        <ThemeContextProvider>
          <WorkspaceContextProvider>
            <App />
            <Analytics />
          </WorkspaceContextProvider>
        </ThemeContextProvider>
      </LayoutContextProvider>
    </BrowserRouter>
  </StrictMode>
);
