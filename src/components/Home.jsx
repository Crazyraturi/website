import React from "react";
import video from "../assets/videos/video.mp4";
import { RiCalendarCheckLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { FaUnlock } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="h-screen w-full relative">
      <video
        className="absolute w-full h-full object-cover"
        muted
        loop
        autoPlay
        src={video}
      ></video>

      {/* Light Black Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Butterfly Image Animation */}
      <img
        src="https://www.animatedimages.org/data/media/291/animated-butterfly-image-0079.gif"
        alt="Butterfly"
        className="absolute bottom-2  z-50 left-2 w-24 h-auto animate-moveButterfly"
      />

      <div className="absolute inset-0 flex flex-col uppercase justify-center z-10">
        <h3 className="pl-[25%] hero-heading tracking-wide text-xl text-white">
          Welcome to River Ranch
        </h3>
        <h1 className="pl-[25%] hero-heading text-8xl text-white">
          Treasure
        </h1>
        <h1 className="pl-[50%] hero-heading text-8xl text-white">
          your holiday
        </h1>
      </div>

      <div className="absolute inset-0 flex items-end justify-center gap-x-16 text-white pb-20 z-10">
        <div>
          <div className="flex gap-2 items-center">
            <RiCalendarCheckLine />
            <h3 className="uppercase font-semibold">Check in</h3>
          </div>
          <input className="border-b-2 outline-none" type="text" />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <RiCalendarCheckLine />
            <h3 className="uppercase font-semibold">Check out</h3>
          </div>
          <input className="border-b-2 outline-none" type="text" />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <IoMdPerson />
            <h3 className="uppercase font-semibold">guests</h3>
          </div>
          <input className="border-b-2 outline-none" type="text" />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <FaUnlock />
            <h3 className="uppercase font-semibold">Accommodation</h3>
          </div>
          <input className="border-b-2 outline-none" type="text" />
        </div>
        <div>
          <button className="text-xl bg-transparent nav-item text-white border border-white hover:bg-white hover:text-black transition-colors rounded-2xl px-6 py-2">
            Book Now
          </button>
        </div>
      </div>

      {/* Inline styles for animation */}
      <style>
        {`
          @keyframes moveButterfly {
            0% {
              bottom: 2rem;
              left: 2rem;
              opacity: 0; /* Start invisible */
              transform: scale(0.5); /* Start smaller */
            }
            10% {
              opacity: 1; /* Become visible */
              transform: scale(1.2); /* Pop-up effect */
            }
            20% {
              transform: scale(1); /* Return to normal size */
            }
            95% {
              bottom: 95%;
              left: 95%;
              opacity: 1;
              transform: scale(1);
            }
            100% {
              bottom: 95%;
              left: 95%;
              opacity: 0;
              transform: scale(0.5);
            }
          }
          
          .animate-moveButterfly {
            animation: moveButterfly 15s ease-in-out forwards;
            animation-iteration-count: 1;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
