export const DeleteNoteModal = () => {
  return (
    <dialog id="deleteNoteModal" className="modal modal-middle">
      <div className="modal-box max-w-fit">
        <h3 className="font-semibold text-lg">
          Are you sure you want to delete this note?
        </h3>
        <div className="modal-action flex justify-center">
          <form method="dialog" className="flex gap-5">
            <button className="btn btn-soft">Cancel</button>
            <button className="btn btn-soft btn-error">Delete</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
