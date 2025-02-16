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
    <section className="flex w-screen">
      <div
        style={{
          width: leftWidth,
        }}
      >
        {left}
      </div>
      <div
        style={{
          width: rightWidth,
        }}
      >
        {right}
      </div>
    </section>
  );
};

export default SplitScreen;
