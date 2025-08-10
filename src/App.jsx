import { LayoutContextProvider } from "./context/LayoutContext";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Sidebar } from "./components/layout/Sidebar";

export const App = () => {
  return (
    <LayoutContextProvider>
      <div className="flex">
        <Sidebar />
        <main className="ml-[20rem] w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </LayoutContextProvider>
  );
};
