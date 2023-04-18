import { SubmitHandler, useForm } from "react-hook-form";
import { formData, IProducts, schemaProduct } from "../interfaces/products";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProduct, updateProduct, getOne } from "../api/products";
import { useParams, useNavigate } from "react-router-dom";

export const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: yupResolver(schemaProduct),
    defaultValues: async () => {
      if (id) {
        return await fetchProduct(id);
      }
    },
  });
  const fetchProduct = async (id: string) => {
    const { data } = await getOne(id);
    return data;
  };
  const buttonSubmit: SubmitHandler<formData> = async (data) => {
    if (id) {
      await updateProduct(id, data);
      alert("Product update");
      navigate("/admin");
    }
  };
  return (
    <form
      action=""
      className="form-group"
      onSubmit={handleSubmit(buttonSubmit)}
    >
      <label htmlFor="" className="form-control">
        Name
      </label>
      <input
        type="text"
        {...register("name")}
        className="form-control"
        placeholder="Name"
      />
      <span className="form-control text-red-400">
        {errors.name && errors.name.message}
      </span>
      <label htmlFor="" className="form-control">
        price
      </label>
      <input
        type="number"
        {...register("price")}
        className="form-control"
        placeholder="Price"
      />
      <span className="form-control text-red-400">
        {errors.price && errors.price.message}
      </span>
      <label htmlFor="" className="form-control">
        des
      </label>
      <input
        type="text"
        {...register("des")}
        className="form-control"
        placeholder="Des"
      />
      <span className="form-control text-red-400">
        {errors.des && errors.des.message}
      </span>
      <button className="btn btn-danger">add</button>
    </form>
  );
};
