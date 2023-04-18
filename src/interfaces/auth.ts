import * as Yup from "yup";
export const authSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

export type formAuth = Yup.InferType<typeof authSchema>;

export const authSchema2 = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

export type formAuth2 = Yup.InferType<typeof authSchema2>;
