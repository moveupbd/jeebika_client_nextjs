import Link from "next/link";
import React from "react";

export default function SingleJobSource({ sourceLink, sourceProve }) {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-semibold text-blue-800">
        Reference
      </h2>

      <div className="mt-6">
        <h4 className="md:text-lg font-medium">Source</h4>
        <Link
          href={sourceLink || "#"}
          className="text-sm md:text-base underline"
          target="blank"
        >
          {sourceLink}
        </Link>
      </div>

      <div className="mt-4">
        <h4 className="md:text-lg font-medium">Reference File</h4>
        <Link
          href={sourceProve || "#"}
          className="text-blue-800 underline decoration-blue-800"
          target="blank"
        >
          Click here to see the attachment.
        </Link>
      </div>
    </div>
  );
}
