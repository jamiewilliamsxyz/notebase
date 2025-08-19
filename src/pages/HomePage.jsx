import { useContext, useEffect } from "react";
import { MarkdownEditor } from "../components/features/editor/MarkdownEditor";
import { LayoutContext } from "../context/LayoutContext";

export const HomePage = () => {
  const { setIsHidden, isHidden, setIsExpanded } = useContext(LayoutContext);

  useEffect(() => {
    if (!isHidden) return;
    setIsHidden(false);
    setIsExpanded(true);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-full bg-base-300">
      <MarkdownEditor />
    </div>
  );
};
