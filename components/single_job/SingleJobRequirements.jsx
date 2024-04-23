export default function SingleJobRequirements({
  education,
  requirements,
  experiense,
}) {
  return (
    <div id="requirements">
      <h2 className="text-lg md:text-xl font-semibold text-blue-800">
        Requirements
      </h2>

      <div className="mt-6">
        <h4 className="md:text-lg font-medium">Education</h4>
        <p className="text-sm md:text-base">{education}</p>
        <p className="text-sm md:text-base">{requirements}</p>
      </div>

      <div className="mt-4">
        <h4 className="md:text-lg font-medium">Experience</h4>
        <p className="text-sm md:text-base">{experiense}</p>
      </div>

      <div className="mt-4">
        <h4 className="md:text-lg font-medium">Additional Requirements</h4>
        <p className="text-sm md:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quam
          obcaecati esse magni deserunt, eos vel voluptatum odio quibusdam
          repellendus expedita neque delectus, illo, doloremque porro cumque
          aperiam. Illo, fuga!
        </p>
      </div>
    </div>
  );
}
