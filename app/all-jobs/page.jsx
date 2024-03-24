import JobList from "@/components/all_jobs/JobList";
import React from "react";

export default function page() {
  return (
    <div className="py-6 container">
      <h2 className="text-xl md:text-3xl text-center md:text-left font-semibold">
        All Jobs
      </h2>

      <div className="py-4">
        <JobList />
      </div>
    </div>
  );
}
