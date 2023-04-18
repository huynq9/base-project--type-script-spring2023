import { useForm } from "react-hook-form";
import { formData, IProducts, schemaProduct } from "../interfaces/products";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProduct } from "../api/products";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: yupResolver(schemaProduct) });
  const buttonSubmit = async (data: formData) => {
    await addProduct(data);
    alert("Product added");
    navigate("/admin");
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
