import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import frameImage from "../assets/images/frame.png";
import backgroundVideo from "../assets/videos/bg.mp4";
import { gsap } from "gsap";

const Overlay = ({ onClick }) => {
  const navigate = useNavigate();
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    
    
    if (headingRef.current) {
      // Make immediately visible with !important equivalent settings
      headingRef.current.style.opacity = "1";
      headingRef.current.style.visibility = "visible";
      headingRef.current.style.display = "block";
      headingRef.current.style.zIndex = "999";
      
      // Skip GSAP for initial setting and use direct DOM manipulation
      setTimeout(() => {
        if (headingRef && headingRef.current) {
          headingRef.current.style.opacity = "1";
        }
      }, 100);
    }
  }, []);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (videoRef.current) {
      videoRef.current.playbackRate = 3;
      videoRef.current.play();
    }

    // Animate the heading to fade out and move up
    gsap.to(headingRef.current, {
      opacity: 0,
      y: -50,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.in"
    });

    // FASTER animation with reduced duration
    gsap.to(frameRef.current, {
      duration: 2.5,
      scale: 6,
      opacity: 0,
      ease: "power2.inOut",
      onComplete: () => {
        if (onClick) onClick();
        navigate("/home");
      },
    });
  };

  return (
    <div className="overlay flex flex-col items-center justify-center h-screen relative overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        muted
        playsInline
        onLoadedMetadata={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0.3;
          }
        }}
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 z-20"></div>

      {/* FIXED: Moved heading to proper position ABOVE the frame */}
      <div className="relative w-full flex flex-col items-center mb-8 z-[999]">
        <h1 
          ref={headingRef}
          className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                    uppercase tracking-wider font-semibold"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif, system-ui",
            
          }}
        >
          River Ranch
        </h1>
      </div>

      {/* Frame Container - Now without the extra margin that was pushing it down */}
      <div className="frameImg relative flex items-center justify-center w-full px-4">
        <img
          ref={frameRef}
          src={frameImage}
          alt="Frame"
          style={{
            width: "90%", // Mobile default
            maxWidth: "650px", // Maximum size on larger screens
            display: "block",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
            willChange: "transform",
            transformOrigin: "center center",
          }}
          className="sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]"
        />

        {!isAnimating && (
          <button
            className="absolute left-1/2 top-1/2 transform uppercase -translate-x-1/2 -translate-y-1/2 
                      bg-[#988579] text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 
                      text-sm sm:text-base md:text-lg 
                      rounded-lg border-2 border-white hover:bg-[#7a6b61] z-20"
            onClick={handleClick}
            style={{
              cursor: "pointer",
              boxShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            Explore
          </button>
        )}
      </div>
    </div>
  );
};

export default Overlay;
