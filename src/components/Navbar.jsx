import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const buttonRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set(logoRef.current, { opacity: 0, y: -60 });
    gsap.set(menuItemsRef.current, { opacity: 0, y: -40 });
    gsap.set(buttonRef.current, { opacity: 0, y: -60 });
    
    // For hamburger - just set initial position off-screen from top
    if (menuButtonRef.current) {
      gsap.set(menuButtonRef.current, { y: -50, opacity: 1 });
    }

    const tl = gsap.timeline({ delay: 0.3 });
    
    // Logo animation
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    })
    // Menu items animation
    .to(menuItemsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.8")
    // Button animation
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.6")
    // SIMPLE slide from top for hamburger - no opacity animation
    .to(menuButtonRef.current, {
      y: 0,
      duration: 0.5,
      ease: "power1.out"
    }, "-=1.2"); 

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div ref={logoRef} className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase">
          <img 
            src={logo} 
            alt="River Ranch Logo" 
            className="h-12 sm:h-14 md:h-16 lg:h-20"
            style={{ maxWidth: "none" }}
          />
        </div>

        {/* WHITE & BLUE Hamburger menu with simplified slide animation */}
        <div 
          ref={menuButtonRef} 
          className="block md:hidden relative z-50"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md bg-white focus:outline-none"
            style={{
              boxShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Close icon - blue
              <svg className="w-8 h-8" fill="none" stroke="#1F7580" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon - blue
              <svg className="w-8 h-8" fill="none" stroke="#1F7580" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {[
            { label: "Home", path: "#" },
            { label: "About", path: "#" },
            { label: "Accommodation", path: "#" },
            { label: "Gallery", path: "#" },
            { label: "Contact", path: "#" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              ref={(el) => (menuItemsRef.current[index] = el)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Book Now Button - Hidden on smaller screens */}
        <div className="hidden md:block">
          <button
            ref={buttonRef}
            className="text-sm lg:text-base xl:text-xl bg-transparent nav-item text-white border border-white hover:bg-white hover:text-black transition-colors rounded-2xl px-4 py-1 lg:px-6 lg:py-2"
          >
            Book Now
          </button>
        </div>

        {/* Mobile menu dropdown - also themed with white/blue */}
        {isOpen && (
          <div className="md:hidden absolute top-full right-4 mt-2 w-48 bg-white/95 rounded-lg shadow-lg overflow-hidden z-50">
            <div className="flex flex-col p-4 space-y-2">
              {[
                { label: "Home", path: "#" },
                { label: "About", path: "#" },
                { label: "Accommodation", path: "#" },
                { label: "Gallery", path: "#" },
                { label: "Contact", path: "#" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-[#1F7580] text-lg font-semibold tracking-wider hover:bg-[#1F7580] hover:text-white px-4 py-2 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="mt-4 text-base bg-[#1F7580] text-white font-bold border-2 border-[#1F7580] hover:bg-white hover:text-[#1F7580] transition-colors rounded-full px-6 py-2">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
