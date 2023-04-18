import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signUp } from "../api/auth";
import {
  authSchema,
  authSchema2,
  formAuth,
  formAuth2,
} from "../interfaces/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formAuth2>({
    resolver: yupResolver(authSchema2),
  });
  const buttonSubmit = async (data: formAuth2) => {
    const check = await axios.get(
      `http://localhost:3000/users?email=${data.email}&password=${data.password}`
    );
    console.log(data);
    if (check.data.length === 0) {
      return alert("sai tai khoan hoac mat khau");
    }

    alert("Sign In Success");
    navigate("/");
  };
  return (
    <form
      action=""
      className="form-group"
      onSubmit={handleSubmit(buttonSubmit)}
    >
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
