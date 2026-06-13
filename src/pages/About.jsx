import React from "react";
import { FaPinterest, FaLightbulb, FaHeart, FaUsers } from "react-icons/fa";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-red-50 to-pink-100 pt-28 pb-16 px-4">
      {" "}
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <section className="overflow-hidden rounded-4xl bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 lg:p-14">
              <div className="mb-4 flex items-center gap-3 text-2xl font-bold text-red-600">
                <FaPinterest />
                Pinterest
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                About Pinterest
              </p>

              <h1 className="mt-4 text-4xl lg:text-5xl font-black leading-tight text-gray-900">
                Discover Ideas.
                <br />
                Save Inspiration.
                <br />
                Create Your Future.
              </h1>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Pinterest helps millions of people discover new ideas, save
                inspiration, and bring creativity into everyday life. From
                fashion and food to home decor and technology, everything starts
                with an idea.
              </p>
            </div>

            <div className="relative h-[400px] lg:h-auto">
              <iframe
                src="https://player.vimeo.com/video/1182000544?color=ffffff&muted=1&autoplay=1&controls=0&dnt=1&loop=1"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen"
                title="Hero Video"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <FaLightbulb className="text-4xl text-red-500" />
            <h3 className="mt-4 text-xl font-bold">Discover</h3>
            <p className="mt-2 text-gray-600">
              Explore millions of inspiring ideas from creators worldwide.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <FaHeart className="text-4xl text-red-500" />
            <h3 className="mt-4 text-xl font-bold">Save</h3>
            <p className="mt-2 text-gray-600">
              Organize everything you love into beautiful boards.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <FaUsers className="text-4xl text-red-500" />
            <h3 className="mt-4 text-xl font-bold">Connect</h3>
            <p className="mt-2 text-gray-600">
              Share inspiration and discover new communities.
            </p>
          </div>
        </section>

        {/* Video Section 2 */}
        <section className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black text-gray-900">
              Find what inspires you
            </h2>

            <p className="mt-4 text-gray-600">
              Browse ideas tailored to your interests and discover fresh
              inspiration every day.
            </p>
          </div>

          <div className="overflow-hidden rounded-4xl shadow-xl">
            <iframe
              src="https://player.vimeo.com/video/1182000285?color=ffffff&muted=1&autoplay=1&controls=0&dnt=1&loop=1"
              className="h-[350px] w-full"
              allow="autoplay; fullscreen"
              title="Inspiration Video"
            />
          </div>
        </section>

        {/* Video Section 3 */}
        <section className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1 overflow-hidden rounded-4xl shadow-xl">
            <iframe
              src="https://player.vimeo.com/video/1182000158?color=ffffff&muted=1&autoplay=1&controls=0&dnt=1&loop=1"
              className="h-[350px] w-full"
              allow="autoplay; fullscreen"
              title="Taste Video"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-black text-gray-900">
              Tune your taste
            </h2>

            <p className="mt-4 text-gray-600">
              The more you explore, the better Pinterest becomes at showing
              ideas you'll love.
            </p>
          </div>
        </section>

        {/* Video Section 4 */}
        <section className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black text-gray-900">
              Bring your ideas to life
            </h2>

            <p className="mt-4 text-gray-600">
              Save projects, plan your goals, and turn inspiration into reality
              with Pinterest.
            </p>
          </div>

          <div className="overflow-hidden rounded-4xl shadow-xl">
            <iframe
              src="https://player.vimeo.com/video/1181999992?color=ffffff&muted=1&autoplay=1&controls=0&dnt=1&loop=1"
              className="h-[350px] w-full"
              allow="autoplay; fullscreen"
              title="Ideas Video"
            />
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mt-20 rounded-4xl bg-red-600 p-12 text-center text-white shadow-xl">
          <FaPinterest className="mx-auto text-6xl" />

          <h2 className="mt-6 text-4xl font-black">
            Join the Pinterest Community
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-red-100">
            Discover new ideas, save inspiration, and connect with creators from
            around the world.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-3 font-bold text-red-600 transition hover:bg-gray-100 cursor-pointer">
            Get Started
          </button>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
