import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function LoginForm({ type }) {
  return (
    <div className="max-w-md border mx-auto mt-14 p-10 rounded-lg shadow-lg space-y-10">
      <div className="text-center">
        <h2 className="text-xl font-semibold ">Sign in to our platform</h2>
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

        <div className="flex items-center justify-between my-6">
          <div className="flex items-center">
            <input type="checkbox" className="w-6 h-4" />
            <span className="font-medium">Remember me</span>
          </div>

          <Link href={"/"} className="text-blue-800">
            Lost Password?
          </Link>
        </div>

        <Button className={"w-full"}>
          <span className="text-base !font-normal">Login to your account</span>
        </Button>
      </form>
      <div>
        <span>Not Registered?</span>
        <Link
          href={
            type == "job-seeker" ? "/job-seeker/signup" : "/employer/signup"
          }
          className="ml-2 font-medium text-blue-800"
        >
          Create account
        </Link>
      </div>
    </div>
  );
}
