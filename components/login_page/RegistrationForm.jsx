import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function RegistrationForm({ type }) {
  return (
    <div className="max-w-md border mx-auto mt-14 p-10 rounded-lg shadow-lg space-y-10">
      <div className="text-center">
        <h2 className="text-xl font-semibold ">Sign up to our platform</h2>
        <h4 className="mt-2">
          {type == "job-seeker"
            ? "Start Explore 1000+ jobs"
            : "Find best employee for your company"}
        </h4>
      </div>

      <form className="">
        <label className="font-medium mb-2 block">Your email</label>
        <input
          type="email"
          className="input-basic"
          placeholder="name@company.com"
        />

        <label className="font-medium mb-2 block mt-6">Your password</label>
        <input type="password" className="input-basic" placeholder="••••••••" />

        <label className="font-medium mb-2 block mt-6">
          Confirm your password
        </label>
        <input type="password" className="input-basic" placeholder="••••••••" />

        <Button className={"w-full mt-8"}>
          <span className="text-base !font-normal">Register your account</span>
        </Button>
      </form>
      <div>
        <span>Already have an account?</span>
        <Link
          href={
            type == "job-seeker" ? "/job-seeker/signin" : "/employer/signin"
          }
          className="ml-2 font-medium text-blue-800"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
