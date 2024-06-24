import React, { useState } from "react";
import TextInput from "../componenets/textFiled";
import { useForm } from "react-hook-form";
import Button from "../componenets/button";
import { Link, useNavigate } from "react-router-dom";
import api from "../libs/apiCalls";
import { toast } from "sonner";
import Loading from "../componenets/loading";
import useStore from "../store";

const Login = () => {
  const { user, setCredentials } = useStore((state) => state);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/auth/login", data);

      if (response?.data?.status === "success") {
        const user = { ...response.data.user, token: response.data.token };

        localStorage.setItem("user", JSON.stringify(user));

        setCredentials(user);
        toast.success("Login successful.");
        navigate("/");
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
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
          {loading ? (
            <Loading />
          ) : (
            <>
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
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
