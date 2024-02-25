import LoginForm from "@/components/login_page/LoginForm";
import React from "react";

export default function EmployerSignIn() {
  return (
    <div className="container">
      <LoginForm type={"employer"} />
    </div>
  );
}
