import { MarkdownEditor } from "../components/features/editor/MarkdownEditor";

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full min-h-full bg-base-300">
      <MarkdownEditor />
    </div>
  );
};
