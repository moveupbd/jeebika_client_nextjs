"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

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
      key: "compenother_facilitiessation",
    },
    {
      label: "Apply Procedure",
      type: "text",
      key: "apply_procedure",
    },

    // {
    //   user: 1,
    //   category: 1,
    //   service_type: 1,
    //   company_title: "ABC Company3",
    //   company_type: 1, // Make sure to provide the ID of an existing company_type
    //   job_designation: "Software Engineer2",
    //   vacancy: 5,
    //   published: "2024-01-30",
    //   deadline: "2024-02-15",
    //   skill: "Python, Django",
    //   experience: "2-4 years",
    //   requirements: "Bachelor's degree in Computer Science",
    //   responsibilities: "Develop and maintain web applications",
    //   expertise: "Full Stack Development",
    //   employment_status: "Full-time",
    //   location: "City X",
    //   company_info: "A leading tech company",
    //   compensation: "Competitive salary",
    //   other_facilities: null,
    //   apply_procedure: "Submit your resume through the online application form",
    // },
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
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

        <div className="sm:grid-flow-col">
          <Button size="lg">Post</Button>
          <span className="ml-4">Posting, please wait!</span>
        </div>
      </form>
    </div>
  );
}
