"use client";

import Link from "next/link";
import React, { useState } from "react";

import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
        <div className=" h-[100vh] mt-16 flex justify-center items-center">
          <form
            className="w-96 h-96 border-2 flex flex-col justify-center items-center border-gray-500 rounded-2xl p-5 "
            onSubmit={submitHandler}
          >
            <h1 className="mb-8 text-2xl font-extrabold text-center">Login</h1>
            <div className="flex flex-col justify-center items-center mb-4">
              <label className="w-full text-base font-medium p-2" htmlFor="email_field">
                Email address
              </label>
              <input
                type="email"
                id="email_field"
                className="w-80 h-10 mx-2 p-2 border border-blue-500 focus:outline rounded-lg outline-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4">
              <label className="w-full text-base font-medium p-2" htmlFor="password_field">
                Password
              </label>
              <input
                type="password"
                id="password_field"
                className="w-80 h-10 mx-2 p-2 border border-blue-500 focus:outline rounded-lg outline-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="mb-5 rounded-full text-white text-base font-medium bg-blue-500 w-36 h-10"
            >
              Sign in
            </button>

            <div className="text-center">
              <p>
                Not a member? <Link className=" text-sm text-blue-700 on hover:underline" href="/Register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
  
  )
}

export default Login
