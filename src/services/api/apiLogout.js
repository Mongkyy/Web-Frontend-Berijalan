"use server"

import { cookies } from "next/headers";

export const postLogout = async () => {
  try {
    cookies().set("TOKEN", "", { maxAge: -1 });

    return { status: 200, message: "Logged out successfully" };
  } catch (error) {
    return error.response;
  }
};
