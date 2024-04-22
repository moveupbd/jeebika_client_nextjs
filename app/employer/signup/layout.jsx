import React from "react";

export default function EmployerRegistrationLayout({ children }) {
  return (
    <>
      <div className="text-center my-10">
        <h2 className="text-xl font-semibold ">Sign up to our platform</h2>
        <h4 className="mt-2">Find best employee for your company</h4>
      </div>

      {children}
    </>
  );
}
