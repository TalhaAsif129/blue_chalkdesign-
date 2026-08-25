import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiPlus } from "react-icons/fi";

import heroVideo from "../../assets/landingimg/herovideo.mp4";
import bluechalkLogo from "../../assets/landingimg/bluechalk.avif";

import two from "../../assets/landingimg/two.avif";
import three from "../../assets/landingimg/three.avif";
import four from "../../assets/landingimg/four.avif";
import five from "../../assets/landingimg/five.avif";
import six from "../../assets/landingimg/six.avif";
import seven from "../../assets/landingimg/seven.avif";
import eight from "../../assets/landingimg/eight.avif";
import nine from "../../assets/landingimg/nine.avif";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isSliderHovered, setIsSliderHovered] = useState(false);

  const images = [
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
  ];

  // Image slider - auto change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="min-h-screen w-full bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="flex w-full flex-col lg:flex-row">

        {/* ===================================================
            VIDEO SECTION
        =================================================== */}
        <div
          className="
            relative
            h-screen
            w-full
            overflow-hidden
            bg-black
            lg:h-[calc(100vh-72px)]
            lg:w-[71.5%]
          "
          onMouseEnter={() => setIsVideoHovered(true)}
          onMouseLeave={() => setIsVideoHovered(false)}
        >

          {/* Video */}
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-36 md:h-40 bg-gradient-to-t from-[#265b7a] via-[#1989c2]/2 to-transparent pointer-events-none" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* =================================================
              BLUE CHALK LOGO
          ================================================= */}
          <div
            className="
              absolute
              -bottom-2
              left-20
              z-20
              w-[180px]
              sm:w-[220px]
              md:w-[280px]
              lg:w-[350px]
              xl:w-[380px]
            "
          >
            <img
              src={bluechalkLogo}
              alt="Blue Chalk"
              className="block h-auto pt-2 w-full object-contain"
            />
          </div>

          {/* =================================================
              WHAT LASTS BOX - Video Section
          ================================================= */}
          <div
            className={`
              absolute
              bottom-5
              right-5
              z-20
              flex
              h-[48px]
              w-[150px]
              items-center
              justify-start
              px-3
              transition
              duration-300
              text-[13px]
              font-medium
              text-white
              sm:h-[52px]
              sm:w-[170px]
              lg:h-[65px]
              lg:w-[180px]
              ${isVideoHovered ? 'bg-[#1989c2]' : 'bg-black/60'}
            `}
          >
            What Lasts
            <FiPlus
              className="
                absolute
                right-1.5
                top-1.5
                text-base
                sm:right-2
                sm:top-2
                sm:text-lg
                lg:text-xl
                xl:text-2xl
              "
            />
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="
              absolute
              right-5
              top-5
              z-50
              flex
              h-11
              w-11
              items-center
              justify-center
              bg-white
              text-[24px]
              text-[#07354a]
              shadow-md
              md:right-7
              md:top-7
              lg:hidden
            "
            aria-label="Open menu"
          >
            <FiMenu />
          </button>

          {/* =================================================
              MOBILE MENU
          ================================================= */}
          {menuOpen && (
            <>
              {/* Background overlay */}
              <div
                onClick={() => setMenuOpen(false)}
                className="
                  absolute
                  inset-0
                  z-40
                  bg-black/30
                  lg:hidden
                "
              />

              {/* Menu Panel */}
              <div
                className="
                  absolute
                  right-4
                  top-4
                  z-50
                  w-[220px]
                  bg-white
                  px-7
                  py-6
                  shadow-xl
                  lg:hidden
                "
              >

                {/* Menu Header */}
                <div
                  className="
                    mb-7
                    flex
                    items-center
                    justify-between
                    border-b
                    border-gray-200
                    pb-4
                  "
                >
                  <span
                    className="
                      text-[18px]
                      font-medium
                      text-[#07354a]
                    "
                  >
                    Menu
                  </span>

                  {/* Close Icon */}
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      text-[22px]
                      text-[#07354a]
                      transition
                      hover:opacity-50
                    "
                    aria-label="Close menu"
                  >
                    <FiX />
                  </button>
                </div>

                {/* Menu Links */}
                <div className="flex flex-col gap-6">
                  <Link
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                    className="
                      text-[17px]
                      font-medium
                      text-[#1497d4]
                      transition
                      hover:opacity-60
                    "
                  >
                    About
                  </Link>
                  <Link
                    to="/work"
                    onClick={() => setMenuOpen(false)}
                    className="
                      text-[17px]
                      font-medium
                      text-[#1497d4]
                      transition
                      hover:opacity-60
                    "
                  >
                    Work
                  </Link>
                  <Link
                    to="/news"
                    onClick={() => setMenuOpen(false)}
                    className="
                      text-[17px]
                      font-medium
                      text-[#1497d4]
                      transition
                      hover:opacity-60
                    "
                  >
                    News
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="
                      text-[17px]
                      font-medium
                      text-[#1497d4]
                      transition
                      hover:opacity-60
                    "
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        {/* ===================================================
            RIGHT SIDE
            HIDDEN ON SMALL/MOBILE
        =================================================== */}
        <aside
          className="
            hidden
            w-full
            flex-col
            bg-white
            lg:flex
            lg:h-[calc(100vh-72px)]
            lg:w-[28.5%]
          "
        >

          {/* Description */}
          <div
            className="
              flex
              h-[42%]
              items-start
              px-8
              pt-12
              xl:px-12
              xl:pt-14
            "
          >
            <p
              className="
                max-w-[350px]
                text-[20px]
                font-basis-web
                leading-[26px]
                text-[#c8b8a8]
                xl:text-[20px]
              "
            >
              An industry-leading production company founded by people who
              believe in the power of nonfiction visual storytelling.
            </p>
          </div>

          {/* ===================================================
              IMAGE SLIDER WITH VERTICAL SLIDE (BOTTOM TO TOP)
              INCLUDING BUTTON
          =================================================== */}
          <div
            className="
              relative
              h-[58%]
              w-full
              overflow-hidden
              bg-gray-100
            "
            onMouseEnter={() => setIsSliderHovered(true)}
            onMouseLeave={() => setIsSliderHovered(false)}
          >

            {/* Image Container with Vertical Slide Animation */}
            <div 
              className="relative h-full w-full"
              style={{
                transform: `translateY(-${currentImage * 100}%)`,
                transition: 'transform 700ms ease-in-out'
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="absolute w-full"
                  style={{ 
                    top: `${index * 100}%`,
                    height: '100%'
                  }}
                >
                  <img
                    src={image}
                    alt={`Blue Chalk project ${index + 2}`}
                    className="h-full w-full object-cover"
                  />
                  
                  {/* =============================================
                      WHAT LASTS BOX - Inside each slide
                  ============================================= */}
                  <div
                    className={`
                      absolute
                      bottom-5
                      right-5
                      z-20
                      flex
                      h-[48px]
                      w-[150px]
                      items-center
                      justify-start
                      px-3
                      transition
                      duration-300
                      text-[13px]
                      font-medium
                      text-white
                      sm:h-[52px]
                      sm:w-[170px]
                      lg:h-[65px]
                      lg:w-[180px]
                      ${isSliderHovered ? 'bg-[#1989c2]' : 'bg-black/60'}
                    `}
                  >
                    What Lasts
                    <FiPlus
                      className="
                        absolute
                        right-1.5
                        top-1.5
                        text-base
                        sm:right-2
                        sm:top-2
                        sm:text-lg
                        lg:text-xl
                        xl:text-2xl
                      "
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-0 h-32 sm:h-36 md:h-40 bg-gradient-to-t from-[#265b7a] via-[#1989c2]/2 to-transparent pointer-events-none" />

          </div>
        </aside>
      </section>

      {/* =====================================================
          DESKTOP NAVBAR
          HIDDEN ON MOBILE
      ===================================================== */}
      <nav
        className="
          hidden
          h-[72px]
          w-full
          items-center
          bg-white
          px-20
          lg:flex
        "
      >
        <div className="flex items-center ml-4 gap-24 font-basis-web">
          <Link
            to="/about"
            className="
              text-[17px]
              font-medium
              text-[#1497d4]
              transition
              hover:opacity-60
              leading-[17px]
            "
          >
            About
          </Link>
          <Link
            to="/work"
            className="
              text-[17px]
              font-medium
              text-[#1497d4]
              transition
              hover:opacity-60
              leading-[17px]
            "
          >
            Work
          </Link>
          <Link
            to="/news"
            className="
              text-[17px]
              font-medium
              text-[#1497d4]
              transition
              hover:opacity-60
              leading-[17px]
            "
          >
            News
          </Link>
          <Link
            to="/contact"
            className="
              text-[17px]
              font-medium
              text-[#1497d4]
              transition
              hover:opacity-60
              leading-[17px]
            "
          >
            Contact
          </Link>
        </div>
      </nav>

    </main>
  );
};

export default Home;