import React from "react";
import { FaPinterest, FaNewspaper, FaRocket, FaBullhorn } from "react-icons/fa";

const NewsPage = () => {
  const news = [
    {
      title: "New Creator Tools Released",
      desc: "Discover powerful tools to help creators grow faster.",
      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200",
    },
    {
      title: "Pinterest Trends 2026",
      desc: "Explore the biggest trends shaping the future.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    },
    {
      title: "Advertising Updates",
      desc: "Better ways for businesses to reach audiences.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-red-50 to-pink-100 pt-28 pb-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 font-semibold text-red-600">
            <FaPinterest />
            Pinterest News
          </div>

          <h1 className="mt-8 text-5xl lg:text-7xl font-black text-gray-900">
            What's happening
            <br />
            at Pinterest
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Stay updated with the latest Pinterest announcements, creator
            stories, product launches, and industry insights.
          </p>
        </section>

        {/* Latest News */}
        <section className="mt-20">
          <h2 className="text-4xl font-black text-center text-gray-900">
            Latest News
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {news.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-4xl bg-white shadow-lg transition hover:-translate-y-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 text-gray-600">{item.desc}</p>

                  <button className="mt-4 text-red-600 font-semibold">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Updates */}
        <section className="mt-24 grid gap-6 md:grid-cols-3">
          <div className="rounded-4xl bg-white p-8 shadow-lg">
            <FaRocket className="text-5xl text-red-500" />
            <h3 className="mt-5 text-2xl font-bold">Product Updates</h3>
            <p className="mt-3 text-gray-600">
              Learn about new Pinterest features and improvements.
            </p>
          </div>

          <div className="rounded-4xl bg-white p-8 shadow-lg">
            <FaBullhorn className="text-5xl text-red-500" />
            <h3 className="mt-5 text-2xl font-bold">Announcements</h3>
            <p className="mt-3 text-gray-600">
              Important updates from Pinterest leadership and teams.
            </p>
          </div>

          <div className="rounded-4xl bg-white p-8 shadow-lg">
            <FaNewspaper className="text-5xl text-red-500" />
            <h3 className="mt-5 text-2xl font-bold">Industry Insights</h3>
            <p className="mt-3 text-gray-600">
              Discover trends and strategies from the Pinterest ecosystem.
            </p>
          </div>
        </section>

        {/* Featured Story */}
        <section className="mt-24 rounded-4xl bg-white p-10 shadow-xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200"
              alt="Featured"
              className="rounded-3xl"
            />

            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-red-500">
                Featured Story
              </p>

              <h2 className="mt-4 text-4xl font-black text-gray-900">
                How creators are growing faster than ever
              </h2>

              <p className="mt-5 text-gray-600">
                Learn how creators and businesses are using Pinterest to reach
                millions of people and build thriving communities.
              </p>

              <button className="mt-8 rounded-full bg-red-600 px-6 py-3 font-bold text-white">
                Read Story
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-24 rounded-4xl bg-red-600 p-12 text-center text-white">
          <FaPinterest className="mx-auto text-6xl" />

          <h2 className="mt-6 text-5xl font-black">Never miss an update</h2>

          <p className="mx-auto mt-4 max-w-xl text-red-100">
            Subscribe to get the latest Pinterest news, creator stories, and
            product announcements.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full px-5 py-3 text-black outline-none bg-white "
            />

            <button className="rounded-full bg-white px-8 py-3 font-bold text-red-600">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NewsPage;
