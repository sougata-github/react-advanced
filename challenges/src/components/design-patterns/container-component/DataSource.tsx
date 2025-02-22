import React, { useEffect, useState } from "react";

//array of products
type getDataReturnType<T> = T[] | null;

interface Props<T> {
  getData?: () => Promise<T[]>;
  resourceName: string;
  children: React.ReactNode;
}

const DataSource = <T,>({ getData, resourceName, children }: Props<T>) => {
  const [state, setState] = useState<getDataReturnType<T>>();

  useEffect(() => {
    (async () => {
      if (getData) {
        getData().then(setState).catch(console.error);
      }
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<Props<T>>(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};

export default DataSource;
