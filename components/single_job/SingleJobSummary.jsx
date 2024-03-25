import React from "react";

export default function SingleJobSummary({
  vacancy,
  location,
  published,
  skills,
  experience,
}) {
  return (
    <div className="mt-10 bg-neutral-100 p-2 md:p-4 rounded-lg border">
      <h2 className="text-lg md:text-xl font-semibold text-blue-800">
        Summary
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6 text-neutral-700">
        <p>
          Vacancy: <span className="font-bold">{vacancy}</span>
        </p>
        <p>
          Location: <span className="font-bold">{location}</span>
        </p>
        <p>
          Published: <span className="font-bold">{published}</span>
        </p>
        <p>
          Skills: <span className="font-bold">{skills}</span>
        </p>
        <p>
          Experience: <span className="font-bold">{experience}</span>
        </p>
      </div>
    </div>
  );
}
