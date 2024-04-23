export default function SingleJobCompensation({
  compensation,
  other_facilities,
  employment_status,
  location,
  apply_procedure,
}) {
  return (
    <div id="salary_benefits">
      <h2 className="text-lg md:text-xl font-semibold text-blue-800">
        Compensation & Other Benefits
      </h2>

      <div className="mt-4">
        <h4 className="md:text-lg font-medium">Other Facilities</h4>
        <p className="text-sm md:text-base">
          {other_facilities}
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sit
          atque dolores sapiente quae tempora, velit minima? Ducimus recusandae
          a labore temporibus sapiente dolore nam, eveniet cum, dolorem atque
          minima?
        </p>
      </div>

      <div className="mt-6">
        <h4 className="text-lg md:text-xl font-semibold text-blue-800">
          Compensation
        </h4>
        <p className="text-sm md:text-base">
          {compensation} (Bangladeshi Taka)
        </p>
      </div>

      <div className="mt-4">
        <h4 className="text-lg md:text-xl font-semibold text-blue-800">
          Employment Status
        </h4>
        <p className="text-sm md:text-base">{employment_status}</p>
      </div>

      <div className="mt-4">
        <h4 className="text-lg md:text-xl font-semibold text-blue-800">
          Job Location
        </h4>
        <p className="text-sm md:text-base">{location}</p>
      </div>

      <div className="mt-4">
        <h4 className="text-lg md:text-xl font-semibold text-blue-800">
          Application Procedure
        </h4>
        <p className="text-sm md:text-base">{apply_procedure}</p>
      </div>
    </div>
  );
}
