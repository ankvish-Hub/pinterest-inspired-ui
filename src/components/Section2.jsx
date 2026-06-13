import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Section2 = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Bring your favorite ideas to life
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 sm:text-xl lg:text-2xl">
            With Pinterest, you can unlock tools that spark your creativity and
            help you find more inspiration.
          </p>
        </div>

        <div className="space-y-16">
          <article className="flex flex-col items-center justify-center gap-10 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                src={img1}
                alt="Skin Tone Search"
                className="mx-auto w-full max-w-lg rounded-3xl"
              />
            </div>

            <div className="w-full text-center lg:w-1/2 lg:text-left">
              <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
                Search by skin tone
              </h3>
              <p className="mb-6 text-base text-gray-600 sm:text-lg">
                Search with skin tone ranges for beauty ideas that represent
                you.
              </p>
              <button className="rounded-full bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700">
                Join Pinterest
              </button>
            </div>
          </article>

          <article className="flex flex-col items-center justify-center gap-10 lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
              <img
                src={img2}
                alt="Group Boards"
                className="mx-auto w-full max-w-lg rounded-3xl"
              />
            </div>

            <div className="w-full text-center lg:w-1/2">
              <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
                Collaborate with group boards
              </h3>
              <p className="mb-6 text-base text-gray-600 sm:text-lg">
                Visualize your ideas with others, using a Pinterest account.
              </p>
              <button className="rounded-full bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700">
                Join Pinterest
              </button>
            </div>
          </article>

          <article className="flex flex-col items-center justify-center gap-10 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                src={img3}
                alt="Search visually with images"
                className="mx-auto w-full max-w-lg rounded-3xl"
              />
            </div>

            <div className="w-full text-center lg:w-1/2 lg:text-left">
              <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
                Search visually with images
              </h3>
              <p className="mb-6 text-base text-gray-600 sm:text-lg">
                Search objects within an image to find more styles you’ll love.
              </p>
              <button className="rounded-full bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700">
                Join Pinterest
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Section2;
