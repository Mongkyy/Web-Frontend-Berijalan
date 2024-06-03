"use client";

import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { postRegister } from "@/services/api/apiRegister";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Picture1 from "../../assets/images/logo.png";

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnChange = (event) => {
    const form = event.currentTarget;
    setIsButtonDisabled(
      !form[0].value || !form[1].value || !form[2].value
    );
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const username = event.target[1].value;
    const password = event.target[2].value;

    const body = {
      email,
      username,
      password,
    };

    const res = await postRegister(body);

    if (res.status === 200) {
      console.log("Registration successful", res);
      router.push("/");
      setError("");
    } else {
      setError("Registration failed");
    }
  };

  return (
    <div className="relative flex flex-1 h-screen bg-white overflow-hidden">
      <form
        onSubmit={handleOnSubmit}
        onChange={handleOnChange}
        className="absolute left-[120px] top-[40px] w-[40%] p-16 border rounded-lg bg-white flex flex-col gap-10"
      >
        <h1 className="text-2xl mb-4">Register</h1>
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
          <Input id="standard-adornment-email" type="email" />
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
          <Input id="standard-adornment-username" type="text" />
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit" variant="contained" className="mt-4 bg-greenPrimary" disabled={isButtonDisabled}>
          Register
        </Button>
      </form>
      <div
        className="absolute bg-greenPrimary rounded-full"
        style={{
          width: "1265px",
          height: "1265px",
          top: "calc(50% - 632.5px - 25px)",
          left: "673px",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "280px",
          left: "818px",
        }}
      >
        <Image src={Picture1} layout="intrinsic" width={252} height={93} />
      </div>
    </div>
  );
}
