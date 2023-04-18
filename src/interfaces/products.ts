import * as Yup from "yup";
export interface IProducts {
  id: string;
  name: string;
  price: number;
  des: string;
}
export const schemaProduct = Yup.object({
  name: Yup.string().required(),
  price: Yup.number().required(),
  des: Yup.string().required(),
});

export type formData = Yup.InferType<typeof schemaProduct>;
