import React from "react";
import {
  FaPinterest,
  FaUsers,
  FaBullhorn,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

const CreatePage = () => {
  const updates = [
    {
      title: "Content Planning",
      desc: "Organize and schedule your content with ease.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    },
    {
      title: "Creator Tools",
      desc: "Discover new ways to grow your audience.",
      img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800",
    },
    {
      title: "Performance Insights",
      desc: "Track engagement and improve your strategy.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-red-50 to-pink-100 pt-28 pb-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-600 font-semibold">
            <FaPinterest />
            Pinterest Create
          </div>

          <h1 className="mt-8 text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
            Where your content
            <br />
            can thrive
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Create with ease, grow your audience, and build your personal brand
            on Pinterest. Reach people looking for inspiration every day.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-red-600 px-8 py-3 font-bold text-white transition hover:bg-red-700">
              Get Started
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-8 py-3 font-bold text-gray-800 transition hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </section>

        {/* What's New */}
        <section className="mt-24">
          <div className="mb-10 text-center">
            <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white">
              What's New
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900">
              Latest updates for creators
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {updates.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-4xl bg-white shadow-lg transition hover:-translate-y-2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pinterest For Your Brand */}
        <section className="mt-28">
          <h2 className="text-center text-5xl font-black text-gray-900">
            Pinterest for your brand
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
            Empowering creators, businesses, and publishers to reach the right
            audience.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-4xl bg-white p-8 shadow-lg">
              <FaUsers className="text-5xl text-red-500" />

              <h3 className="mt-6 text-2xl font-bold">Content Creators</h3>

              <p className="mt-4 text-gray-600">
                Share your ideas, grow your audience, and build a personal
                brand.
              </p>

              <ul className="mt-5 space-y-2 text-gray-600">
                <li>✓ Grow followers</li>
                <li>✓ Share creative content</li>
                <li>✓ Build your community</li>
              </ul>
            </div>

            <div className="rounded-4xl bg-white p-8 shadow-lg">
              <FaBullhorn className="text-5xl text-red-500" />

              <h3 className="mt-6 text-2xl font-bold">Merchants</h3>

              <p className="mt-4 text-gray-600">
                Reach customers who are actively looking for products and
                inspiration.
              </p>

              <ul className="mt-5 space-y-2 text-gray-600">
                <li>✓ Drive traffic</li>
                <li>✓ Increase conversions</li>
                <li>✓ Boost awareness</li>
              </ul>
            </div>

            <div className="rounded-4xl bg-white p-8 shadow-lg">
              <FaRocket className="text-5xl text-red-500" />

              <h3 className="mt-6 text-2xl font-bold">Publishers</h3>

              <p className="mt-4 text-gray-600">
                Expand your reach and engage millions of users worldwide.
              </p>

              <ul className="mt-5 space-y-2 text-gray-600">
                <li>✓ Increase visibility</li>
                <li>✓ Grow engagement</li>
                <li>✓ Reach new audiences</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="mt-28 rounded-4xl bg-white p-10 shadow-xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200"
              alt="success"
              className="rounded-3xl"
            />

            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-red-500">
                Success Story
              </p>

              <h2 className="mt-4 text-4xl font-black text-gray-900">
                How creators grow faster on Pinterest
              </h2>

              <p className="mt-5 text-gray-600">
                Pinterest helps creators connect with people who are actively
                looking for inspiration. That means higher engagement, better
                reach, and long-term audience growth.
              </p>

              <button className="mt-8 rounded-full bg-red-600 px-6 py-3 font-bold text-white">
                Read More
              </button>
            </div>
          </div>
        </section>

        {/* Why Pinterest */}
        <section className="mt-28">
          <h2 className="text-center text-5xl font-black text-gray-900">
            Why Pinterest
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            <div className="rounded-4xl bg-white p-8 shadow-lg">
              <FaLightbulb className="text-4xl text-red-500" />
              <h3 className="mt-4 font-bold">Reach</h3>
              <p className="mt-2 text-gray-600">
                Reach millions of users worldwide.
              </p>
            </div>

            <div className="rounded-4xl bg-white p-8 shadow-lg">
              <FaUsers className="text-4xl text-red-500" />
              <h3 className="mt-4 font-bold">Audience</h3>
              <p className="mt-2 text-gray-600">
                Connect with highly engaged people.
              </p>
            </div>

            <div className="rounded-4xl bg-white p-8 shadow-lg">
              <FaBullhorn className="text-4xl text-red-500" />
              <h3 className="mt-4 font-bold">Growth</h3>
              <p className="mt-2 text-gray-600">
                Build your personal or business brand.
              </p>
            </div>

            <div className="rounded-4xl bg-white p-8 shadow-lg">
              <FaRocket className="text-4xl text-red-500" />
              <h3 className="mt-4 font-bold">Results</h3>
              <p className="mt-2 text-gray-600">
                Turn inspiration into action.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-28 rounded-4xl bg-red-600 p-14 text-center text-white shadow-xl">
          <FaPinterest className="mx-auto text-6xl" />

          <h2 className="mt-6 text-5xl font-black">
            Start creating on Pinterest
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-red-100">
            Anyone can create and grow on Pinterest. Share your ideas, inspire
            others, and build your community.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-3 font-bold text-red-600">
              Get Started
            </button>

            <button className="rounded-full border border-white px-8 py-3 font-bold text-white">
              Create Now
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CreatePage;
