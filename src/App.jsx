import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "remixicon/fonts/remixicon.css";
import TeamSection from "./TeamSection";
import Sidebar from "./sidebar";
import CompetitionsSection from "./CompetitionsSection";
import GallerySection from "./GallerySection";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Pinned scroll-driven "X" Mask Zoom & Hero Entrance Animation
  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    // 1. Initial states for mask overlay & scroll prompt
    gsap.set(".vi-mask-group", {
      scale: 1,
      rotate: 0,
      transformOrigin: "50% 50%",
    });

    gsap.set(".intro-mask-overlay", {
      opacity: 1,
      visibility: "visible",
    });

    gsap.set(".scroll-to-enter-pill", {
      opacity: 1,
      y: 0,
    });

    // 2. Initial states for Hero scene layers (controlled strictly by ScrollTrigger)
    gsap.set(".hero-sky-layer", {
      scale: isMobile ? 1.4 : 1.3,
      rotate: -10,
      transformOrigin: "50% 50%",
    });

    gsap.set(".hero-bg-layer", {
      scale: isMobile ? 1.5 : 1.4,
      rotate: -4,
      transformOrigin: "50% 50%",
    });

    gsap.set(".hero-text-scroll", {
      scale: 1.25,
      rotate: -8,
      opacity: 0.35,
      y: -30,
      transformOrigin: "50% 50%",
    });

    gsap.set(".hero-character-scroll", {
      scale: isMobile ? 0.7 : 0.5,
      y: isMobile ? 180 : 260,
      rotate: -10,
      opacity: 0.25,
      transformOrigin: "50% 100%",
    });

    gsap.set(".navbar", {
      opacity: 0,
      y: -25,
    });

    gsap.set(".btmbar", {
      opacity: 0,
      y: 25,
    });

    // Master Scroll-driven timeline pinned to the hero container
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-scroll-container",
        start: "top top",
        end: "+=1200",
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Step A: Scroll prompt fades out promptly
    tl.to(
      ".scroll-to-enter-pill",
      {
        opacity: 0,
        y: -25,
        duration: 0.18,
        ease: "power1.out",
      },
      0
    );

    // Step B: "X" Mask zooms in massively to reveal the hero world
    tl.to(
      ".vi-mask-group",
      {
        scale: isMobile ? 22 : 30,
        rotate: 12,
        duration: 1,
        ease: "power2.inOut",
        transformOrigin: "50% 50%",
      },
      0
    );

    // Step C: Mask overlay smoothly dissolves as it reaches full unmask
    tl.to(
      ".intro-mask-overlay",
      {
        opacity: 0,
        duration: 0.35,
        ease: "power1.inOut",
      },
      0.65
    );

    // Step D: Hero background & scenery straighten and scale into position
    tl.to(
      ".hero-sky-layer",
      {
        scale: isMobile ? 1.2 : 1.08,
        rotate: 0,
        duration: 0.85,
        ease: "power2.out",
      },
      0.1
    );

    tl.to(
      ".hero-bg-layer",
      {
        scale: isMobile ? 1.2 : 1.08,
        rotate: 0,
        duration: 0.85,
        ease: "power2.out",
      },
      0.1
    );

    // Step E: Title text straightens, scales to 1, and settles perfectly centered
    tl.to(
      ".hero-text-scroll",
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power2.out",
      },
      0.1
    );

    // Step F: Character rises smoothly up into view
    tl.to(
      ".hero-character-scroll",
      {
        scale: 1,
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 0.85,
        ease: "power2.out",
      },
      0.15
    );

    // Step G: Navbar and bottom bar fade in
    tl.to(
      ".navbar",
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power1.out",
      },
      0.65
    );

    tl.to(
      ".btmbar",
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power1.out",
      },
      0.65
    );
  }, []);

  // Desktop Mousemove parallax effect (isolated to separate child layers)
  useGSAP(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return;

      // Only calculate parallax when viewing hero area
      if (window.scrollY > window.innerHeight * 2) return;

      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      // Isolated parallax layers — no property collision with ScrollTrigger!
      gsap.to(".hero-text-parallax", {
        x: xMove * 0.35,
        duration: 0.4,
        ease: "power1.out",
        overwrite: "auto",
      });

      gsap.to(".hero-sky-parallax", {
        x: xMove * 0.6,
        duration: 0.4,
        ease: "power1.out",
        overwrite: "auto",
      });

      gsap.to(".hero-bg-parallax", {
        x: xMove * 1.5,
        duration: 0.4,
        ease: "power1.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Scroll navigation helpers
  const handleScrollToEnter = () => {
    window.scrollTo({
      top: 1300,
      behavior: "smooth",
    });
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main w-full">
        {/* HERO SCROLL CONTAINER (PINNED BY GSAP) */}
        <div
          id="home"
          className="hero-scroll-container relative w-full h-screen bg-black overflow-hidden"
        >
          {/* HERO STAGE */}
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            {/* NAVBAR */}
            <div className="navbar absolute top-0 left-0 z-[15] w-full py-5 px-5 sm:py-8 sm:px-10 flex items-center justify-between pointer-events-none">
              <div className="logo flex items-center gap-3 sm:gap-6 pointer-events-auto">
                {/* HAMBURGER MENU */}
                <div
                  className="lines flex flex-col gap-1 sm:gap-[5px] cursor-pointer"
                  onClick={() => setSidebarOpen(true)}
                  aria-label="Open menu"
                >
                  <div className="line w-8 sm:w-14 h-1 sm:h-2 bg-white rounded-full"></div>
                  <div className="line w-5 sm:w-8 h-1 sm:h-2 bg-white rounded-full"></div>
                  <div className="line w-3 sm:w-5 h-1 sm:h-2 bg-white rounded-full"></div>
                </div>

                <h3 className="text-2xl sm:text-4xl leading-none text-white tracking-wider">
                  C-CODES
                </h3>
              </div>
            </div>

            {/* HERO IMAGES & LAYERS */}
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              {/* SKY LAYER */}
              <div className="hero-sky-layer absolute inset-0 w-full h-full pointer-events-none select-none">
                <img
                  className="hero-sky-parallax w-full h-full object-cover scale-[1.2]"
                  src="./bg.webp"
                  alt="Sky"
                />
              </div>

              {/* CITY BACKGROUND LAYER */}
              <div className="hero-bg-layer absolute inset-0 w-full h-full pointer-events-none select-none">
                <img
                  className="hero-bg-parallax w-full h-full object-cover scale-[1.3]"
                  src="./assets/bg.webp"
                  alt="City"
                />
              </div>

              {/* CHARACTER LAYER */}
              <div className="hero-character-scroll absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden z-[5]">
                <img
                  className="max-w-none h-[72vh] sm:h-[82vh] lg:h-[92vh] object-contain pointer-events-none select-none"
                  src="./fore.webp"
                  alt="Character"
                />
              </div>

              {/* TITLE TEXT — Positioned lower down on mobile (top-28 sm:top-24) and in front of character (z-10) */}
              <div className="hero-text-scroll absolute top-28 sm:top-24 md:top-24 left-0 w-full px-4 text-center pointer-events-none select-none flex flex-col items-center justify-center z-10 text-white">
                <div className="hero-text-parallax flex flex-col items-center text-white">
                  <h1 className="text-[14vw] sm:text-[12vw] md:text-[9.5vw] lg:text-[10.5rem] xl:text-[11.5rem] leading-none uppercase tracking-wide text-white drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)] select-none">
                    inspirus-X
                  </h1>

                  {/* TAGLINE: MAKE IT HAPPEN */}
                  <div className="hero-tagline flex items-center justify-center gap-3 sm:gap-5 mt-1 sm:mt-2">
                    <span className="h-[2px] w-6 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#ff2a6d] to-white shadow-[0_0_10px_#ff2a6d]" />
                    <p className="text-[5vw] sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.12em] sm:tracking-[0.18em] text-white uppercase select-none">
                      MAKE IT HAPPEN
                    </p>
                    <span className="h-[2px] w-6 sm:w-16 md:w-24 bg-gradient-to-l from-transparent via-[#ff2a6d] to-white shadow-[0_0_10px_#ff2a6d]" />
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full px-5 py-5 sm:px-10 sm:py-8 bg-gradient-to-t from-black via-black/80 to-transparent z-10 flex items-center justify-between pointer-events-auto">
              <div
                className="flex gap-3 items-center cursor-pointer group"
                onClick={handleScrollDown}
              >
                <i className="text-2xl sm:text-3xl ri-arrow-down-line animate-bounce text-red-500 group-hover:text-white transition-colors"></i>
                <h3 className="text-base sm:text-xl tracking-wider font-[Helvetica_Now_Display] group-hover:text-red-400 transition-colors">
                  Scroll Down
                </h3>
              </div>
            </div>
          </div>

          {/* SVG "X" INTRO MASK OVERLAY */}
          <div className="intro-mask-overlay absolute top-0 left-0 z-30 w-full h-full overflow-hidden bg-black pointer-events-none flex items-center justify-center">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <mask id="viMask">
                  <rect width="100%" height="100%" fill="black" />
                  <g className="vi-mask-group" style={{ transformOrigin: "50% 50%" }}>
                    <text
                      x="50%"
                      y="50%"
                      fontSize="128"
                      textAnchor="middle"
                      fill="white"
                      dominantBaseline="middle"
                      fontFamily="'pricedown', 'Arial Black', Impact, sans-serif"
                      fontWeight="900"
                      letterSpacing="2"
                    >
                      X
                    </text>
                  </g>
                </mask>
              </defs>

              <image
                href="./bg.webp"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#viMask)"
              />
            </svg>

            {/* SCROLL TO ENTER PILL BUTTON */}
            <div
              className="scroll-to-enter-pill absolute bottom-20 sm:bottom-14 md:bottom-12 left-1/2 -translate-x-1/2 z-40 pointer-events-auto cursor-pointer"
              onClick={handleScrollToEnter}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-black/90 border border-white/25 backdrop-blur-lg shadow-[0_0_35px_rgba(255,42,109,0.5),0_10px_30px_rgba(0,0,0,0.9)] hover:border-[#ff2a6d] hover:shadow-[0_0_45px_rgba(255,42,109,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 group">
                <i className="ri-mouse-line text-lg sm:text-xl text-[#ff2a6d] animate-bounce group-hover:scale-110 transition-transform"></i>
                <span className="text-xs sm:text-sm font-extrabold tracking-[0.22em] text-white uppercase select-none font-[Helvetica_Now_Display]">
                  SCROLL TO ENTER
                </span>
                <i className="ri-arrow-down-line text-base sm:text-lg text-[#ff2a6d] animate-pulse"></i>
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div
          id="about"
          className="w-full min-h-screen flex items-center justify-center bg-black relative overflow-hidden py-16 sm:py-24 px-5 sm:px-10"
        >
          <div className="cntnr flex flex-col lg:flex-row items-center justify-center text-white w-full max-w-7xl mx-auto gap-10 lg:gap-16">
            <div className="limg relative w-full lg:w-1/2 flex items-center justify-center">
              <video
                className="w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[520px] h-auto rounded-2xl object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                src="/assets/i_1.mp4"
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload noplaybackrate nofullscreen"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src="/assets/i_1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="rg w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left py-4 sm:py-8 lg:py-16">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none uppercase">
                Inspirus
              </h1>

              <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-neutral-300 font-[Helvetica_Now_Display] leading-relaxed max-w-xl">
                FORGED BY C-CODES AND THE DEPARTMENT OF COMPUTER ENGINEERING, THIS FLAGSHIP EVENT UNITES BRILLIANT MINDS FROM GOA AND BEYOND.
                A CLASH OF INNOVATION, SKILL, AND CREATIVITY FOR GLORY, HONOR, AND REWARDS WORTHY OF CHAMPIONS
              </p>
            </div>
          </div>
        </div>

        {/* COMPETITIONS SECTION */}
        <CompetitionsSection />

        {/* GALLERY SECTION */}
        <GallerySection />

        {/* TEAM SECTION */}
        <div id="teams">
          <TeamSection />
        </div>
      </div>
    </>
  );
}

export default App;
