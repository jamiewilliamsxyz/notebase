import { useContext } from "react";
import { LayoutContext } from "./context/LayoutContext";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { InfoPage } from "./pages/InfoPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Sidebar } from "./components/layout/Sidebar";
import { DeleteNoteModal } from "./components/features/sidebar/DeleteNoteModal";

export const App = () => {
  const { isExpanded, isHidden } = useContext(LayoutContext);

  return (
    <div className="flex bg-base-300">
      {!isHidden && <Sidebar />}

      <main
        className={`
          ${isExpanded ? "sm:ml-[20rem] ml-[0rem]" : "ml-[0rem]"}
        
          w-full transition-all duration-300 ease-in-out`}
      >
        <DeleteNoteModal />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};
