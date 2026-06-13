import React from "react";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-3 py-3 lg:flex-row lg:items-center lg:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3 lg:flex-nowrap lg:gap-4">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2 rounded-full px-3 py-2 text-red-600 transition hover:bg-red-50"
          >
            <FaPinterest className="shrink-0 text-2xl sm:text-3xl" />
            <span className="truncate text-base font-black tracking-[0.08em] uppercase sm:text-lg">
              Pinterest
            </span>
          </Link>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/"
              className="rounded-full bg-gray-100 px-3 py-2 text-sm font-semibold tracking-[0.02em] text-gray-700 transition hover:bg-gray-200 hover:text-red-600"
            >
              Explore
            </Link>
            <Link
              to="/login"
              className="rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-red-700"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="rounded-full bg-gray-200 px-4 py-2 text-sm font-bold text-black shadow-sm transition hover:bg-gray-300"
            >
              Sign up
            </Link>
          </div>
        </div>

        <div className="w-full flex-1 lg:mx-6 lg:w-auto">
          <input
            type="text"
            placeholder="Search for easy dinners, fashion, etc."
            className="w-full rounded-full border border-gray-200 bg-gray-100 px-4 py-3 text-[15px] text-gray-800 shadow-sm outline-none transition placeholder:text-gray-500 focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
          />
        </div>

        <div className="hidden items-center gap-3 text-[15px] font-semibold tracking-[0.02em] text-gray-700 lg:flex">
          <Link
            to="/about"
            className="rounded-full px-3 py-2 transition hover:bg-gray-100 hover:text-red-600"
          >
            About
          </Link>

          <Link
            to="/business"
            className="rounded-full px-3 py-2 transition hover:bg-gray-100 hover:text-red-600"
          >
            Businesses
          </Link>

          <Link
            to="/create"
            className="rounded-full px-3 py-2 transition hover:bg-gray-100 hover:text-red-600"
          >
            Create
          </Link>

          <Link
            to="/news"
            className="rounded-full px-3 py-2 transition hover:bg-gray-100 hover:text-red-600"
          >
            News
          </Link>

          <Link
            to="/login"
            className="rounded-full bg-red-600 px-5 py-2 text-white font-bold tracking-[0.02em] shadow-sm transition hover:bg-red-700"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-gray-100 px-5 py-2 text-black font-bold tracking-[0.02em] shadow-sm transition hover:bg-gray-200"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
