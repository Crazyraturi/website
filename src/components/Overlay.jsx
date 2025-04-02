import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import frameImage from '../assets/images/frame.png';
import backgroundVideo from '../assets/videos/bg.mp4';
import { gsap } from 'gsap';

const Overlay = ({ onClick }) => {
  const navigate = useNavigate();
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Single animation with continuous scaling and fading
    gsap.to(frameRef.current, {
      duration: 2, // Longer single duration
      scale: 5,
      opacity: 0,
      ease: "power2.inOut", // Changed ease for smoother transition
      onComplete: () => {
        if (onClick) onClick();
        navigate('/home');
      }
    });
  };

  return (
    <div className="overlay flex items-center justify-center h-screen bg-black relative overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        muted
        loop
        playsInline
        autoPlay
      />

      <div className="relative flex items-center justify-center">
        <img
          ref={frameRef}
          src={frameImage}
          alt="Frame"
          style={{
            width: '50%',
            display: 'block',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10,
            willChange: 'transform',
            transformOrigin: 'center center' // Added for better scaling
          }}
        />
        
        {!isAnimating && (
          <button
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#988579] text-white px-6 py-3 rounded-lg border-2 border-white hover:bg-[#7a6b61] z-20"
            onClick={handleClick}
            style={{
              cursor: 'pointer',
              boxShadow: '0 0 10px rgba(255,255,255,0.5)'
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
