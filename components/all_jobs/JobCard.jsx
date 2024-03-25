import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa";
import { FaLocationDot, FaSuitcase, FaUserGraduate } from "react-icons/fa6";

export default function JobCard({
  uid,
  title,
  company,
  location,
  requirements,
  experience,
  deadline,
}) {
  return (
    <Link
      href={`/job/${uid}`}
      className="p-3 lg:p-5 my-4 bg-neutral-100/30 border rounded-lg shadow-sm max-w-4xl block hover:bg-neutral-100/70"
    >
      <div className="flex justify-between gap-6">
        <div className="">
          <h3 className="md:text-lg font-semibold">{title}</h3>
          <h4 className="text-sm md:text-base font-medium mt-1.5">{company}</h4>

          <div className="flex flex-col gap-1 mt-5 text-xs md:text-sm">
            <span>
              <FaLocationDot className="inline mr-1 opacity-80" />
              {location}
            </span>
            <span>
              <FaUserGraduate className="inline mr-1 opacity-80" />
              {requirements}
            </span>
          </div>
        </div>
        <div>Image</div>
      </div>
      <div className="flex items-center justify-between gap-6 mt-6 text-xs md:text-sm">
        <span className="flex items-center gap-1">
          <FaSuitcase className="opacity-80" />
          {experience}
        </span>
        <span className="flex items-center gap-1">
          <FaCalendarCheck className="opacity-80" />
          {deadline}
        </span>
      </div>
    </Link>
  );
}
