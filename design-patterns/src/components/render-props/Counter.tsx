import { useState } from "react";

const Counter = ({
  render,
}: {
  render: (count: number) => React.ReactNode;
}) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{render(count)}</p>
      <button
        className="mt-2 bg-black/5 rounded-lg p-2 w-fit"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase Count
      </button>
    </div>
  );
};

export default Counter;
