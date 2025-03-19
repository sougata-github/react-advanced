import ModalProvider from "./ModalProvider";

const Modal = () => {
  return (
    <div className="p-20">
      <ModalProvider>
        <ModalProvider.Open
          openName="modal"
          element={
            <button className="rounded-lg px-4 py-2 w-fit bg-black/10">
              Open
            </button>
          }
        />
        <ModalProvider.Window opens="modal">Modal Content</ModalProvider.Window>
      </ModalProvider>
    </div>
  );
};

export default Modal;
