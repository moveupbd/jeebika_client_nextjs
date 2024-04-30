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
import { useSelector } from "react-redux";
import SingleJobSource from "./SingleJobSource";

export default function SingleJobContainer() {
  const jobId = usePathname().split("/")[2];

  const { userData } = useSelector((state) => state.auth);

  console.log(userData);

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
    <div className="max-w-5xl border rounded-lg p-2 md:p-4 shadow-md my-6">
      {/* company name, title, image */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h4 className="md:text-lg font-medium">{jobDetails?.company_name}</h4>
          <h2 className="font-semibold text-lg md:text-2xl">
            {jobDetails?.job_designation}
          </h2>
          <p className="text-sm md:text-base mt-7 flex gap-1 flex-wrap">
            Application Deadline:{" "}
            <span className="font-semibold text-red-600">
              {jobDetails?.deadline}
            </span>
          </p>
        </div>

        <Image
          src={userData?.company_logo}
          alt=""
          width={140}
          height={200}
          className="w-40 h-40 object-cover"
        />
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
          education={jobDetails?.education}
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
          other_facilities={jobDetails?.other_facilities}
          apply_procedure={jobDetails?.apply_procedure}
        />
      </div>

      <SingleJobCompanyInfo
        company_info={jobDetails?.company_info}
        company_name={jobDetails?.company_name}
        company_type={jobDetails?.company_type}
      />

      <div className="mt-4 p-2 md:p-4 rounded-lg border space-y-8">
        <SingleJobSource
          sourceLink={jobDetails?.source}
          sourceProve={jobDetails?.source_prove}
        />
      </div>
    </div>
  );
}
