import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function DivisionalJob() {
  return (
    <div className="w-full bg-primary h-full text-primary-foreground p-4 space-y-6">
      <div>
        <h4 className="text-center md:text-left md:text-lg">Divisional Jobs</h4>

        <div className="text-xs mt-3 flex gap-1.5 flex-wrap">
          <Link href={"/"} className="p-1.5 border w-fit rounded-lg">
            <span>Dhaka</span>
            <span>(1599)</span>
          </Link>
          <Link href={"/"} className="p-1.5 border w-fit rounded-lg">
            <span>Dhaka</span>
            <span>(1599)</span>
          </Link>
          <Link href={"/"} className="p-1.5 border w-fit rounded-lg">
            <span>Dhaka</span>
            <span>(1599)</span>
          </Link>
          <Link href={"/"} className="p-1.5 border w-fit rounded-lg">
            <span>Dhaka</span>
            <span>(1599)</span>
          </Link>
        </div>
      </div>

      <div>
        <h4 className="text-center md:text-left md:text-lg">Quick Links</h4>

        <div className="text-xs mt-2 flex gap-1.5 flex-wrap">
          <Link href={"/"} className="group">
            <DoubleArrowRightIcon className="inline w-3 h-3 mr-1" />
            <span className="group-hover:underline">Deadline Tomorrow</span>
          </Link>

          <Link href={"/"} className="group">
            <DoubleArrowRightIcon className="inline w-3 h-3 mr-1" />
            <span className="group-hover:underline">Employer List</span>
          </Link>

          <Link href={"/"} className="group">
            <DoubleArrowRightIcon className="inline w-3 h-3 mr-1" />
            <span className="group-hover:underline">New Jobs</span>
          </Link>

          <Link href={"/"} className="group">
            <DoubleArrowRightIcon className="inline w-3 h-3 mr-1" />
            <span className="group-hover:underline">Part Time Jobs</span>
          </Link>

          <Link href={"/"} className="group">
            <DoubleArrowRightIcon className="inline w-3 h-3 mr-1" />
            <span className="group-hover:underline">Contractual</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
