import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0  text-white">
        <h1 className="p-4 my-4 font-bold text-2xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 w-full bg-red-900" type="submit">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-bold cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Ready to watch? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
