import { formData, IProducts } from "../interfaces/products";
import { instance } from "./instance";
export const getAll = async () => {
  return await instance.get("/products");
};
export const deleteProduct = async (id: string) => {
  return await instance.delete(`/products/${id}`);
};
export const updateProduct = async (id: string, data: formData) => {
  return await instance.put(`/products/${id}`, data);
};
export const addProduct = async (data: formData) => {
  return await instance.post("/products", data);
};
export const getOne = async (id: string) => {
  return await instance.get("/products/" + id);
};
