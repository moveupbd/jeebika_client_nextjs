"use client";

import { IoMdClose } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "../redux/features/auth/authSlice";

export default function MobileMenu() {
  const { authData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  function close() {
    document.getElementById("mobileMenu").style.width = "0px";
  }

  const handleLogout = () => {
    dispatch(logout());
    close();
    router.push("/");
  };

  return (
    <div
      id="mobileMenu"
      className="fixed w-0 h-[100dvh] top-0 right-0 z-10 bg-primary/50 backdrop-blur-sm transition-all ease-in-out duration-200 md:hidden"
    >
      <div className="ml-auto w-2/3 h-full bg-primary text-primary-foreground p-4 overflow-y-auto">
        <IoMdClose size={32} onClick={close} className="ml-auto" />

        {/* Menu */}
        <div className="mt-6 relative h-[calc(100%-50px)]">
          <Link href={"/"} className="mb-5 block font-medium" onClick={close}>
            Home
          </Link>

          <Link
            href={"/all-jobs"}
            className="mb-1 block font-medium"
            onClick={close}
          >
            All Jobs
          </Link>

          {!authData?.tokens?.access && (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="text-base">Login</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="">
                    <h5>Job Seekers</h5>
                    <p className="text-sm font-thin mt-2 mb-4">
                      Sign in or create your accout to manage your profile
                    </p>

                    <Button asChild variant={"secondary"} onClick={close}>
                      <Link
                        href="/job-seeker/signin"
                        className="cursor-pointer"
                      >
                        Sign In
                      </Link>
                    </Button>

                    <Link
                      href={"/job-seeker/signup"}
                      className="hover:underline cursor-pointer ml-2"
                      onClick={close}
                    >
                      Create Account
                    </Link>
                  </div>

                  <div className="mt-8">
                    <h5>Employers</h5>
                    <p className="text-sm font-thin mt-2 mb-4">
                      Sign in or create account to find the best candidates in
                      the fastest way
                    </p>

                    <Button asChild variant={"secondary"} onClick={close}>
                      <Link href="/employer/signin" className="cursor-pointer">
                        Sign In
                      </Link>
                    </Button>

                    <Link
                      href={"/employer/signup"}
                      className="hover:underline cursor-pointer ml-2"
                      onClick={close}
                    >
                      Create Account
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem> */}
            </Accordion>
          )}

          <Link
            href={"/employer/post-a-job"}
            className="bg-primary-foreground/5 border border-primary-foreground/15 py-1.5 text-center rounded-lg block w-full mt-5"
            onClick={close}
          >
            Post a job
          </Link>

          {authData?.tokens?.access && (
            <div className="absolute bottom-20 right-0 left-0 w-fit mx-auto">
              <Button variant={"destructive"} onClick={handleLogout}>
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
