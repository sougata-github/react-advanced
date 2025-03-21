import { useState } from "react";

type positionType = {
  x: number;
  y: number;
};

interface Props {
  render: (position: positionType) => React.ReactNode;
}

const MouseTracker = ({ render }: Props) => {
  const [position, setPosition] = useState<positionType>({ x: 10, y: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: "100vh",
      }}
    >
      {render(position)}
    </div>
  );
};

export default MouseTracker;
