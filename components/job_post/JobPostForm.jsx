"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import useApi from "@/hooks/useApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function JobPostForm() {
  const autoSelectedField = [
    {
      label: "Company Name",
      type: "text",
      key: "company_name",
    },
    {
      label: "Type of Company",
      type: "text",
      key: "company_type",
    },
  ];

  const jobPostFields = [
    {
      label: "Job Position",
      type: "text",
      key: "job_designation",
    },
    {
      label: "Department",
      type: "text",
      key: "department",
    },
    {
      label: "Vacancy",
      type: "number",
      key: "vacancy",
    },
  ];

  const jobPostTextArea = [
    {
      label: "Job Description",
      type: "text",
      key: "job_description",
    },
    {
      label: "Responsibilities",
      type: "text",
      key: "responsibilities",
    },
    {
      label: "Required Skills",
      type: "text",
      key: "skill",
    },
    {
      label: "Expertise",
      type: "text",
      key: "expertise",
    },
  ];

  const jobCategories = [
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

  const experience_options = [
    "No Experience Required",
    "1-2 Years",
    "2-5 Years",
    "5-10 Years",
    "10-15 Years",
    "15-20 Years",
    "20-25 Years",
    "25-30 Years",
  ];

  const locations = [
    "Anywhere in Bangladesh",
    "Dhaka",
    "Chattagram",
    "Rajshahi",
    "Khulna",
    "Sylhet",
    "Rangpur",
    "Cumilla",
    "Mymensing",
    "Faridpur",
    "Cox’s Bazar",
    "Remote (Off-site)",
  ];

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [procedure, setProcedure] = useState(null);

  const { authRequest } = useApi();
  const router = useRouter();

  const { userData } = useSelector((state) => state.auth);

  console.log(userData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (formData) => {
    formData = { ...formData, published: new Date().toJSON().slice(0, 10) };

    try {
      setLoading(true);

      const response = await authRequest.post(
        "/auth/employee/posts/",
        formData
      );

      if (response.status === 201) {
        toast.success("Job Post Published!");
        router.push(`/job/${response.data.uid}`);
      }

      console.log(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }

    console.log(formData);
  };

  return (
    <div>
      <form
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm lg:text-base"
        onSubmit={handleSubmit(submitForm)}
      >
        {/* Auto Selected Fields */}
        {autoSelectedField.map((field) => (
          <div key={field.key}>
            <label className="text-sm font-medium mb-2 block">
              {field.label}
            </label>
            <input
              {...register(field.key)}
              type={field.type}
              className={`input-basic ${
                errors?.[field.key] && "focus:outline-red-600"
              } font-semibold`}
              name={field.key}
              value={userData?.[field.key]}
              readOnly
            />
          </div>
        ))}

        {/* Job Category Select Field */}
        <div>
          <label className="text-sm font-medium mb-2 block">Job Category</label>
          <select
            {...register("category", { required: true })}
            className={`input-basic ${
              errors?.category && "focus:outline-red-600"
            }`}
            name="category"
          >
            <option value={""}>Select One</option>
            {jobCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Service Type Select Field */}
        <div>
          <label className="text-sm font-medium mb-2 block">Service Type</label>
          <select
            {...register("service_type", { required: true })}
            className={`input-basic ${
              errors?.service_type && "focus:outline-red-600"
            }`}
            name="service_type"
          >
            <option value={"Hot Job (BDT 13,650)"}>Hot Job (BDT 13,650)</option>
            <option value={"Stand Out (BDT 4515)"}>Stand Out (BDT 4515)</option>
            <option value={"Post Pay (BDT 5145)"}>Post Pay (BDT 5145)</option>
            <option value={"Basic (BDT 3,098)"}>Basic (BDT 3,098)</option>
            <option value={"Free Job Posting (Free)"}>
              Free Job Posting (Free)
            </option>
          </select>
        </div>

        {/* Text Input Fields */}
        {jobPostFields.map((field) => (
          <div key={field.key}>
            <label className="text-sm font-medium mb-2 block">
              {field.label}
            </label>
            <input
              {...register(field.key, { required: true })}
              type={field.type}
              className={`input-basic ${
                errors?.[field.key] && "focus:outline-red-600"
              }`}
              name={field.key}
            />
          </div>
        ))}

        {/* Date Field */}
        <div>
          <label className="text-sm font-medium mb-2 block">Deadline</label>
          <input
            type="date"
            {...register("deadline", { required: true })}
            className={`input-basic ${
              errors?.deadline && "focus:outline-red-600"
            }`}
            name="deadline"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="text-sm font-medium mb-2 block">Experince</label>
          <select
            {...register("experience", { required: true })}
            className={`input-basic ${
              errors?.education && "focus:outline-red-600"
            }`}
            name="education"
          >
            {experience_options.map((exp) => (
              <option key={exp} value={exp}>
                {exp}
              </option>
            ))}
          </select>
        </div>

        {/* Required Education */}
        <div>
          <label className="text-sm font-medium mb-2 block">Education</label>
          <select
            {...register("education", { required: true })}
            className={`input-basic ${
              errors?.education && "focus:outline-red-600"
            }`}
            name="education"
          >
            <option value={"Minimum SSC"}>Minimum SSC</option>
            <option value={"Minimum HSC"}>Minimum HSC</option>
            <option value={"Minimum Graduate"}>Minimum Graduate</option>
            <option value={"Minimum Post-Graduate"}>
              Minimum Post-Graduate
            </option>
            <option value={"Special Requirement"}>
              Special Requirement (Please Mention)
            </option>
            <option value={"Other"}>Other</option>
          </select>
        </div>

        {/* Spacial Education Requirements */}
        <div className="sm:col-span-2">
          <label className="text-sm font-medium mb-2 block">
            Educational Requirements (in brief)
          </label>
          <textarea
            {...register("requirements")}
            type={"text"}
            className={`input-basic ${
              errors?.requirements && "focus:outline-red-600"
            }`}
            name={"requirements"}
          />
        </div>

        {/* Job Location */}
        <div>
          <label className="text-sm font-medium mb-2 block">Education</label>
          <select
            {...register("location", { required: true })}
            className={`input-basic ${
              errors?.location && "focus:outline-red-600"
            }`}
            name="location"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Salary */}
        <div>
          <label className="text-sm font-medium mb-2 block">Salary (BDT)</label>
          <input
            {...register("compensation", { required: true })}
            type={"text"}
            className={`input-basic ${
              errors?.compensation && "focus:outline-red-600"
            }`}
            name={"compensation"}
          />
        </div>

        {/* Other Benefits */}
        <div className="sm:col-span-2">
          <label className="text-sm font-medium mb-2 block">
            Other Benefits
          </label>
          <textarea
            {...register("other_facilities")}
            type={"text"}
            className={`input-basic ${
              errors?.other_facilities && "focus:outline-red-600"
            }`}
            name={"other_facilities"}
          />
        </div>

        {/* Text Area Fields */}
        {jobPostTextArea.map((field) => (
          <div key={field.key} className="sm:col-span-2">
            <label className="text-sm font-medium mb-2 block">
              {field.label}
            </label>
            <textarea
              {...register(field.key, { required: true })}
              type={field.type}
              className={`input-basic ${
                errors?.[field.key] && "focus:outline-red-600"
              }`}
              name={field.key}
              rows={4}
            />
          </div>
        ))}

        {/* Application Procudure */}
        <div
          className={`sm:col-span-2 lg:col-span-4 bg-neutral-100 p-2 pb-4 rounded-lg ${
            errors.applying_procedure ? "border-2 border-red-600 bg-red-50" : ""
          }`}
        >
          <h4 className="font-semibold lg:text-lg">Applying Procedure</h4>

          <div className="mt-4 ml-4 flex flex-col md:flex-row gap-4 md:gap-20">
            {/* options */}
            <div className="flex flex-col gap-2">
              <label htmlFor="jeebika" onClick={() => setProcedure("jeebika")}>
                <input
                  {...register("applying_procedure", { required: true })}
                  type="radio"
                  value="jeebika"
                  id="jeebika"
                  className="mr-2"
                />
                Jeebika.com
              </label>
              <label htmlFor="email" onClick={() => setProcedure("email")}>
                <input
                  {...register("applying_procedure", { required: true })}
                  type="radio"
                  value="email"
                  id="email"
                  className="mr-2"
                />
                Email
              </label>
              <label htmlFor="direct" onClick={() => setProcedure("direct")}>
                <input
                  {...register("applying_procedure", { required: true })}
                  type="radio"
                  value="direct"
                  id="direct"
                  className="mr-2"
                />
                Direct Apply
              </label>
            </div>

            {procedure === "jeebika" && (
              <div className="bg-slate-200 p-4 rounded-lg flex-1">
                <p>
                  <span className="font-semibold">Jeebika.com</span> charges 500
                  taka per application processing.
                  <br /> Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Fugit, impedit. Quae soluta sunt culpa fuga ratione
                  voluptate, tempore aliquid ut. Impedit quisquam nesciunt dicta
                  atque odit explicabo soluta ipsum enim.
                </p>
              </div>
            )}

            {procedure === "email" && (
              <div className="bg-slate-200 p-4 rounded-lg flex-1">
                <p className="font-semibold">Please enter the email address</p>
                <input
                  className="input-basic mt-3"
                  type="email"
                  {...register("apply_procedure")}
                />
              </div>
            )}

            {procedure === "direct" && (
              <div className="bg-slate-200 p-4 rounded-lg flex-1">
                <p className="font-semibold">Please enter the address</p>
                <textarea
                  rows={2}
                  className="input-basic mt-3"
                  type="email"
                  {...register("apply_procedure")}
                />
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2">
          <Button type={"submit"} size="lg">
            Publish
          </Button>
          {loading && (
            <span className="ml-4 font-semibold">Publishing, please wait!</span>
          )}
          {error && (
            <span className="ml-4 text-red-600 font-semibold">
              {error.message}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
