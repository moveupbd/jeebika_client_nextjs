"use client";

import React from "react";
import { HamburgerMenuIcon, CaretDownIcon } from "@radix-ui/react-icons";
import { FaUser, FaUserTie, FaPhone } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function NavbarPrimary() {
  const { authData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  function open() {
    document.getElementById("mobileMenu").style.width = "100%";
  }

  return (
    <div className="container py-4 flex items-center justify-between">
      <MobileMenu />
      <Link href={"/"}>
        <p className="text-2xl font-semibold tracking-tighter">Jeebika.</p>
      </Link>
      <div className="hidden md:flex items-center gap-4 text-sm">
        <Link href={"/"}>Create your Resume now</Link>

        {/* Drop Down on Navbar */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            Career Resource
            <CaretDownIcon className="inline" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild className={"cursor-pointer"}>
              <Link href={"/user"}>Career Guide</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className={"cursor-pointer"}>
              <Link href={"/"}>InterView Tips</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className={"cursor-pointer"}>
              <Link href={"/"}>Resume Writing Tips</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className={"cursor-pointer"}>
              <Link href={"/"}>Cover Letter</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className={"cursor-pointer"}>
              <Link href={"/"}>Articles</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className={"cursor-pointer"}>
              <Link href={"/"}>Career Counseling</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className={"cursor-pointer"}>
              <Link href={"/"}>Education/Training Guide</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {!authData?.tokens ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Sign In</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <div className="flex items-center gap-4">
                  <FaUser size={24} />
                  <div className="w-48">
                    <h5 className="text-base xl:text-lg">Job Seekers</h5>
                    <p className="text-sm font-light">
                      Sign in or create your accout to manage your profile
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <DropdownMenuItem asChild>
                        <Button asChild>
                          <Link
                            href="/job-seeker/signin"
                            className="cursor-pointer"
                          >
                            Sign In
                          </Link>
                        </Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href={"/job-seeker/signup"}
                          className="hover:underline cursor-pointer"
                        >
                          Create Account
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <div className="flex items-center gap-4">
                  <FaUserTie size={24} />
                  <div className="w-48">
                    <h5 className="text-base xl:text-lg">Employers</h5>
                    <p className="text-sm font-light">
                      Sign in or create account to find the best candidates in
                      the fastest way
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <DropdownMenuItem asChild>
                        <Button asChild>
                          <Link
                            href="/employer/signin"
                            className="cursor-pointer"
                          >
                            Sign In
                          </Link>
                        </Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href={"/employer/signup"}
                          className="hover:underline cursor-pointer"
                        >
                          Create Account
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant={"secondary"} onClick={handleLogout}>
            Sign Out
          </Button>
        )}

        <Link href={"/"} className="flex items-center gap-1.5">
          <FaPhone size={24} />
          <p className="inline">Contact Us</p>
        </Link>
      </div>
      <div className="md:hidden">
        <Button variant="outline" size="icon" onClick={open}>
          <HamburgerMenuIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
