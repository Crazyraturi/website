import React, { useEffect, useRef, useState } from "react";
import frameImage from "/images/frame.png";
import backgroundVideo from "/bg.mp4";
import { gsap } from "gsap";

const Overlay = ({ setShowHome }) => {
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const buttonRef = useRef(null);
  const pageRef = useRef(null);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (videoRef.current) {
      videoRef.current.playbackRate = 3;
      videoRef.current.play();
    }

    gsap.to(buttonRef.current, {
      duration: 1.5,
      opacity: 0,
    });

    gsap.to(frameRef.current, {
      duration: 2.5,
      scale: 6,
      opacity: 0,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(pageRef.current, {
          delay: 0.3,
          scaleX: 2,
          scale: 1.5,
          opacity: 0,
          duration: 0.2,
        });

        setTimeout(() => {
          setShowHome(true);
        }, 0.4 * 1000);
      },
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <>
      <div
        ref={pageRef}
        className="overlay fixed top-0 left-0 flex flex-col items-center justify-center h-screen overflow-hidden z-10"
      >
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
        <div className="w-full h-full relative flex items-center justify-center px-4">
          <img
            ref={frameRef}
            src={frameImage}
            alt="Frame"
            className="sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]"
          />
          <button
            ref={buttonRef}
            onClick={handleClick}
            type="button"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase
                        bg-[#988579] text-white px-4 py-2 cursor-pointer
                        text-sm sm:text-base md:text-lg 
                        rounded-lg border-2 border-white hover:bg-[#7a6b61] z-20"
          >
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default Overlay;
