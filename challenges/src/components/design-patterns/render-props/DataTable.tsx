//resuable table component
import { Column } from "../../../types";

interface Props<T> {
  data: T[];
  columns: Column<T>[];
}

const DataTable = <T,>({ data, columns }: Props<T>) => {
  return (
    <table className="min-w-full overflow-x-auto border border-black/20">
      <thead className="border-t border-black/20">
        <tr className="p-2 border-b border-black/20">
          {columns.map((col) => (
            <th
              key={col.key as string}
              className="font-medium border-r border-black/20"
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: T) => (
          <tr>
            {columns.map((col) => (
              <td
                key={col.key as string}
                className="border-b border-r border-black/20 p-2"
              >
                {col.render
                  ? col.render(row[col.key])
                  : (row[col.key] as React.ReactNode)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
