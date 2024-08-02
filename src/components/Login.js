import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [issignInForm, setissignInForm] = useState(true);

  const togglesigninform = () => {
    setissignInForm(!issignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_medium.jpg"
          alt="logo"
        ></img>
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4">
          {issignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!issignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-6  bg-red-700  w-full rounded-lg ">
          {issignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={togglesigninform}>
          {issignInForm ? " New To Netflix? Sign up" : "Already a Member?"}
        </p>
      </form>
    </div>
  );
};

export default Login;
