import React, { useEffect, useRef } from 'react';
import video from "../assets/videos/video.mp4";
import { RiCalendarCheckLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { FaUnlock } from "react-icons/fa6";
import { gsap } from 'gsap';

const Home = () => {
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const headingRef3 = useRef(null);
  const bookingSectionRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set([headingRef1.current, headingRef2.current, headingRef3.current], {
      opacity: 0,
      x: -100
    });
    gsap.set(bookingSectionRef.current, {
      opacity: 0,
      y: 100
    });

    // Increased delay to 4.5s to start after navbar finishes
    const tl = gsap.timeline({ delay: 4.5 });

    tl.to(headingRef1.current, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "power3.out"
    })
    .to(headingRef2.current, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.8")
    .to(headingRef3.current, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.8")
    .to(bookingSectionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.4,
      ease: "power2.out"
    }, "-=0.6");

  }, []);
  
 


 

  return (
  



    <div className="h-screen w-full relative">
      <video
        className=" video absolute w-full h-full object-cover"
        muted
        loop
        autoPlay
        playsinline
        src={video}
        preload='none'
      ></video>

      {/* Light Black Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="absolute inset-0 flex flex-col uppercase justify-center z-10">
        <h3 ref={headingRef1} className="pl-[25%] hero-heading tracking-wide text-xl text-white">
          Welcome to River Ranch
        </h3>
        <h1 ref={headingRef2} className="pl-[25%] hero-heading text-8xl text-white">
          Treasure
        </h1>
        <h1 ref={headingRef3} className="pl-[50%] hero-heading text-8xl text-white">
          your holiday
        </h1>
      </div>

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
    </div>
  );
};

export default Home;   