"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import publicRequest from "@/utils/requestMethod";
import toast from "react-hot-toast";

export default function EmployerRegMain() {
  const steps = [
    {
      id: "Step 1",
      name: "Basic Information",
      fields: [
        "company_name",
        "username",
        "email",
        "phone",
        "password",
        "confirmPassword",
      ],
    },
    {
      id: "Step 2",
      name: "Company Information",
      fields: [
        "company_type",
        "business_category",
        "company_address",
        "company_website",
        "company_size",
        "year_of_establishment",
        "business_desc",
        "company_logo",
        "license_number",
        "license_copy",
      ],
    },
    {
      id: "Step 3",
      name: "Representative",
      fields: [
        "name",
        "designation",
        "employee_mobile",
        "id_card_front",
        "id_card_back",
      ],
    },
  ];

  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields, { shouldFocus: true });

    if (!output) return;
    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  //   Form Related
  const company_types = [
    "Govt./Semi-govt./Autonomous",
    "Educational Organization",
    "Private Firm/Company",
    "NGO/Non-profit Organization",
  ];

  const business_category = [
    "Accounting/Finance",
    "Bank/ Non-Bank Fin. Institution",
    "Supply Chain/ Procurement",
    "Education/Training",
    "Engineer/Architects",
    "Garments/Textile",
    "HR/Org. Development",
    "Gen Mgt/Admin",
    "Design/Creative",
    "Production/Operation",
    "Hospitality/ Travel/ Tourism",
    "Commercial",
    "Beauty Care/ Health & Fitness",
    "IT & Telecommunication",
    "Marketing/Sales",
    "Customer Service/Call Centre",
    "Media/Ad./Event Mgt.",
    "Medical/Pharma",
    "Agro (Plant/Animal/Fisheries)",
    "NGO/Development",
    "Research/Consultancy",
    "Secretary/Receptionist",
    "Data Entry/Operator/BPO",
    "Driving/Motor Technician",
    "Security/Support Service",
    "Law/Legal",
    "Electrician/ Construction/ Repair",
    "Others",
  ];

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
    trigger,
    formState: { errors },
  } = useForm();

  const submitLogin = async (data_RHF) => {
    setLoading(true);
    const user = {
      name: data_RHF.company_name,
      username: data_RHF.username,
      email: data_RHF.email,
      phone:
        data_RHF.phone.length == 11 ? "+88" + data_RHF.phone : data_RHF.phone,
    };

    const formData = new FormData();

    formData.append("user", JSON.stringify(user));
    formData.append("password", data_RHF.password);
    formData.append("confirm_password", data_RHF.confirmPassword);
    formData.append("category", data_RHF.business_category);
    formData.append("company_address", data_RHF.company_address);
    formData.append("company_logo", data_RHF.company_logo[0]);
    formData.append("website_url", data_RHF.company_website);
    formData.append("company_size", data_RHF.company_size);
    formData.append("company_type", data_RHF.company_type);
    formData.append("company_subtype", null);
    formData.append("id_card_front", data_RHF.id_card_front[0]);
    if (data_RHF.id_card_back.length > 0) {
      formData.append("id_card_back", data_RHF.id_card_back[0]);
    }
    formData.append("year_of_eastablishment", data_RHF.year_of_establishment);
    formData.append("business_desc", data_RHF.business_desc);
    formData.append("license_type", "Government");
    formData.append("license_number", data_RHF.license_number);
    formData.append("license_copy", data_RHF.license_copy[0]);
    formData.append("company_owner", null);
    formData.append("representative_name", data_RHF.name);
    formData.append("representative_designation", data_RHF.designation);
    formData.append("representative_mobile", data_RHF.employee_mobile);
    formData.append("representative_email", null);
    formData.append("employee_address", null);

    try {
      const response = await publicRequest.post(
        "/auth/employee/register/",
        formData
      );

      if (response.status === 201) {
        toast.success("Registration Successful! Please, log in.");
        router.push(`/employer/signin`);
      }

      // cookies.set("token", response.data);

      console.log(response);
    } catch (error) {
      console.log(error);
      error?.response?.data?.Error.map((err) => toast.error(err));
    } finally {
      setLoading(false);
    }
  };

  console.log(errors);

  return (
    <section className="my-10 p-4 max-w-5xl mx-auto">
      {/* Steps */}
      <nav
        aria-label="Progress"
        className="bg-neutral-100 p-6 md:bg-white md:px-0"
      >
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <form onSubmit={handleSubmit(submitLogin)} className="mt-10">
        {currentStep === 0 && (
          <>
            <div className="mb-10">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Basic Company Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide basic information about the company.
              </p>
            </div>

            <div className="max-w-xl">
              <div>
                <label className="text-sm mb-2 block">Company Name</label>
                <input
                  {...register("company_name", { required: true })}
                  type="text"
                  className={`input-basic ${
                    errors?.company_name && "focus:outline-red-600"
                  }`}
                  placeholder="Example Company Ltd."
                />
              </div>

              <div>
                <label className="text-sm mb-2 block mt-6">
                  Company Username
                  <span className="text-sky-600 font-light">
                    {" "}
                    (4-12 characters)
                  </span>
                </label>
                <input
                  {...register("username", {
                    required: "Username is Required",
                    minLength: {
                      value: 4,
                      message: "**Username must be more than 4 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "**Username must be less than 12 characters",
                    },
                  })}
                  type="text"
                  className={`input-basic ${
                    errors?.username && "focus:outline-red-600"
                  }`}
                  placeholder="examplelimited"
                />
                <p className="text-sm text-red-600">
                  {errors?.username?.message}
                </p>
              </div>

              <div>
                <label className="text-sm mb-2 block mt-6">
                  Company email address
                </label>
                <input
                  {...register("email", { required: "Email is Required" })}
                  type="email"
                  className={`input-basic ${
                    errors?.email && "focus:outline-red-600"
                  }`}
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block mt-6">Mobile Number</label>
                <input
                  {...register("phone", { required: true })}
                  type="text"
                  className={`input-basic ${
                    errors?.phone && "focus:outline-red-600"
                  }`}
                  placeholder="+1234567890"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block mt-6">
                  Your password{" "}
                  <span className="text-sky-600 font-light">
                    {" "}
                    (8 characters minimum)
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is Required",
                    minLength: {
                      value: 8,
                      message: "** Password must be more than 8 characters",
                    },
                  })}
                  type="password"
                  className={`input-basic ${
                    errors?.password && "focus:outline-red-600"
                  }`}
                  placeholder="••••••••"
                />
                <p className="text-sm text-red-600 text-right">
                  {errors?.password?.message}
                </p>
              </div>

              <div>
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
                <p className="text-sm text-red-600 text-right">
                  {errors?.confirmPassword?.message}
                </p>
              </div>
            </div>

            <div className="my-10">
              <span>Already have an account?</span>
              <Link
                href={"/employer/signin"}
                className="ml-2 text-sm text-blue-800"
              >
                Login
              </Link>
            </div>
          </>
        )}

        {currentStep === 1 && (
          <>
            <div className="my-10">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Company Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide company details.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-14 gap-y-8">
              <div>
                <label className="text-sm mb-2 block">Company Type</label>
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
              </div>

              {/* Company Sub types to be added */}
              <div>
                <label className="text-sm mb-2 block">Business Category</label>
                <select
                  {...register("business_category", { required: true })}
                  type="text"
                  className={`input-basic ${
                    errors?.business_category && "focus:outline-red-600"
                  }`}
                >
                  {business_category.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm mb-2 block">Company Address</label>
                <textarea
                  rows={2}
                  {...register("company_address", { required: true })}
                  type="text"
                  className={`input-basic ${
                    errors?.company_address && "focus:outline-red-600"
                  }`}
                  placeholder="123 Main St, Cityville"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block">Company Website</label>
                <input
                  {...register("company_website")}
                  type="text"
                  className={`input-basic ${
                    errors?.company_website && "focus:outline-red-600"
                  }`}
                  placeholder="www.example-company.com"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block">Company Size</label>
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
              </div>

              <div>
                <label className="text-sm mb-2 block">
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
              </div>

              <div>
                <label className="text-sm mb-2 block">
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
              </div>

              <div>
                <label className="text-sm mb-2 block">
                  Company Logo
                  <span className="text-sky-600 font-light"> (300x300px)</span>
                </label>
                <div
                  className={
                    errors?.company_logo &&
                    "border-2 border-red-600 p-0.5 rounded-md"
                  }
                >
                  <Input
                    {...register("company_logo", { required: true })}
                    type="file"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm mb-2 block">License Number</label>
                <input
                  {...register("license_number", { required: true })}
                  type="text"
                  className={`input-basic ${
                    errors?.license_number && "focus:outline-red-600"
                  }`}
                  placeholder="BGD-LC-1111-2222"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block">
                  License / Registration copy{" "}
                  <span className="text-sky-600 font-light"> (Image/PDF)</span>
                </label>
                <div
                  className={
                    errors?.license_copy &&
                    "border-2 border-red-600 p-0.5 rounded-md"
                  }
                >
                  <Input
                    {...register("license_copy", { required: true })}
                    type="file"
                    className={`input-basic ${
                      errors?.license_copy && "focus:outline-red-600"
                    }`}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="mb-10">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Represenative Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide your details as a company represenative.
              </p>
            </div>
            <div className="max-w-xl">
              <div>
                <label className="text-sm mb-2 block">
                  Name of the Representative
                </label>
                <input
                  {...register("name", { required: "Name is Required" })}
                  type="text"
                  className={`input-basic ${
                    errors?.name && "focus:outline-red-600"
                  }`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block mt-6">Designation</label>
                <input
                  {...register("designation", { required: true })}
                  type="text"
                  className={`input-basic ${
                    errors?.designation && "focus:outline-red-600"
                  }`}
                  placeholder="CEO/ Executive/ CTO"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block mt-6">Mobile Number</label>
                <input
                  {...register("employee_mobile", { required: true })}
                  type="text"
                  className={`input-basic ${
                    errors?.employee_mobile && "focus:outline-red-600"
                  }`}
                  placeholder="+1234567890"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block mt-6">
                  ID/ Business Card (Front Side)
                </label>
                <div
                  className={
                    errors?.id_card_front &&
                    "border-2 border-red-600 p-0.5 rounded-md"
                  }
                >
                  <Input
                    {...register("id_card_front", { required: true })}
                    type="file"
                    className={`input-basic ${
                      errors?.id_card_front && "focus:outline-red-600"
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm mb-2 block mt-6">
                  ID/ Business Card (Back Side)
                </label>
                <div
                  className={
                    errors?.id_card_back &&
                    "border-2 border-red-600 p-0.5 rounded-md"
                  }
                >
                  <Input
                    {...register("id_card_back")}
                    type="file"
                    className={`input-basic ${
                      errors?.id_card_back && "focus:outline-red-600"
                    }`}
                  />
                </div>
              </div>
            </div>

            <div>
              <Button className={"max-w-4xl mt-16"} size={"lg"}>
                <span className="text-base !font-normal">
                  {loading ? "Please wait..." : "Register your account"}
                </span>
              </Button>
            </div>

            <div className="my-4">
              <span>Already have an account?</span>
              <Link
                href={"/employer/signin"}
                className="ml-2 text-sm text-blue-800"
              >
                Login
              </Link>
            </div>
          </>
        )}
      </form>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
