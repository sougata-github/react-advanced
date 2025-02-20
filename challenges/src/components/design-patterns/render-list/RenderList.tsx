import React from "react";

interface Props<T> {
  data: T[];
  resourceName: string;
  dataToRender: React.ComponentType<{ [resourceName: string]: T }>;
}

const RenderList = <T,>({
  data,
  resourceName,
  dataToRender: ItemComponent,
}: Props<T>) => {
  return (
    <div className="product-list">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <ItemComponent {...{ [resourceName]: item }} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default RenderList;
