import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="border p-5 bg-gray-300 rounded-lg cursor-pointer"
      >
        Modal
      </button>
      {show && (
        <section className="fixed left-0 top-0 z-index-10 w-screen h-full overflow-auto bg-black/20 cursor-pointer">
          <div
            className="bg-white mx-[10%] my-auto p-[20px] w-[50%]"
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
          >
            <button
              className="border p-5 bg-gray-300 rounded-lg cursor-pointer"
              onClick={() => setShow(false)}
            >
              Hide Modal
            </button>
            {children}
          </div>
        </section>
      )}
    </>
  );
};

export default Modal;
