import RegistrationForm from "@/components/login_page/RegistrationForm";
import React from "react";

export default function JobSeekerSignUp() {
  return (
    <div className="container">
      <RegistrationForm type={"job-seeker"} />
    </div>
  );
}
