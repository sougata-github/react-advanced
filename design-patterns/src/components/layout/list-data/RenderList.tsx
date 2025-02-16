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
    <div>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {/* spread all the props and add resourcename */}
          <ItemComponent {...{ [resourceName]: item }} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default RenderList;
