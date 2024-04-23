"use client";

import publicRequest from "@/utils/requestMethod";
import { useQuery } from "@tanstack/react-query";
import JobCard from "./JobCard";

export default function JobList() {
  const fetchAllJobs = async () => {
    const response = await publicRequest.get("/job-posts");
    return response.data;
  };

  const {
    data: allJobs,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["allJobs"],
    queryFn: fetchAllJobs,
  });

  console.log(allJobs);

  if (error)
    return (
      <p className="bg-red-600 text-white p-2 container">{error.message}</p>
    );

  if (isLoading)
    return (
      <p className="container text-lg font-semibold">
        Fetching all jobs. Please wait.
      </p>
    );

  return (
    <>
      {allJobs?.map((job) => (
        <JobCard
          key={job.uid}
          uid={job.uid}
          title={job.job_designation}
          company={job.company_name}
          location={job.location}
          requirements={job.requirements}
          experience={job.experience}
          deadline={job.deadline}
        />
      ))}
    </>
  );
}
