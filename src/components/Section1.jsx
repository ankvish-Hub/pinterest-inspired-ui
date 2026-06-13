import React, { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ideas = [
  {
    image:
      "https://i.pinimg.com/236x/28/b1/73/28b173f6230996a61699f78a5050b942.jpg",
    title: "Elevated blokette: stylish at the stadium",
    category: "Fashion",
    pins: "83 Pins",
  },
  {
    image:
      "https://i.pinimg.com/236x/28/b1/73/28b173f6230996a61699f78a5050b942.jpg",
    title: "Team spirit manicures",
    category: "Beauty",
    pins: "53 Pins",
  },
  {
    image:
      "https://i.pinimg.com/236x/28/b1/73/28b173f6230996a61699f78a5050b942.jpg",
    title: "Styling soccer jerseys",
    category: "Pinterest Man",
    pins: "91 Pins",
  },
  {
    image:
      "https://i.pinimg.com/236x/28/b1/73/28b173f6230996a61699f78a5050b942.jpg",
    title: "Sports fans birthday ideas",
    category: "Inspiration",
    pins: "61 Pins",
  },
];

const Section1 = () => {
  const carouselRef = useRef(null);

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Step into soccer season
          </h1>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Flex your fandom and score fresh inspiration for every match.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold sm:text-3xl">More winning ideas</h2>

          <button className="w-fit rounded-full bg-gray-200 px-6 py-3 font-semibold hover:bg-gray-300">
            See all
          </button>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
          >
            {ideas.map((item, index) => (
              <article
                key={index}
                className="min-w-[280px] max-w-[320px] shrink-0 cursor-pointer snap-start sm:min-w-[300px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-3xl"
                />

                <h3 className="font-bold text-xl mt-4">{item.title}</h3>

                <p className="text-gray-600 mt-1">{item.category}</p>

                <p className="text-gray-500 text-sm">{item.pins}</p>
              </article>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white shadow-lg w-12 h-12 items-center justify-center hover:bg-gray-100 md:flex"
          >
            <FaChevronRight />
          </button>
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white shadow-lg w-12 h-12 items-center justify-center hover:bg-gray-100 md:flex"
          >
            <FaChevronLeft />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
