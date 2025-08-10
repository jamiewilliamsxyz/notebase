import { useContext } from "react";
import { LayoutContext } from "./context/LayoutContext";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Sidebar } from "./components/layout/Sidebar";

export const App = () => {
  const { isExpanded } = useContext(LayoutContext);

  return (
    <div className="flex">
      <Sidebar />
      <main className={`${!isExpanded ? `ml-[20rem]` : ``} w-full`.trim()}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};
