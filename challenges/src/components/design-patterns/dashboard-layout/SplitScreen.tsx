import React from "react";

interface Props {
  children: React.ReactNode;
  leftWeight: number;
  rightWeight: number;
}

const SplitScreen = ({ children, leftWeight, rightWeight }: Props) => {
  const childArray = React.Children.toArray(children);
  const [left, right] = childArray;

  const leftWidth = `${leftWeight}rem`;
  const rightWidth = `${rightWeight}rem`;

  return (
    <main className="flex flex-1">
      <div style={{ width: leftWidth }}>{left}</div>
      <div style={{ width: rightWidth }} className="p-4">
        {right}
      </div>
    </main>
  );
};

export default SplitScreen;
