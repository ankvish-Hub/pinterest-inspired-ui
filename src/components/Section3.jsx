import React from "react";
import { FaGoogle, FaEye, FaCalendarAlt } from "react-icons/fa";

const Section3 = () => {
  return (
    <section className="bg-[linear-gradient(rgba(17,24,39,0.65),rgba(17,24,39,0.65))] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 2xl:flex-row 2xl:items-center 2xl:justify-between">
        <div className="text-center text-white 2xl:max-w-md 2xl:text-left">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Sign up to get your ideas
          </h1>
        </div>

        <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center">
              Welcome to Pinterest
            </h2>

            <p className="text-center text-gray-600 mt-2 mb-8">
              Find new ideas to try
            </p>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-2">
              <label className="block mb-1 font-medium">Password</label>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full border rounded-2xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-red-500"
                />

                <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>

              <p className="text-xs text-gray-500 mt-1">
                Use 8 or more letters, numbers and symbols
              </p>
            </div>

            <div className="mb-5">
              <label className="block mb-1 font-medium">Birthdate</label>

              <div className="relative">
                <input
                  type="date"
                  placeholder="dd-mm-yyyy"
                  className="w-full border rounded-2xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <button className="w-full bg-red-600 text-white py-3 rounded-full font-bold hover:bg-red-700">
              Continue
            </button>

            <div className="text-center font-semibold my-3">OR</div>

            <button className="w-full border py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100">
              <FaGoogle />
              Continue with Google
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
              By continuing, you agree to Pinterest's Terms of Service and
              acknowledge our Privacy Policy.
            </p>

            <p className="text-center mt-5">
              Already a member?{" "}
              <a href="/login" className="font-semibold underline">
                Log in
              </a>
            </p>
          </div>

          <div className="bg-gray-200 py-5 text-center font-semibold">
            Create a free business account
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
