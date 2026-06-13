import React from "react";

const Footer = () => {
  const linkClass =
    "relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  return (
    <footer className="bg-black px-4 py-12 text-white sm:px-6 lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row">
        {/* Logo Section */}
        <div className="flex flex-col justify-between">
          <h1 className="mb-8 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Pinterest
          </h1>

          <p className="text-lg">© 2026 Pinterest</p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Get App */}
          <div>
            <h3 className="font-bold text-xl mb-6">Get the app</h3>

            <ul className="space-y-4 text-white hover:underline">
              <li>
                <a href="#" className={linkClass}>
                  iOS
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  Android
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6">Quick links</h3>

            <ul className="space-y-4 text-white hover:underline ">
              <li>
                <a href="#" className={linkClass}>
                  Explore
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  Users
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  Shopping
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold text-xl mb-6">Policies</h3>

            <ul className="space-y-4 text-white hover:underline">
              <li>
                <a href="#" className={linkClass}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  Non-user Notice
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
