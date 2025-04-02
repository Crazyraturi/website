import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import frameImage from '../assets/images/frame.png';
import backgroundVideo from '../assets/videos/bg.mp4';

const Overlay = ({ onClick }) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    onClick();
    setIsAnimating(true); // Start animation
  };

  const handleTransitionEnd = () => {
    if (isAnimating) {
      setTimeout(() => {
        navigate('/home'); // Redirect only after animation completes
      }, 500);
    }
  };

  return (
    <div className="overlay flex items-center justify-center h-screen bg-black relative overflow-hidden">
      {/* ✅ Video auto-plays immediately */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        muted
        loop
        autoPlay
      />

      <div className="relative flex items-center justify-center">
        {/* ✅ Frame enlarges and moves out */}
        <img
          src={frameImage}
          alt="Frame"
          className={`frame-image w-[50%] transition-all duration-1000 ease-out ${
            isAnimating ? 'scale-150 translate-x-[100vw] opacity-0' : ''
          }`}
          onTransitionEnd={handleTransitionEnd}
        />

        {/* ✅ Button to trigger animation */}
        {!isAnimating && (
          <button
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#988579] text-white px-6 py-3 rounded-lg border-2 border-white"
            onClick={handleClick}
          >
            Explore
          </button>
        )}
      </div>
    </div>
  );
};

export default Overlay;
