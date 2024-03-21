import JobPostForm from "@/components/job_post/JobPostForm";
import React from "react";

export default function page() {
  return (
    <div className="py-4 container">
      <p className="text-xl md:text-3xl text-center md:text-left font-semibold">
        Post a job
      </p>

      <div className="my-6">
        <JobPostForm />
      </div>
    </div>
  );
}
