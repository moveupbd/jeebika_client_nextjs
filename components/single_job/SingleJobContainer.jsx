"use client";

import publicRequest from "@/utils/requestMethod";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import {
  FaLinkedin,
  FaRegStar,
  FaSquareFacebook,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import SingleJobSummary from "./SingleJobSummary";
import SingleJobRequirements from "./SingleJobRequirements";
import SingleJobResponsibilities from "./SingleJobResponsibilities";
import SingleJobCompensation from "./SingleJobCompensation";
import SingleJobCompanyInfo from "./SingleJobCompanyInfo";

export default function SingleJobContainer() {
  const jobId = usePathname().split("/")[2];

  const fetchJobDetails = async () => {
    const response = await publicRequest.get(`/job-posts/${jobId}`);
    return response.data;
  };

  const {
    data: jobDetails,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["singleJob", { jobId }],
    queryFn: fetchJobDetails,
  });

  console.log(jobDetails);

  if (error)
    return (
      <p className="bg-red-600 text-white p-2 container">{error.message}</p>
    );

  if (isLoading)
    return (
      <p className="container text-lg font-semibold">
        Fetching job details. Please wait.
      </p>
    );

  return (
    <div className="max-w-5xl border rounded-lg p-2 md:p-4 shadow-md">
      {/* company name, title, image */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h4 className="md:text-lg font-medium">
            {jobDetails?.company_title}
          </h4>
          <h2 className="font-semibold text-lg md:text-2xl">
            {jobDetails?.job_designation}
          </h2>
          <p className="text-sm md:text-base mt-7">
            Application Deadline:{" "}
            <span className="font-semibold text-red-600">
              {jobDetails?.deadline}
            </span>
          </p>
        </div>

        <Image src={"/logo/job_logo.png"} alt="" width={140} height={200} />
      </div>

      {/* CTA */}
      <ul className="flex flex-wrap justify-end gap-3 mt-6">
        <li>
          <Button>Apply Now</Button>
        </li>
        <li>
          <Button variant={"outline"}>
            <FaRegStar className="mr-2" />
            Shortlist
          </Button>
        </li>
        <li>
          <Button variant={"outline"}>
            Share:
            <span className="flex gap-1 ml-2">
              <FaSquareFacebook size={22} />
              <FaLinkedin size={22} />
              <FaSquareWhatsapp size={22} />
            </span>
          </Button>
        </li>
      </ul>

      {/* tabs section */}
      <ul className="mt-10 text-sm font-semibold flex flex-wrap items-center justify-center gap-y-1">
        <li>
          <Link href={"#"} className="py-2 px-4 bg-neutral-50 border block">
            All
          </Link>
        </li>
        <li>
          <Link
            href={"#requirements"}
            className="py-2 px-4 bg-neutral-50 border block"
          >
            Requirements
          </Link>
        </li>
        <li>
          <Link
            href={"#responsibilities"}
            className="py-2 px-4 bg-neutral-50 border block"
          >
            Responsibilities
          </Link>
        </li>
        <li>
          <Link
            href={"#salary_benefits"}
            className="py-2 px-4 bg-neutral-50 border block"
          >
            Salary & Benefits
          </Link>
        </li>
        <li>
          <Link
            href={"#company_information"}
            className="py-2 px-4 bg-neutral-50 border block"
          >
            Company Information
          </Link>
        </li>
      </ul>

      {/* Summary */}
      <SingleJobSummary
        vacancy={jobDetails?.vacancy}
        location={jobDetails?.location}
        published={jobDetails?.published}
        skills={jobDetails?.skill}
        experience={jobDetails?.experience}
      />

      {/* Details */}
      <div className="mt-4 p-2 md:p-4 rounded-lg border space-y-8">
        <SingleJobRequirements
          requirements={jobDetails?.requirements}
          experiense={jobDetails?.experience}
        />

        <hr />

        <SingleJobResponsibilities
          responsibilities={jobDetails?.responsibilities}
          department={jobDetails?.department}
        />

        <hr />

        <SingleJobCompensation
          employment_status={jobDetails?.employment_status}
          location={jobDetails?.location}
          compensation={jobDetails?.compensation}
          other_benefits={jobDetails?.other_benefits}
        />
      </div>

      <SingleJobCompanyInfo />
    </div>
  );
}
