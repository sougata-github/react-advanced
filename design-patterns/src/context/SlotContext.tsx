/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import React, { useState } from "react";

type SlotContextType = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const SlotContext = createContext<SlotContextType | undefined>(undefined);

export const SlotProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState<number>(0);

  return (
    <SlotContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </SlotContext.Provider>
  );
};

export function useSlots() {
  const value = useContext(SlotContext);

  if (value === undefined) {
    throw new Error("Context was used outside provider");
  }

  return value;
}
