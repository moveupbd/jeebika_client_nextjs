"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import publicRequest from "@/utils/requestMethod";
import toast from "react-hot-toast";

export default function RegistrationForm({ type }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitLogin = async (formData) => {
    const data = {
      user: {
        name: formData.name,
        username: formData.username,
        email: formData.email,
      },
      password: formData.password,
      confirm_password: formData.confirmPassword,
    };
    console.log(data);
    try {
      const response = await publicRequest.post(
        "/auth/applicant/register/",
        data
      );

      if (response.status === 201) {
        toast.success("Registration Successful! Please, log in.");
        router.push(`/job-seeker/signin`);
      }

      // cookies.set("token", response.data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md border mx-auto mt-14 p-10 rounded-lg shadow-lg space-y-10">
      <div className="text-center">
        <h2 className="text-xl font-semibold ">Sign up to our platform</h2>
        <h4 className="mt-2">
          {type == "job-seeker"
            ? "Start Explore 1000+ jobs"
            : "Find best employee for your company"}
        </h4>
      </div>

      <form onSubmit={handleSubmit(submitLogin)}>
        <label className="font-medium mb-2 block">Your Name</label>
        <input
          {...register("name", { required: "Name is Required" })}
          type="text"
          className={`input-basic ${errors?.name && "focus:outline-red-600"}`}
          placeholder="John Doe"
        />

        <label className="font-medium mb-2 block mt-6">Username</label>
        <input
          {...register("username", { required: "Username is Required" })}
          type="text"
          className={`input-basic ${
            errors?.username && "focus:outline-red-600"
          }`}
          placeholder="johndoe"
        />

        <label className="font-medium mb-2 block mt-6">Your email</label>
        <input
          {...register("email", { required: "Email is Required" })}
          type="email"
          className={`input-basic ${errors?.email && "focus:outline-red-600"}`}
          placeholder="name@company.com"
        />

        <label className="font-medium mb-2 block mt-6">Your password</label>
        <input
          {...register("password", { required: "Password is Required" })}
          type="password"
          className={`input-basic ${
            errors?.password && "focus:outline-red-600"
          }`}
          placeholder="••••••••"
        />

        <label className="font-medium mb-2 block mt-6">
          Confirm your password
        </label>
        <input
          {...register("confirmPassword", {
            required: true,
            validate: (val) => {
              if (watch("password") != val) {
                return "Your passwords do no match";
              }
            },
          })}
          type="password"
          className={`input-basic ${
            errors?.confirmPassword && "focus:outline-red-600"
          }`}
          placeholder="••••••••"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <Button className={"w-full mt-8"}>
          <span className="text-base !font-normal">Register your account</span>
        </Button>
      </form>

      <div>
        <span>Already have an account?</span>
        <Link
          href={
            type == "job-seeker" ? "/job-seeker/signin" : "/employer/signin"
          }
          className="ml-2 font-medium text-blue-800"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
