import React from "react";
import FindJobForm from "./FindJobForm";
import DivisionalJob from "./DivisionalJob";

export default function FindJobSection() {
  return (
    <div className="bg-secondary">
      <div className="md:container grid grid-cols-12 md:gap-4">
        <div className="px-4 md:p-0 col-span-full md:col-span-9">
          <FindJobForm />
        </div>
        <div className="col-span-full md:col-span-3">
          <DivisionalJob />
        </div>
      </div>
    </div>
  );
}
