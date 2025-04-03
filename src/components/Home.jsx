import React, { useEffect, useRef } from 'react';
import videoSrc from "../assets/videos/video.mp4";
import { RiCalendarCheckLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { FaUnlock } from "react-icons/fa6";
import { gsap } from 'gsap';

const Home = () => {
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const headingRef3 = useRef(null);
  const bookingSectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure elements exist before animating
    if (!headingRef1.current || !headingRef2.current || !headingRef3.current || !bookingSectionRef.current) {
      console.error("One or more refs are not assigned!");
      return;
    }

    // GSAP Initial State
    gsap.set([headingRef1.current, headingRef2.current, headingRef3.current], { opacity: 0, x: -100 });
    gsap.set(bookingSectionRef.current, { opacity: 0, y: 100 });

    // GSAP Animation Timeline
    const tl = gsap.timeline({ delay: 4.5 });
    tl.to(headingRef1.current, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" })
      .to(headingRef2.current, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }, "-=0.8")
      .to(headingRef3.current, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }, "-=0.8")
      .to(bookingSectionRef.current, { opacity: 1, y: 0, duration: 1.4, ease: "power2.out" }, "-=0.6");

    // Video Loop Fix (Play only first second)
    const handleTimeUpdate = () => {
      if (video.currentTime >= 1) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate); // Cleanup
    };
  }, []);

  return (
    <div className="h-screen w-full relative">
      {/* Attach videoRef */}
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover"
        muted
        autoPlay
        playsInline
        src={videoSrc}
      ></video>

      {/* Light Black Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Heading Section */}
      <div className="absolute inset-0 flex flex-col uppercase justify-center z-10">
        <h3 ref={headingRef1} className="pl-[25%] tracking-wide text-xl text-white">Welcome to River Ranch</h3>
        <h1 ref={headingRef2} className="pl-[25%] text-8xl text-white">Treasure</h1>
        <h1 ref={headingRef3} className="pl-[50%] text-8xl text-white">your holiday</h1>
      </div>

      {/* Booking Section */}
      <div ref={bookingSectionRef} className="absolute inset-0 flex items-end justify-center gap-x-16 text-white pb-20 z-10">
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
            <h3 className="uppercase font-semibold">Guests</h3>
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
          <button className="text-xl bg-transparent border border-white hover:bg-white hover:text-black transition-colors rounded-2xl px-6 py-2">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
