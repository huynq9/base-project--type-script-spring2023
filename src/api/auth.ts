import { formAuth } from "../interfaces/auth";
import { instance } from "./instance";

export const signUp = async (data: formAuth) => {
  return await instance.post("/users", data);
};
