export default function SingleJobCompanyInfo() {
  return (
    <div
      className="mt-10 bg-neutral-100 p-2 md:p-4 rounded-lg border"
      id="company_information"
    >
      <h2 className="text-lg md:text-xl font-semibold text-blue-800">
        Company Information
      </h2>

      <div className="mt-6">
        <h4 className="md:text-lg font-medium">Company Name</h4>
      </div>

      <div className="mt-4">
        <h4 className="md:text-lg font-medium">Address</h4>
        <p className="text-sm md:text-base">Company office address</p>
      </div>

      <div className="mt-4">
        <h4 className="md:text-lg font-medium">Website</h4>
        <p className="text-sm md:text-base">www.examplecompany.com</p>
      </div>

      <div className="mt-4">
        <h4 className="md:text-lg font-medium">Business Info</h4>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          consectetur reprehenderit architecto rem ab illum possimus reiciendis
          corporis est officiis quas ipsam numquam vero at ea perspiciatis
          veniam? Consequatur, sint.
        </p>
      </div>
    </div>
  );
}
