import React, { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

export const galleryItems = [
  {
    id: 1,
    src: "gallery/IMG_20251010_120907558.webp",
    alt: "Inaugural Ceremony & Stage Kickoff",
    title: "Inaugural Ceremony & Stage Kickoff",
    number: "01",
  },
  {
    id: 2,
    src: "gallery/IMG_6800.webp",
    alt: "Arena Gathering & Welcome",
    title: "Arena Gathering & Welcome",
    number: "02",
  },
  {
    id: 3,
    src: "gallery/IMG_6807.webp",
    alt: "Auditorium Energy & Keynotes",
    title: "Auditorium Energy & Keynotes",
    number: "03",
  },
  {
    id: 4,
    src: "gallery/IMG_6808.webp",
    alt: "Dignitaries & Faculty Panel",
    title: "Dignitaries & Faculty Panel",
    number: "04",
  },
  {
    id: 5,
    src: "gallery/IMG_6815.webp",
    alt: "Lighting the Inaugural Lamp",
    title: "Lighting the Inaugural Lamp",
    number: "05",
  },
  {
    id: 6,
    src: "gallery/IMG_6816.webp",
    alt: "Inspirus Flagship Reveal",
    title: "Inspirus Flagship Reveal",
    number: "06",
  },
  {
    id: 7,
    src: "gallery/IMG_6961.webp",
    alt: "24-Hour Inspirathon Hackathon",
    title: "24-Hour Inspirathon Hackathon",
    number: "07",
  },
  {
    id: 8,
    src: "gallery/IMG_6976.webp",
    alt: "Intense Coding Arena Battles",
    title: "Intense Coding Arena Battles",
    number: "08",
  },
  {
    id: 9,
    src: "gallery/IMG_7913.webp",
    alt: "UI/UX Design Sprint Reviews",
    title: "UI/UX Design Sprint Reviews",
    number: "09",
  },
  {
    id: 10,
    src: "gallery/IMG_7914.webp",
    alt: "Prompt Engineering & Logic War",
    title: "Prompt Engineering & Logic War",
    number: "10",
  },
  {
    id: 11,
    src: "gallery/IMG_7946.webp",
    alt: "Blind Coding Terminal Focus",
    title: "Blind Coding Terminal Focus",
    number: "11",
  },
  {
    id: 12,
    src: "gallery/IMG_8109.webp",
    alt: "ExQuizite Rapid Trivia Arena",
    title: "ExQuizite Rapid Trivia Arena",
    number: "12",
  },
  {
    id: 13,
    src: "gallery/IMG_8216.webp",
    alt: "Victory Moments & Trophy Lift",
    title: "Victory Moments & Trophy Lift",
    number: "13",
  },
  {
    id: 14,
    src: "gallery/IMG_8264.webp",
    alt: "Prize Distribution Ceremony",
    title: "Prize Distribution Ceremony",
    number: "14",
  },
  {
    id: 15,
    src: "gallery/IMG_8284.webp",
    alt: "Team Triumphs & Certificates",
    title: "Team Triumphs & Certificates",
    number: "15",
  },
  {
    id: 16,
    src: "gallery/IMG_8340.webp",
    alt: "Valedictory High Spirits",
    title: "Valedictory High Spirits",
    number: "16",
  },
  {
    id: 17,
    src: "gallery/IMG_8530.webp",
    alt: "Grand Finale Celebrations",
    title: "Grand Finale Celebrations",
    number: "17",
  },
  {
    id: 18,
    src: "gallery/IMG_8539.webp",
    alt: "Organizing Committee Memories",
    title: "Organizing Committee Memories",
    number: "18",
  },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const thumbRailRef = useRef(null);
  const lightboxThumbRailRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  const total = galleryItems.length;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openLightbox = (index) => {
    window.history.pushState({ inspirusModal: "galleryLightbox" }, "");
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = (fromPopState = false) => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
    if (!fromPopState && window.history.state?.inspirusModal === "galleryLightbox") {
      window.history.back();
    }
  };

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state?.inspirusModal !== "galleryLightbox") {
        setLightboxIndex(null);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play timer (Fast 2.0s speed)
  useEffect(() => {
    if (!isAutoPlaying || isHovered || lightboxIndex !== null) return;
    const interval = setInterval(goNext, 2000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, lightboxIndex, goNext]);

  // Scroll active thumbnail into center view in the main carousel filmstrip WITHOUT scrolling the window
  useEffect(() => {
    if (thumbRailRef.current) {
      const activeThumb = thumbRailRef.current.querySelector(".filmstrip-thumb.active");
      if (activeThumb) {
        const rail = thumbRailRef.current;
        const targetScrollLeft =
          activeThumb.offsetLeft - rail.clientWidth / 2 + activeThumb.offsetWidth / 2;
        rail.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  // Scroll active thumbnail into center view in the lightbox thumbnail strip WITHOUT scrolling the window
  useEffect(() => {
    if (lightboxIndex !== null && lightboxThumbRailRef.current) {
      const activeThumb = lightboxThumbRailRef.current.querySelector(".lightbox-thumb.active");
      if (activeThumb) {
        const rail = lightboxThumbRailRef.current;
        const targetScrollLeft =
          activeThumb.offsetLeft - rail.clientWidth / 2 + activeThumb.offsetWidth / 2;
        rail.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: "smooth",
        });
      }
    }
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextLightbox();
        if (e.key === "ArrowLeft") prevLightbox();
      } else {
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextLightbox, prevLightbox, goNext, goPrev]);

  // Touch Swipe Handlers for Main Carousel
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;
    // Only trigger horizontal swipe if deltaX > deltaY
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
      if (diffX > 0) {
        goNext();
      } else {
        goPrev();
      }
    }
  };

  // Touch Swipe Handlers for Lightbox
  const handleLightboxTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
      if (diffX > 0) {
        nextLightbox();
      } else {
        prevLightbox();
      }
    }
  };

  // Helper to compute relative circular offset from current index (-total/2 to +total/2)
  const getOffset = (index) => {
    let diff = index - currentIndex;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  };

  // Get semantic position class name
  const getPositionClass = (offset) => {
    if (offset === 0) return "slide-pos-0 active-slide";
    if (offset === 1) return "slide-pos-p1 right-slide";
    if (offset === -1) return "slide-pos-m1 left-slide";
    if (offset === 2) return "slide-pos-p2 right-slide";
    if (offset === -2) return "slide-pos-m2 left-slide";
    return "slide-pos-hidden";
  };

  return (
    <>
      <section id="gallery" className="gallery-section">
        {/* Background grid and glows */}
        <div className="gallery-background-grid" />
        <div className="gallery-ambient-glow" />

        {/* Section Header */}
        <div className="gallery-header">
          <div className="gallery-eyebrow">
            <span className="eyebrow-line" />
            <span>INSPIRUS ARCHIVES</span>
            <span className="eyebrow-line" />
          </div>

          <h1 data-text="GALLERY">GALLERY</h1>

          <p className="gallery-subtitle">
            RELIVE THE INTENSITY, INNOVATION, AND GLORY OF INSPIRUS
          </p>
        </div>

        {/* 3D Carousel Stage */}
        <div
          className="cyber-carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main 3D Track */}
          <div className="cyber-carousel-stage">
            {galleryItems.map((item, index) => {
              const offset = getOffset(index);
              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              const posClass = getPositionClass(offset);

              return (
                <div
                  key={item.id}
                  className={`cyber-carousel-slide ${posClass}`}
                  style={{
                    zIndex: 10 - Math.abs(offset),
                  }}
                  onClick={() => {
                    if (isCenter) {
                      openLightbox(currentIndex);
                    } else {
                      goToSlide(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={item.title}
                >
                  <div className="cyber-slide-card">
                    {/* Media */}
                    <div className="cyber-slide-media">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="cyber-slide-img"
                        loading={Math.abs(offset) <= 1 ? "eager" : "lazy"}
                      />
                      <div className="cyber-slide-shine" />
                    </div>

                    {/* Corner Cyber Accents */}
                    <div className="cyber-slide-corners">
                      <span className="corner top-left" />
                      <span className="corner top-right" />
                      <span className="corner bottom-left" />
                      <span className="corner bottom-right" />
                    </div>

                    {/* Number Badge */}
                    <div className="cyber-slide-badge">
                      <span>#{item.number}</span>
                    </div>

                    {/* Expand icon on hover (no text captions) */}
                    {isCenter && (
                      <div className="cyber-slide-expand-hint">
                        <i className="ri-fullscreen-line" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            className="carousel-nav-btn prev"
            onClick={goPrev}
            aria-label="Previous Slide"
          >
            <i className="ri-arrow-left-s-line" />
          </button>

          <button
            type="button"
            className="carousel-nav-btn next"
            onClick={goNext}
            aria-label="Next Slide"
          >
            <i className="ri-arrow-right-s-line" />
          </button>
        </div>

        {/* Carousel HUD Controls & Progress */}
        <div className="carousel-hud-bar">
          <div className="hud-status">
            <span className="hud-dot" />
            <span className="hud-text">
              PHOTO {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>

          <div className="hud-progress-track">
            <div
              className={`hud-progress-fill ${
                isAutoPlaying && !isHovered ? "running" : "paused"
              }`}
              key={currentIndex}
            />
          </div>

          <button
            type="button"
            className="hud-play-toggle"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? "Pause Auto-Slide" : "Play Auto-Slide"}
          >
            <i className={isAutoPlaying ? "ri-pause-fill" : "ri-play-fill"} />
            <span>{isAutoPlaying ? "FAST AUTOPLAY" : "PAUSED"}</span>
          </button>
        </div>

        {/* Thumbnails Filmstrip Rail */}
        <div className="carousel-filmstrip-wrap">
          <div className="carousel-filmstrip" ref={thumbRailRef}>
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`filmstrip-thumb ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Jump to photo ${item.number}`}
              >
                <img src={item.src} alt={item.alt} />
                <span className="filmstrip-idx">#{item.number}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null &&
        createPortal(
          <div className="gallery-lightbox" onClick={closeLightbox}>
            <div
              className="gallery-lightbox-modal"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleLightboxTouchEnd}
            >
              {/* Lightbox Topbar */}
              <div className="lightbox-topbar">
                <div className="lightbox-meta">
                  <span className="lightbox-badge">
                    MOMENT #{galleryItems[lightboxIndex].number}
                  </span>
                  <h3 className="lightbox-title">
                    {galleryItems[lightboxIndex].title}
                  </h3>
                </div>

                <div className="lightbox-actions">
                  <span className="lightbox-counter">
                    {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
                    {String(galleryItems.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    className="lightbox-close-btn"
                    onClick={closeLightbox}
                    aria-label="Close Lightbox"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Lightbox Stage */}
              <div className="lightbox-stage">
                <button
                  type="button"
                  className="lightbox-nav-btn prev"
                  onClick={prevLightbox}
                  aria-label="Previous Image"
                >
                  <i className="ri-arrow-left-s-line" />
                </button>

                <div className="lightbox-image-wrap">
                  <img
                    src={galleryItems[lightboxIndex].src}
                    alt={galleryItems[lightboxIndex].alt}
                    className="gallery-lightbox-image"
                  />
                </div>

                <button
                  type="button"
                  className="lightbox-nav-btn next"
                  onClick={nextLightbox}
                  aria-label="Next Image"
                >
                  <i className="ri-arrow-right-s-line" />
                </button>
              </div>

              {/* Lightbox Thumbnail Strip */}
              <div className="lightbox-thumbnails-strip" ref={lightboxThumbRailRef}>
                {galleryItems.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`lightbox-thumb ${
                      idx === lightboxIndex ? "active" : ""
                    }`}
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <img src={item.src} alt={item.alt} />
                    <span className="thumb-idx">#{item.number}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

