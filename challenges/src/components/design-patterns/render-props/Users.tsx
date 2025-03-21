import { useEffect, useState } from "react";

import { COLUMNS } from "../../../data";
import { User } from "../../../types";
import DataTable from "./DataTable";

const Users = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (url: string) => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response?.statusText);

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        setError((error as Error).message || "Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData("https://jsonplaceholder.typicode.com/users");
  }, []);

  if (!users || isLoading)
    return (
      <div className="p-20 max-w-4xl mx-auto overflow-x-auto">
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="p-20 max-w-4xl mx-auto overflow-x-auto">
        <p>{error}</p>;
      </div>
    );

  return (
    <div className="p-20 max-w-4xl mx-auto overflow-x-auto">
      <DataTable data={users} columns={COLUMNS} />
    </div>
  );
};

export default Users;
