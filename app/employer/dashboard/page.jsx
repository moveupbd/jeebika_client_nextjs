"use client";

import { storeUserData } from "@/app/redux/features/auth/authSlice";
import useApi from "@/hooks/useApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function EmployerDashboardPage() {
  const dispatch = useDispatch();
  const { authRequest } = useApi();

  const { userData } = useSelector((state) => state.auth);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await authRequest.get("/auth/employee/profile/");

        if (response.status === 200) {
          console.log(response.data);
          dispatch(storeUserData(response.data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!userData) getUserData();
  }, [authRequest, dispatch, userData]);

  return (
    <div className="py-4 container">
      <p className="text-xl md:text-3xl text-center md:text-left font-semibold">
        Dashboard <span className="text-lg">(Employer)</span>
      </p>

      <div className="my-6"></div>
    </div>
  );
}
