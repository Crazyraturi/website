import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set(logoRef.current, { opacity: 0, y: -60 });
    gsap.set(menuItemsRef.current, { opacity: 0, y: -40 });
    gsap.set(buttonRef.current, { opacity: 0, y: -60 });

    // Increased delay from 1.5s to 2.5s before navbar animation starts
    const tl = gsap.timeline({ delay: 3 });
    
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

  return (
    <div className="fixed top-0 left-0  w-full z-50   flex justify-between px-40 items-center py-6">
      {/* logo */}
      <div>
        <img ref={logoRef} className="w-20" src={logo} alt="logo" style={{ transformOrigin: 'center center' }} />
      </div>
      {/* nav-menu */}
      <div className="flex text-2xl font-semibold nav-item   gap-10">
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
            className="text-xl text-white hover:text-gray-200 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
      {/* button */}
      <div>
        <button
          ref={buttonRef}
          className="text-xl bg-transparent nav-item text-white border border-white hover:bg-white hover:text-black transition-colors rounded-2xl px-6 py-2"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
