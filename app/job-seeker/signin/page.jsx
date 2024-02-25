import LoginForm from "@/components/login_page/LoginForm";
import React from "react";

export default function JobSeekerSignIn() {
  return (
    <div className="container">
      <LoginForm type={"job-seeker"} />
    </div>
  );
}
