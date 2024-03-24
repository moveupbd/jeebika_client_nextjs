"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import publicRequest from "@/utils/requestMethod";
import useApi from "@/hooks/useApi";

export default function JobPostForm() {
  const jobPostFields = [
    {
      label: "Category",
      type: "text",
      key: "category",
    },

    {
      label: "Service Type",
      type: "text",
      key: "service_type",
    },

    {
      label: "Company Name",
      type: "text",
      key: "company_title",
    },
    {
      label: "Company Type",
      type: "text",
      key: "company_type",
    },
    {
      label: "Job Position",
      type: "text",
      key: "job_designation",
    },
    {
      label: "Vacancy",
      type: "number",
      key: "vacancy",
    },
    {
      label: "Skills",
      type: "text",
      key: "skill",
    },
    {
      label: "Experience (in years)",
      type: "text",
      key: "experience",
    },
    {
      label: "Requirements",
      type: "text",
      key: "requirements",
    },
    {
      label: "Expertise",
      type: "text",
      key: "expertise",
    },
    {
      label: "Employment Status",
      type: "text",
      key: "employment_status",
    },
    {
      label: "Location",
      type: "text",
      key: "location",
    },
    {
      label: "Compensation",
      type: "text",
      key: "compensation",
    },
    {
      label: "Other Facilities",
      type: "text",
      key: "other_facilities",
    },
    {
      label: "Apply Procedure",
      type: "text",
      key: "apply_procedure",
    },
  ];

  const jobPostTextArea = [
    {
      label: "Responsibilities",
      type: "text",
      key: "responsibilities",
    },
    {
      label: "Company Information",
      type: "text",
      key: "company_info",
    },
  ];

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { authRequest } = useApi();

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
    <div>
      <form
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        onSubmit={handleSubmit(submitForm)}
      >
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
              rows={6}
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <Button size="lg">Publish</Button>
          <span className="ml-4">Publishing, please wait!</span>
        </div>
      </form>
    </div>
  );
}
