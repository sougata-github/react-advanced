import { useState } from "react";

import { usePrevious } from "../../../hooks/usePrevious";
import { useDebounce } from "../../../hooks/useDebounce";

const DebouncedInput = () => {
  const [name, setName] = useState<string>("");

  const debouncedValue = useDebounce<string>(name, 4000);

  const previousValue = usePrevious<string>(name);

  return (
    <div className="p-10 flex flex-col gap-4 max-w-xl">
      <input
        className="bg-black/5 p-2 rounded-lg"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      {debouncedValue && <p>Debounced Value: {debouncedValue}</p>}
      {previousValue && <p>Previous Value: {previousValue}</p>}
    </div>
  );
};

export default DebouncedInput;
