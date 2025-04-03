import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const buttonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Set initial states
    gsap.set(logoRef.current, { opacity: 0, y: -60 });
    gsap.set(menuItemsRef.current, { opacity: 0, y: -40 });
    gsap.set(buttonRef.current, { opacity: 0, y: -60 });

    const tl = gsap.timeline({ delay: 5 });
    
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    })
    .to(menuItemsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.8")
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.6");
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    
    // Animate mobile menu
    if (!mobileMenuOpen) {
      // Opening animation
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 items-center py-4 md:py-6">
      {/* Logo */}
      <div>
        <img 
          ref={logoRef} 
          className="w-14 sm:w-16 md:w-20" 
          src={logo} 
          alt="logo" 
          style={{ transformOrigin: 'center center' }} 
        />
      </div>

      {/* Desktop Menu - Hidden on mobile */}
      <div className="hidden md:flex text-lg lg:text-xl xl:text-2xl font-semibold nav-item gap-4 lg:gap-6 xl:gap-10">
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

      {/* Mobile Menu Toggle - Blue and White Theme */}
      <div className="md:hidden">
        <button 
          onClick={toggleMobileMenu}
          className="text-white bg-[#1F7580] p-2 rounded-md border border-white"
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Blue and White Theme */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="fixed inset-0 bg-[#1F7580]/95 z-50 flex flex-col items-center justify-center md:hidden"
        >
          <button 
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-white bg-[#1F7580] p-2 rounded-full border-2 border-white"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center space-y-6">
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
                className="text-white text-xl font-semibold tracking-wider hover:bg-white hover:text-[#1F7580] px-6 py-2 rounded-md transition-colors"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <button className="mt-6 text-base bg-white text-[#1F7580] font-bold border-2 border-white hover:bg-transparent hover:text-white transition-colors rounded-full px-8 py-3">
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
