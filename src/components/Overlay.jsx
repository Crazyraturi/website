import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import frameImage from "../assets/images/frame.png";
import logo from "../assets/images/logo.png";
import backgroundVideo from "../assets/videos/bg.mp4";
import { gsap } from "gsap";

const Overlay = ({ onClick }) => {
  const navigate = useNavigate();
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const video = videoRef.current;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);




  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (videoRef.current) {
      videoRef.current.playbackRate = 2.5;
      videoRef.current.play();
    }

    // Single animation with continuous scaling and fading
    gsap.to(frameRef.current, {
      duration: 2,
      scale: 5,
      opacity: 0,
      ease: "power2.inOut",
      onComplete: () => {
        if (onClick) onClick();
        navigate("/home");
      },
    });
  };

  return (
    <div className="overlay flex items-center justify-center h-screen  relative overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        muted
        playsInline
      />

      <div className=" z-20 fame-heading absolute flex items-center justify-center pt-7 gap-7 top-0">
        <img className="w-[30%] " src={logo} alt="logo" />
      </div>

      <div className=" frameImg relative flex items-center justify-center">
        <img
          ref={frameRef}
          src={frameImage}
          alt="Frame"
          style={{
            width: "40%",
            display: "block",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
            willChange: "transform",
            transformOrigin: "center center", // Added for better scaling
          }}
        />

        {!isAnimating && (
          <button
            className="absolute left-1/2 top-1/2 transform uppercase  -translate-x-1/2 -translate-y-1/2 bg-[#988579] text-white px-3 py-2 rounded-lg border-2 border-white hover:bg-[#7a6b61] z-20"
            onClick={handleClick}
            style={{
              cursor: "pointer",
              boxShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            click to Explore
          </button>
        )}
      </div>
    </div>
  );
};

export default Overlay;
