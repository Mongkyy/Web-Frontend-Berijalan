"use server"

import { cookies } from "next/headers";
import Satellite from "../satellite";

export const postRegister = async (body) => {
  try {
    const response = await Satellite.post("/auth/register", body);
    cookies().set("TOKEN", response.data.data[0].tokenSession);

    return response.data;
  } catch (error) {
    return error.response;
  }
};