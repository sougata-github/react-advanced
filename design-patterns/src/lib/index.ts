import axios from "axios";

export const getServerData = async <T>(url: string): Promise<T> => {
  const response = await axios.get(url);
  return response.data;
};
