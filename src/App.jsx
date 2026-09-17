
import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import TeamSection from "./TeamSection";
import Sidebar from "./Sidebar";
import CompetitionsSection from "./CompetitionsSection";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 14,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    const isMobile = window.innerWidth < 768;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: isMobile ? 1.25 : 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: isMobile ? 1.25 : 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: isMobile ? 0.95 : 0.7,
      x: "-50%",
      bottom: isMobile ? "-4%" : "-18%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return;

      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
        duration: 0.5,
      });

      gsap.to(".sky", {
        x: xMove,
        duration: 0.5,
      });

      gsap.to(".bg", {
        x: xMove * 1.7,
        duration: 0.5,
      });
    };

    main?.addEventListener("mousemove", handleMouseMove);

    return () => {
      main?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showContent]);

  return (
    <>
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Intro Animation */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />

              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="116"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="'Arial Black', Impact, sans-serif"
                  fontWeight="900"
                  letterSpacing="2"
                >
                  X
                </text>
              </g>
            </mask>
          </defs>

          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          {/* HERO SECTION */}
          <div
           id="home"
           className="landing overflow-hidden relative w-full h-screen bg-black">
                                                                              

            {/* NAVBAR */}
            <div className="navbar absolute top-0 left-0 z-[15] w-full py-5 px-5 sm:py-8 sm:px-10 flex items-center justify-between pointer-events-none">
              <div className="logo flex items-center gap-3 sm:gap-6 pointer-events-auto">

                {/* HAMBURGER MENU */}
                <div
                  className="lines flex flex-col gap-1 sm:gap-[5px] cursor-pointer"
                  onClick={() => setSidebarOpen(true)}
                >
                  <div className="line w-8 sm:w-14 h-1 sm:h-2 bg-white rounded-full"></div>
                  <div className="line w-5 sm:w-8 h-1 sm:h-2 bg-white rounded-full"></div>
                  <div className="line w-3 sm:w-5 h-1 sm:h-2 bg-white rounded-full"></div>
                </div>

                <h3 className="text-2xl sm:text-4xl leading-none text-white tracking-wider">
                  Rockstar
                </h3>
              </div>
            </div>

            {/* HERO IMAGES */}
            <div className="imagesdiv relative overflow-hidden w-full h-screen">

              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt="Sky"
              />

              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./assets/bg.png"
                alt="City"
              />

              <div className="text text-white flex flex-col items-center gap-3 absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg] w-full px-4 text-center pointer-events-none">
                <h1 className="text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[11rem] xl:text-[12rem] leading-none uppercase tracking-wide drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] select-none">
                  inspirus
                </h1>
              </div>

              <img
                className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg] max-w-none h-[75vh] sm:h-[85vh] lg:h-[95vh] object-contain pointer-events-none"
                src="./fore.png"
                alt="Character"
              />
            </div>

            {/* BOTTOM BAR */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full px-5 py-5 sm:px-10 sm:py-8 bg-gradient-to-t from-black via-black/80 to-transparent z-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">

              <div className="flex gap-3 items-center cursor-pointer order-2 sm:order-1">
                <i className="text-2xl sm:text-3xl ri-arrow-down-line animate-bounce text-white"></i>

                <h3 className="text-base sm:text-xl tracking-wider font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>

              <div className="order-1 sm:order-2 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2">
                <img
                  className="h-[36px] sm:h-[50px] md:h-[55px] w-auto object-contain"
                  src="./ps5.png"
                  alt="PlayStation 5 & Xbox"
                />
              </div>
            </div>
          </div>

          {/* ABOUT SECTION */}
          <div
           id="about"
           className="w-full min-h-screen flex items-center justify-center bg-black relative overflow-hidden py-16 sm:py-24 px-5 sm:px-10">


            <div className="cntnr flex flex-col lg:flex-row items-center justify-center text-white w-full max-w-7xl mx-auto gap-10 lg:gap-16">

              <div className="limg relative w-full lg:w-1/2 flex items-center justify-center">
                <img
                  className="w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[520px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                  src="./imag.png"
                  alt="Artwork"
                />
              </div>

              <div className="rg w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left py-4 sm:py-8 lg:py-16">

                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none uppercase">
                  Still Running,
                </h1>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none uppercase text-yellow-400 mt-1 sm:mt-2">
                  Not Hunting
                </h1>

                <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-neutral-300 font-[Helvetica_Now_Display] leading-relaxed max-w-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-neutral-400 font-[Helvetica_Now_Display] leading-relaxed max-w-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-neutral-400 font-[Helvetica_Now_Display] leading-relaxed max-w-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>

                <button className="bg-yellow-500 hover:bg-yellow-400 active:scale-95 transition-all duration-300 px-8 py-4 sm:px-10 sm:py-5 text-black mt-8 sm:mt-10 text-xl sm:text-3xl uppercase font-bold cursor-pointer">
                  Download Now
                </button>
              </div>
            </div>
          </div>

          {/* COMPETITIONS SECTION */}
          <CompetitionsSection />
          

          {/* TEAM SECTION */}
          
          <div id="teams">
           <TeamSection />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

