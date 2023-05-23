"use client";

// import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   console.log(name)
  //   console.log(email)
  //   console.log(password)
    
  //   try {
  //     const { data } = await axios.post("/api/register", {
  //       name,
  //       email,
  //       password,
  //     });

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/register', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({
                name: name,
                email:email,
                password:password
            })
        })
        // // Set the status based on the response from the API route
        // if (response.status === 200) {
        //     setUser({
        //       name: '',
        //       email:'',
        //       password:''
        //     })
        //     setStatus('success');
        // } else {
        //     setStatus('error');
        // }

    }catch (e) {
        console.log(e)
    }

}

  return (
    
        <div className="h-[100vh] mt-16 flex justify-center items-center">
          {/* <form
            className="border border-secondary rounded p-4"
            onSubmit={submitHandler}
          >
            <h1 className="mb-4">Register</h1>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="name_field">
                Name
              </label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="email_field">
                Email address
              </label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="password_field">
                Password
              </label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-block w-100 btn-primary btn-block mb-4"
            >
              Register
            </button>
          </form> */}

          <form
            className="w-96 h-[30rem] border-2 flex flex-col justify-center items-center border-gray-500 rounded-2xl p-5 "
            onSubmit={handleSubmit}
          >
            <h1 className="mb-8 text-2xl font-extrabold text-center">Login</h1>
            <div className="flex flex-col justify-center items-center mb-4">
              <label className="w-full text-base font-medium p-2" htmlFor="email_field">
              Name
              </label>
              <input
                type="text"
                id="email_field"
                className="w-80 h-10 mx-2 p-2 border border-blue-500 focus:outline rounded-lg outline-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4">
              <label className="w-full text-base font-medium p-2" htmlFor="email_field">
                Email Address
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
              Register
            </button>

            <div className="text-center">
              <p>
                Alrady registered? <Link className=" text-sm text-blue-700 on hover:underline" href="/Login">Login</Link>
              </p>
            </div>
          </form>

        </div>
  );
};

export default Register;