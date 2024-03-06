import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const Signup = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div
          className="w-full p-6 rounded-lg shadow-md bg-gray-400 
    bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"
        >
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login
            <span className="text-blue-500">Chatu</span>
          </h1>
          <form>
            <div className=" space-y-3">
              <label className="form-control w-full max-w-xs">
                <span className="label-text">Fullname</span>
              </label>
              <input
                type="text"
                placeholder="Fullname"
                className="input input-bordered w-full"
              />
                <label className="form-control w-full max-w-xs">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full"
              />
              <label className="form-control w-full max-w-xs">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered w-full"
              />
              <label className="form-control w-full max-w-xs">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered w-full"
              />
              <GenderCheckBox/>
              <a className="link link-secondary">Already have an Account</a>
              <button className="btn btn-primary w-full">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
