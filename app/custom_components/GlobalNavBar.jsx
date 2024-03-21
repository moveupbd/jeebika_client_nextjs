import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function GlobalNavBar() {
  return (
    <div className="hidden md:block bg-primary text-secondary text-xs font-light">
      <div className="container py-2 flex items-center gap-4">
        <div className="flex items-center justify-between flex-1 max-w-md">
          <Link href={"/all-jobs"}>Jobs</Link>
          <Link href={"/"}>Tender/EOI</Link>
          <Link href={"/"}>Education/Training</Link>
          <Link href={"/"}>Others</Link>
          <Link
            href={"/employer/post-a-job"}
            className="bg-secondary text-primary py-1.5 px-3 rounded-lg font-semibold hover:opacity-95"
          >
            Post a job
          </Link>
        </div>

        <div className="flex-1 flex justify-end gap-2">
          <Link href={"/"}>
            <FaFacebook size={20} />
          </Link>
          <Link href={"/"}>
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
