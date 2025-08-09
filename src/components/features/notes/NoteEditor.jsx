export const NoteEditor = () => {
  // https://daisyui.com/components/loading/
  return (
    <div className="min-h-screen flex flex-col p-10">
      <input
        type="text"
        className="input input-ghost input-xl w-full h-32 p-10 text-5xl font-semibold focus:bg-base-200 focus:outline-none"
      />
      <textarea
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
        placeholder="Start typing here..."
        className="textarea textarea-xl textarea-ghost resize-none overflow-hidden w-full leading-relaxed p-10 pt-5 focus:bg-base-300 focus:outline-none min-h-[calc(100vh - 268px)]"
      />
    </div>
  );
};
