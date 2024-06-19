import React from "react";
import TextInput from "../componenets/textFiled";
import { useForm } from "react-hook-form";
import Button from "../componenets/button";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="max-w-md w-full bg-white px-8 dark:bg-black/20 shadow-md rounded pt-6 pb-8">
        <h1 className="text-2xl mb-6 dark:text-white font-semibold">Login</h1>

        <form
          className="flex flex-col gap-y-4"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <TextInput
            label="Email Address"
            type="email"
            name="email"
            placeholder="Email Address"
            register={register("email", { required: "Email is required" })}
            error={errors.email && errors.email.message}
          />
          <TextInput
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
            register={register("password", { required: "Email is required" })}
            error={errors.password && errors.password.message}
          />
          <Button
            label="Login"
            type="submit"
            className="bg-violet-800 w-full text-white"
          />

          <p className="text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <Link to="/register" className=" text-violet-800">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
