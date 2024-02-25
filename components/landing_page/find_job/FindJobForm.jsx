"use client";

import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function FindJobForm() {
  return (
    <div className="py-6">
      <h2 className="text-xl md:text-3xl text-center md:text-left">Find the right job for you</h2>

      <form className="bg-white w-full p-3 mt-4 border border-primary/20 rounded-lg flex items-center gap-2 flex-wrap">
        <IoSearchOutline size={22} />
        <input
          placeholder="Search jobs..."
          className="focus:outline-none flex-1 w-full"
        />
        <Select>
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Organization type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="government">Government</SelectItem>
            <SelectItem value="semi-government">Semi-Government</SelectItem>
            <SelectItem value="ngo">NGO</SelectItem>
            <SelectItem value="private-company">Private Company</SelectItem>
            <SelectItem value="intl-agency">International Agency</SelectItem>
          </SelectContent>
        </Select>

        <Button>Search</Button>
      </form>
    </div>
  );
}
