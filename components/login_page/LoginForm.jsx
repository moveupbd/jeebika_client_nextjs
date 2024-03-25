"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { loginRequest } from "@/utils/requestMethod";
import { useDispatch } from "react-redux";
import { login } from "@/app/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
// import { cookies } from "next/headers";

export default function LoginForm({ type }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const dispatch = useDispatch();

  const submitLogin = async (formData) => {
    try {
      setLoading(true);
      let url =
        type === "employer"
          ? "/auth/employee/login/"
          : "/auth/applicant/login/";
      const response = await loginRequest.post(url, formData);

      if (response.status === 201) {
        dispatch(login(response.data));
        router.push("/");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md border mx-auto mt-14 p-10 rounded-lg shadow-lg space-y-10">
      <div className="text-center">
        <h2 className="text-xl font-semibold ">Sign in to our platform</h2>
        <h4 className="mt-2">
          {type == "job-seeker"
            ? "Start Explore 1000+ jobs"
            : "Find best employee for your company"}
        </h4>
      </div>

      <form className="" onSubmit={handleSubmit(submitLogin)}>
        <label className="font-medium mb-2 block">Your email</label>
        <input
          {...register("email", { required: "Email is Required" })}
          type="email"
          className={`input-basic ${errors?.email && "focus:outline-red-600"}`}
          placeholder="name@company.com"
          name="email"
        />

        <label className="font-medium mb-2 block mt-6">Your password</label>
        <input
          {...register("password", { required: "Password is Required" })}
          type="password"
          className={`input-basic ${
            errors?.password && "focus:outline-red-600"
          }`}
          placeholder="••••••••"
          name="password"
        />

        <div className="flex items-center justify-between my-6">
          <div className="flex items-center">
            <input type="checkbox" className="w-6 h-4" />
            <span className="font-medium">Remember me</span>
          </div>

          <Link href={"/"} className="text-blue-800">
            Lost Password?
          </Link>
        </div>

        {error && (
          <p className="text-red-600 mb-4 font-semibold">
            {error.response.data.detail || error.message}
          </p>
        )}

        <Button className={"w-full"}>
          <span className="text-base !font-normal">
            {loading ? "Please wait..." : "Login to your account"}
          </span>
        </Button>
      </form>
      <div>
        <span>Not Registered?</span>
        <Link
          href={
            type == "job-seeker" ? "/job-seeker/signup" : "/employer/signup"
          }
          className="ml-2 font-medium text-blue-800"
        >
          Create account
        </Link>
      </div>
    </div>
  );
}
