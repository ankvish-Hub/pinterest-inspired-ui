import React from "react";
import { FaGoogle, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <main className="min-h-screen bg-linear-to-br from-rose-50 via-red-50 to-pink-100 px-4 py-8 pt-28 text-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-5xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-4xl bg-white shadow-2xl lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Side */}
          <div className="relative hidden overflow-hidden bg-red-600 p-8 text-white lg:flex lg:flex-col lg:justify-between">
            <div className="absolute inset-0 bg-linear-to-br from-red-500 via-red-600 to-red-800" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3 text-xl font-semibold">
                <FaPinterest /> Pinterest
              </div>

              <p className="text-sm uppercase tracking-[0.35em] text-red-100">
                Join now
              </p>

              <h1 className="mt-4 max-w-sm text-3xl font-black leading-tight">
                Start building your personalized inspiration hub.
              </h1>

              <p className="mt-4 max-w-sm text-sm text-red-100">
                Create an account to save ideas, collaborate with friends, and
                discover new inspiration every day.
              </p>
            </div>

            <div className="relative z-10 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-sm text-red-100">What you get</p>

              <ul className="mt-3 space-y-2 text-sm text-white">
                <li>• Personal boards and saved ideas</li>
                <li>• Trend alerts and tailored recommendations</li>
                <li>• Beautiful browsing on every screen</li>
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-5 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Sign up
              </p>

              <h2 className="mt-3 text-2xl font-black text-gray-900 sm:text-3xl">
                Create your account
              </h2>

              <p className="mt-2 text-gray-500">
                Join millions of creators and bring your best ideas to life.
              </p>

              <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50">
                <FaGoogle className="text-red-500" />
                Continue with Google
              </button>

              <div className="my-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-400">
                <span className="h-px flex-1 bg-gray-200" />
                or create with email
                <span className="h-px flex-1 bg-gray-200" />
              </div>

              <form className="space-y-3">
                {/* Full Name */}
                <label className="block text-sm font-semibold text-gray-700">
                  Full Name
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
                  />
                </label>

                {/* Email */}
                <label className="block text-sm font-semibold text-gray-700">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
                  />
                </label>

                {/* Password */}
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                  <input
                    type="password"
                    placeholder="Create a strong password"
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
                  />
                </label>

                {/* Confirm Password */}
                <label className="block text-sm font-semibold text-gray-700">
                  Confirm Password
                  <input
                    type="password"
                    placeholder="Repeat password"
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
                  />
                </label>

                <button className="mt-2 w-full rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700">
                  Create Account
                </button>
              </form>

              <p className="mt-5 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-red-500 hover:text-red-600"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignupPage;
