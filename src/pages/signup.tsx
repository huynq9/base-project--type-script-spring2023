import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signUp } from "../api/auth";
import { authSchema, formAuth } from "../interfaces/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formAuth>({
    resolver: yupResolver(authSchema),
  });
  const buttonSubmit = async (data: formAuth) => {
    const check = await axios.get(
      `http://localhost:3000/users?email=${data.email}`
    );
    console.log(data);

    if (check.data.length > 0) {
      return alert("email has already been");
    }
    await signUp(data);
    alert("Sign Up Success");
    navigate("/signin");
  };
  return (
    <form
      action=""
      className="form-group"
      onSubmit={handleSubmit(buttonSubmit)}
    >
      <label htmlFor="" className="form-label">
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
      <label htmlFor="" className="form-label">
        email
      </label>
      <input
        type="email"
        {...register("email")}
        className="form-control"
        placeholder="Price"
      />
      <span className="form-control text-red-400">
        {errors.email && errors.email.message}
      </span>
      <label htmlFor="" className="form-label">
        password
      </label>
      <input
        type="password"
        {...register("password")}
        className="form-control"
        placeholder="Des"
      />
      <span className="form-control text-red-400">
        {errors.password && errors.password.message}
      </span>

      <button className="btn btn-danger">add</button>
    </form>
  );
};
