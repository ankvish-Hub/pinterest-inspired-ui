import React from "react";
import { FaGoogle, FaEye, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-linear-to-br from-rose-50 via-red-50 to-pink-100 px-4 py-8 pt-28 text-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-5xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-4xl bg-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative hidden overflow-hidden bg-red-600 p-8 text-white lg:flex lg:flex-col lg:justify-between">
            <div className="absolute inset-0 bg-linear-to-br from-red-500 via-red-600 to-red-800" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3 text-xl font-semibold">
                <FaPinterest /> Pinterest
              </div>
              <p className="text-sm uppercase tracking-[0.35em] text-red-100">
                Welcome back
              </p>
              <h1 className="mt-4 max-w-sm text-3xl font-black leading-tight">
                Sign in and pick up your next great idea.
              </h1>
              <p className="mt-4 max-w-sm text-sm text-red-100">
                Save inspiring boards, discover fresh trends, and continue your
                creative journey from anywhere.
              </p>
            </div>
            <div className="relative z-10 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-sm text-red-100">Why people love it</p>
              <ul className="mt-3 space-y-2 text-sm text-white">
                <li>• Smart recommendations tailored to your style</li>
                <li>• Instant access to your favourite boards</li>
                <li>• Smooth, secure sign-in on every device</li>
              </ul>
            </div>
          </div>

          <div className="p-5 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Login
              </p>
              <h2 className="mt-3 text-2xl font-black text-gray-900 sm:text-3xl">
                Welcome back
              </h2>
              <p className="mt-2 text-gray-500">
                Use your account to continue exploring Pinterest-inspired ideas.
              </p>

              <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50">
                <FaGoogle className="text-red-500" /> Continue with Google
              </button>

              <div className="my-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-400">
                <span className="h-px flex-1 bg-gray-200" />
                or continue with email
                <span className="h-px flex-1 bg-gray-200" />
              </div>

              <form className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
                  />
                </label>

                <label className="block text-sm font-semibold text-gray-700">
                  Password
                  <div className="relative mt-2">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-gray-900 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
                    />
                    <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </label>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                    />
                    Remember me
                  </label>
                  <a
                    href="#"
                    className="font-semibold text-red-500 hover:text-red-600"
                  >
                    Forgot password?
                  </a>
                </div>

                <button className="w-full rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700">
                  Log in
                </button>
              </form>

              <p className="mt-5 text-center text-sm text-gray-500">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-red-500 hover:text-red-600"
                >
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
