"use client";

import JobPostForm from "@/components/job_post/JobPostForm";
import { redirect } from "next/navigation";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const { authData } = useSelector((state) => state.auth);

  useLayoutEffect(() => {
    if (!authData?.tokens.access) {
      redirect("/employer/signin");
    }
  }, [authData]);

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
