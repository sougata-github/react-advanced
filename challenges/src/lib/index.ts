import axios from "axios";

export const getProductsData = async <T>(url: string): Promise<T[]> => {
  const response = await axios.get(url);
  return response?.data;
};
