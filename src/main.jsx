import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/index.css";
import { LayoutContextProvider } from "./context/LayoutContext";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LayoutContextProvider>
        <App />
      </LayoutContextProvider>
    </BrowserRouter>
  </StrictMode>
);
