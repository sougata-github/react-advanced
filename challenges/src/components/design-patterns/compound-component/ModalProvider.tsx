import React, { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import { useOutsideClick } from "../../../hooks/useOutsideClick";

type ModalContextType = {
  openName: string;
  onOpen: (name: string) => void;
  onClose: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openName, setOpenName] = useState<string>("");

  const onOpen = (name: string) => {
    setOpenName(name);
  };

  const onClose = () => {
    setOpenName("");
  };

  return (
    <ModalContext.Provider value={{ openName, onOpen, onClose }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({
  openName,
  element,
}: {
  element: React.ReactElement<{ onClick: () => void }>;
  openName: string;
}) => {
  const value = useContext(ModalContext);
  if (value === undefined) {
    throw new Error("Cannot use Modal context outside Provider");
  }

  return React.cloneElement(element, {
    onClick: () => value.onOpen(openName),
  });
};

const Window = ({
  opens,
  children,
}: {
  opens: string;
  children: React.ReactNode;
}) => {
  const value = useContext(ModalContext);
  if (value === undefined) {
    throw new Error("Cannot use Modal context outside Provider");
  }

  const { openName, onClose } = value;

  const ref = useOutsideClick<HTMLDivElement>(onClose);

  if (opens.trim() !== openName) return null;

  return createPortal(
    <div className="h-screen w-screen fixed bg-black/5 backdrop-blur-[3px] transition-all z-[1000] top-0 left-0 flex items-center justify-center">
      <div
        ref={ref}
        className="relative bg-white h-[320px] w-full max-w-[400px] flex items-center justify-center rounded-lg transition-all border-[0.5px] border-neutral-200 shadow-md animate-modal"
      >
        <button
          className="bg-transparent border-none p-2 absolute right-[20px] top-[20px]"
          onClick={onClose}
        >
          <X className="size-4" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

ModalProvider.Open = Open;
ModalProvider.Window = Window;

export default ModalProvider;
