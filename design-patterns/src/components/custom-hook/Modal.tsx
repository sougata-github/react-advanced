import { X } from "lucide-react";

import { useModal } from "../../hooks/useModal";

interface Props {
  onClose: () => void;
}

const Modal = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/15 h-screen w-screen">
      <div className="bg-white p-[20px] flex items-center justify-center rounded-2xl relative h-[200px] w-[400px] animate-modal">
        <div>
          <h2>Modal Title</h2>
          <p>Modal Content</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 bg-black/5 rounded-lg w-fit cursor-pointer hover:bg-black/10 transition absolute top-5 right-5"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
};

const ModalButton = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className="p-4">
      {isModalOpen ? (
        <Modal onClose={closeModal} />
      ) : (
        <button
          className="py-2 px-4 bg-black/5 rounded-lg w-fit cursor-pointer hover:bg-black/10 transition"
          onClick={openModal}
        >
          Open Modal
        </button>
      )}
    </div>
  );
};

export default ModalButton;
