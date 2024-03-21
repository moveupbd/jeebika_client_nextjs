"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import publicRequest from "@/utils/requestMethod";
import toast from "react-hot-toast";

export default function EmployerRegistrationForm({ type }) {
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
      company_name: formData.company_name,
      industry_type: formData.industry_type,
      license_type: formData.license_type,
      employee_designation: formData.designation,

      company_address: formData.company_address,
      website_url: formData.company_website,
      year_of_establishment: formData.year_of_establishment,
      license_number: formData.license_number,
      company_owner: formData.company_owner,

      employee_mobile: formData.employee_mobile,
      employee_address: formData.employee_address,
      company_size: formData.company_size,
      business_desc: formData.business_desc,
    };
    console.log(data);
    try {
      const response = await publicRequest.post(
        "/auth/employee/register/",
        data
      );

      if (response.status === 201) {
        toast.success("Registration Successful! Please, log in.");
        router.push(`/employer/signin`);
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
        <h4 className="mt-2">Find best employee for your company</h4>
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

        <label className="font-medium mb-2 block mt-6">Mobile Number</label>
        <input
          {...register("employee_mobile", { required: true })}
          type="text"
          className={`input-basic ${
            errors?.employee_mobile && "focus:outline-red-600"
          }`}
          placeholder="+1234567890"
        />

        <label className="font-medium mb-2 block mt-6">Adress</label>
        <input
          {...register("employee_address", { required: true })}
          type="text"
          className={`input-basic ${
            errors?.employee_address && "focus:outline-red-600"
          }`}
          placeholder="456 Oak St, Townsville"
        />

        <label className="font-medium mb-2 block mt-6">Company Name</label>
        <input
          {...register("company_name", { required: true })}
          type="text"
          className={`input-basic ${
            errors?.company_name && "focus:outline-red-600"
          }`}
          placeholder="Example Company Ltd."
        />

        <label className="font-medium mb-2 block mt-6">Industry Type</label>
        <input
          {...register("industry_type", { required: true })}
          type="text"
          className={`input-basic ${
            errors?.industry_type && "focus:outline-red-600"
          }`}
          placeholder="1"
        />

        <label className="font-medium mb-2 block mt-6">Company Address</label>
        <input
          {...register("company_address", { required: true })}
          type="text"
          className={`input-basic ${
            errors?.company_address && "focus:outline-red-600"
          }`}
          placeholder="123 Main St, Cityville"
        />

        <label className="font-medium mb-2 block mt-6">Company Website</label>
        <input
          {...register("company_website", { required: true })}
          type="text"
          className={`input-basic ${
            errors?.company_website && "focus:outline-red-600"
          }`}
          placeholder="www.example-company.com"
        />

        <label className="font-medium mb-2 block mt-6">Company Owner</label>
        <input
          {...register("company_owner", { required: true })}
          type="text"
          className={`input-basic ${
            errors?.company_owner && "focus:outline-red-600"
          }`}
          placeholder="John Doe"
        />

        <label className="font-medium mb-2 block mt-6">Company Size</label>
        <input
          {...register("company_size", { required: true })}
          type="text"
          className={`input-basic ${
            errors?.company_size && "focus:outline-red-600"
          }`}
          placeholder="1-10"
        />

        <label className="font-medium mb-2 block mt-6">
          Company Year Of Establishment
        </label>
        <input
          {...register("year_of_establishment", { required: true })}
          type="text"
          className={`input-basic ${
            errors?.year_of_establishment && "focus:outline-red-600"
          }`}
          placeholder="2005"
        />

        <label className="font-medium mb-2 block mt-6">
          Business Description
        </label>
        <input
          {...register("business_desc", { required: true })}
          type="text"
          className={`input-basic ${
            errors?.business_desc && "focus:outline-red-600"
          }`}
          placeholder="About your business"
        />

        <label className="font-medium mb-2 block mt-6">License Type</label>
        <input
          {...register("license_type", { required: true })}
          type="text"
          className={`input-basic ${
            errors?.license_type && "focus:outline-red-600"
          }`}
          placeholder="License Type"
        />

        <label className="font-medium mb-2 block mt-6">License Number</label>
        <input
          {...register("license_number", { required: true })}
          type="text"
          className={`input-basic ${
            errors?.license_number && "focus:outline-red-600"
          }`}
          placeholder="1"
        />

        <label className="font-medium mb-2 block mt-6">Designation</label>
        <input
          {...register("designation", { required: true })}
          type="text"
          className={`input-basic ${
            errors?.designation && "focus:outline-red-600"
          }`}
          placeholder="CEO, CTO, Executive"
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
