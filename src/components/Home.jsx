import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/home.jpg";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-10 px-4 py-20 pt-28 sm:px-6 lg:flex-row lg:px-8 lg:pt-32">
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          Create the life you love on Pinterest
        </h1>

        <p className="mb-8 text-base text-gray-600 sm:text-lg">
          Discover recipes, fashion ideas, home inspiration, and more.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <Link
            to="/signup"
            className="rounded-full bg-red-600 px-6 py-3 text-center font-bold text-white hover:bg-red-700 cursor-pointer"
          >
            Join Pinterest for free
          </Link>

          <Link
            to="/login"
            className="rounded-full bg-gray-200 px-6 py-3 text-center font-bold text-black hover:bg-gray-300 cursor-pointer"
          >
            I already have an account
          </Link>
        </div>
      </div>

      <div>
        <img
          src={homeImage}
          alt="Pinterest Inspiration"
          className="w-full max-w-lg rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
