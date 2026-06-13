import React from "react";
import {
  FaPinterest,
  FaChartLine,
  FaBullhorn,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const BusinessPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-red-50 to-pink-100 pt-28 pb-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <section className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-red-500">
            Pinterest Business
          </p>

          <h1 className="mt-4 text-5xl font-black text-gray-900">
            Grow your business
            <br />
            on Pinterest
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Reach people looking for inspiration and connect with customers who
            are ready to discover new products and ideas.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-red-600 px-8 py-3 font-bold text-white hover:bg-red-700">
              Get Started
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-8 py-3 font-bold text-gray-800 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </section>

        {/* Showcase */}
        <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-4xl bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt=""
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-4xl bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1503602642458-232111445657"
              alt=""
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-4xl bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
              alt=""
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-4xl bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
              alt=""
              className="h-64 w-full object-cover"
            />
          </div>
        </section>

        {/* Benefits */}
        <section className="mt-20">
          <h2 className="text-center text-4xl font-black text-gray-900">
            Why businesses choose Pinterest
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-4xl bg-white p-8 shadow-lg">
              <FaBullhorn className="text-4xl text-red-500" />
              <h3 className="mt-4 text-xl font-bold">Increase Awareness</h3>
              <p className="mt-3 text-gray-600">
                Put your brand in front of people looking for inspiration.
              </p>
            </div>

            <div className="rounded-4xl bg-white p-8 shadow-lg">
              <FaUsers className="text-4xl text-red-500" />
              <h3 className="mt-4 text-xl font-bold">Reach New Audiences</h3>
              <p className="mt-3 text-gray-600">
                Connect with millions of users around the world.
              </p>
            </div>

            <div className="rounded-4xl bg-white p-8 shadow-lg">
              <FaChartLine className="text-4xl text-red-500" />
              <h3 className="mt-4 text-xl font-bold">Grow Sales</h3>
              <p className="mt-3 text-gray-600">
                Turn inspiration into action and increase conversions.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="mt-20 rounded-4xl bg-white p-10 shadow-xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-red-500">
                Solutions
              </p>

              <h2 className="mt-4 text-4xl font-black text-gray-900">
                Effective solutions for every goal
              </h2>

              <p className="mt-4 text-gray-600">
                Whether you want more traffic, engagement, or sales, Pinterest
                provides powerful tools to help your business grow.
              </p>

              <button className="mt-6 flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-bold text-white">
                Explore Solutions
                <FaArrowRight />
              </button>
            </div>

            <div className="overflow-hidden rounded-4xl">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mt-20">
          <h2 className="text-center text-4xl font-black text-gray-900">
            Resources to guide you
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-4xl bg-white p-8 shadow-lg">
              <h3 className="font-bold">Business Guides</h3>
              <p className="mt-3 text-gray-600">
                Learn how to market effectively on Pinterest.
              </p>
            </div>

            <div className="rounded-4xl bg-white p-8 shadow-lg">
              <h3 className="font-bold">Online Courses</h3>
              <p className="mt-3 text-gray-600">
                Improve your advertising and branding skills.
              </p>
            </div>

            <div className="rounded-4xl bg-white p-8 shadow-lg">
              <h3 className="font-bold">Success Stories</h3>
              <p className="mt-3 text-gray-600">
                See how businesses achieve growth with Pinterest.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-4xl bg-red-600 p-12 text-center text-white">
          <FaPinterest className="mx-auto text-6xl" />

          <h2 className="mt-6 text-4xl font-black">Start growing today</h2>

          <p className="mx-auto mt-4 max-w-xl text-red-100">
            Create a Pinterest Business account and reach customers looking for
            inspiration.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-3 font-bold text-red-600">
            Create Business Account
          </button>
        </section>
      </div>
    </main>
  );
};

export default BusinessPage;
