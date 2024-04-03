"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import publicRequest from "@/utils/requestMethod";
import toast from "react-hot-toast";

export default function EmployerRegistrationForm({ type }) {
  const company_types = [
    "Education/Training",
    "Private",
    "Government/Half-Government",
    "NGO",
  ];
  const license_types = ["Private", "Government"];
  const company_size = [
    "1-50",
    "51-100",
    "101-200",
    "201-500",
    "501-1000",
    "1001-2000",
    "2001-5000",
    "5000+",
  ];

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
      company_type: formData.company_type,
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
    <div className="max-w-4xl border mx-auto my-14 p-4 rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-xl font-semibold ">Sign up to our platform</h2>
        <h4 className="mt-2">Find best employee for your company</h4>
      </div>

      <form
        onSubmit={handleSubmit(submitLogin)}
        className="grid md:grid-cols-2 gap-4 mt-10"
      >
        {/* Personal Info */}
        <div className="border p-4 rounded-lg h-fit lg:min-w-[400px]">
          <label className="font-medium mb-6 block border-b">
            Personal Information
          </label>

          <label className="text-sm mb-2 block">Your Name</label>
          <input
            {...register("name", { required: "Name is Required" })}
            type="text"
            className={`input-basic ${errors?.name && "focus:outline-red-600"}`}
            placeholder="John Doe"
          />

          <label className="text-sm mb-2 block mt-6">Username</label>
          <input
            {...register("username", { required: "Username is Required" })}
            type="text"
            className={`input-basic ${
              errors?.username && "focus:outline-red-600"
            }`}
            placeholder="johndoe"
          />

          <label className="text-sm mb-2 block mt-6">Your email</label>
          <input
            {...register("email", { required: "Email is Required" })}
            type="email"
            className={`input-basic ${
              errors?.email && "focus:outline-red-600"
            }`}
            placeholder="name@company.com"
          />

          <label className="text-sm mb-2 block mt-6">Mobile Number</label>
          <input
            {...register("employee_mobile", { required: true })}
            type="text"
            className={`input-basic ${
              errors?.employee_mobile && "focus:outline-red-600"
            }`}
            placeholder="+1234567890"
          />

          <label className="text-sm mb-2 block mt-6">Adress</label>
          <textarea
            rows={2}
            {...register("employee_address", { required: true })}
            type="text"
            className={`input-basic ${
              errors?.employee_address && "focus:outline-red-600"
            }`}
            placeholder="456 Oak St, Townsville"
          />

          <label className="text-sm mb-2 block mt-6">Your password</label>
          <input
            {...register("password", { required: "Password is Required" })}
            type="password"
            className={`input-basic ${
              errors?.password && "focus:outline-red-600"
            }`}
            placeholder="••••••••"
          />

          <label className="text-sm mb-2 block mt-6">
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
        </div>

        {/* Company Info */}
        <div className="border p-4 rounded-lg">
          <label className="font-medium mb-6 block border-b">
            Company Information
          </label>

          <label className="text-sm mb-2 block">Company Name</label>
          <input
            {...register("company_name", { required: true })}
            type="text"
            className={`input-basic ${
              errors?.company_name && "focus:outline-red-600"
            }`}
            placeholder="Example Company Ltd."
          />

          <label className="text-sm mb-2 block mt-6">Company Type</label>
          <select
            {...register("company_type", { required: true })}
            type="text"
            className={`input-basic ${
              errors?.company_type && "focus:outline-red-600"
            }`}
          >
            {company_types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <label className="text-sm mb-2 block mt-6">Company Address</label>
          <textarea
            rows={2}
            {...register("company_address", { required: true })}
            type="text"
            className={`input-basic ${
              errors?.company_address && "focus:outline-red-600"
            }`}
            placeholder="123 Main St, Cityville"
          />

          <label className="text-sm mb-2 block mt-6">Company Website</label>
          <input
            {...register("company_website", { required: true })}
            type="text"
            className={`input-basic ${
              errors?.company_website && "focus:outline-red-600"
            }`}
            placeholder="www.example-company.com"
          />

          <label className="text-sm mb-2 block mt-6">Company Owner</label>
          <input
            {...register("company_owner", { required: true })}
            type="text"
            className={`input-basic ${
              errors?.company_owner && "focus:outline-red-600"
            }`}
            placeholder="John Doe"
          />

          <label className="text-sm mb-2 block mt-6">Company Size</label>
          <select
            {...register("company_size", { required: true })}
            type="text"
            className={`input-basic ${
              errors?.company_size && "focus:outline-red-600"
            }`}
          >
            {company_size.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          <label className="text-sm mb-2 block mt-6">
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

          <label className="text-sm mb-2 block mt-6">
            Business Description
          </label>
          <textarea
            rows={2}
            {...register("business_desc", { required: true })}
            type="text"
            className={`input-basic ${
              errors?.business_desc && "focus:outline-red-600"
            }`}
            placeholder="About your business"
          />

          <label className="text-sm mb-2 block mt-6">License Type</label>
          <select
            {...register("license_type", { required: true })}
            type="text"
            className={`input-basic ${
              errors?.license_type && "focus:outline-red-600"
            }`}
          >
            {license_types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <label className="text-sm mb-2 block mt-6">License Number</label>
          <input
            {...register("license_number", { required: true })}
            type="text"
            className={`input-basic ${
              errors?.license_number && "focus:outline-red-600"
            }`}
            placeholder="BGD-2020-1010110"
          />

          <label className="text-sm mb-2 block mt-6">Designation</label>
          <input
            {...register("designation", { required: true })}
            type="text"
            className={`input-basic ${
              errors?.designation && "focus:outline-red-600"
            }`}
            placeholder="CEO, CTO, Executive"
          />
        </div>

        <div className="md:col-span-2">
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

          <Button className={"w-full mt-8"}>
            <span className="text-base !font-normal">
              Register your account
            </span>
          </Button>
        </div>
      </form>

      <div className="text-center my-6">
        <span>Already have an account?</span>
        <Link
          href={
            type == "job-seeker" ? "/job-seeker/signin" : "/employer/signin"
          }
          className="ml-2 text-sm text-blue-800"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
