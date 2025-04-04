import React, { useRef } from "react";

// animations gsap
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

// icons
import { RiCalendarCheckLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { FaUnlock } from "react-icons/fa6";

// resources
import bgvideo from "/video1.mp4";

const Home = ({ isRendered, onRenderComplete }) => {
  const pageRef = useRef(null);

  // animate the zoom in effect
  useGSAP(() => {
    if (!pageRef.current || !isRendered) return;
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, scale: 2 },
      {
        opacity: 1,
        scale: 1,
        zIndex: 20,
        duration: 0.35,
        onComplete: onRenderComplete,
      }
    );
  }, [pageRef.current, isRendered]);

  return (
    <div
      ref={pageRef}
      className="home fixed top-0 left-0 w-screen  h-screen  z-0"
    >
      {/* top gradient */}
      <div className="h-20 z-10 absolute w-full bg-gradient-to-b from-[#1F7580] to-transparent top-0 left-0"></div>

      {/* Background video */}
      <video
        className="absolute w-screen h-full object-cover "
        src={bgvideo}
        alt="video"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 flex flex-col uppercase justify-center z-10 px-4">
        <div
          className="absolute hidden sm:block left-0 right-0 sm:right-auto max-w-[100%] sm:max-w-[80%] md:max-w-[70%] h-[260px] sm:h-[320px] md:h-[400px] lg:h-[500px] 
                       bg-gradient-to-r from-black/50 to-transparent sm:rounded-r-3xl rounded-none z-[-1]"
        ></div>

        <h3
          className="text-center sm:text-left sm:pl-[15%] md:pl-[20%] lg:pl-[25%] hero-heading tracking-wide text-sm sm:text-base md:text-lg lg:text-xl 
                    text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          Welcome to River Ranch
        </h3>
        <h1
          className="text-center sm:text-left sm:pl-[15%] md:pl-[20%] lg:pl-[25%] hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                    text-white font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
          style={{
            textShadow:
              "0 4px 8px rgba(0, 0, 0, 0.6), 0 6px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          Treasure
        </h1>
        <h1
          className="text-center sm:text-left sm:pl-[25%] md:pl-[30%] lg:pl-[40%] hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                    text-white font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
          style={{
            textShadow:
              "0 4px 8px rgba(0, 0, 0, 0.6), 0 6px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          your holiday
        </h1>

        <div className="flex justify-center mt-8 md:mt-12 lg:mt-16">
          <button
            className="text-base sm:text-lg md:text-xl bg-[#1F7580] text-white border-2 border-white hover:bg-white hover:text-[#1F7580] 
                      transition-colors rounded-full px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 uppercase tracking-wide font-medium 
                      shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="absolute inset-0 flex items-end justify-center pb-6 sm:pb-10 md:pb-16 lg:pb-20 z-10">
        {/* For larger screens - horizontal layout */}
        <div className="hidden md:flex gap-4 lg:gap-8 xl:gap-16 p-4 sm:p-6 rounded-lg bg-black/30 backdrop-blur-sm">
          <div>
            <div className="flex gap-2 items-center">
              <RiCalendarCheckLine className="text-[#1F7580]" />
              <h3 className="uppercase font-semibold text-white text-sm lg:text-base">
                Check in
              </h3>
            </div>
            <input
              className="bg-transparent text-white border-b-2 border-[#1F7580] outline-none w-full"
              type="text"
            />
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <RiCalendarCheckLine className="text-[#1F7580]" />
              <h3 className="uppercase font-semibold text-white text-sm lg:text-base">
                Check out
              </h3>
            </div>
            <input
              className="bg-transparent text-white border-b-2 border-[#1F7580] outline-none w-full"
              type="text"
            />
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <IoMdPerson className="text-[#1F7580]" />
              <h3 className="uppercase font-semibold text-white text-sm lg:text-base">
                guests
              </h3>
            </div>
            <input
              className="bg-transparent text-white border-b-2 border-[#1F7580] outline-none w-full"
              type="text"
            />
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <FaUnlock className="text-[#1F7580]" />
              <h3 className="uppercase font-semibold text-white text-sm lg:text-base">
                Accommodation
              </h3>
            </div>
            <input
              className="bg-transparent text-white border-b-2 border-[#1F7580] outline-none w-full"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
