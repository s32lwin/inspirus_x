import React, { useState, useEffect, useCallback } from "react";

const carouselData = [
  {
    title: "EVENT HIGHLIGHTS",
    tag: "GALLERY // 01",
    images: [
      { src: "/gallery/IMG_20251010_120907558.jpg", alt: "Highlight 1" },
      { src: "/gallery/IMG_6800.JPG", alt: "Highlight 2" },
      { src: "/gallery/IMG_6807.JPG", alt: "Highlight 3" },
      { src: "/gallery/IMG_6808.JPG", alt: "Highlight 4" },
      { src: "/gallery/IMG_6815.JPG", alt: "Highlight 5" },
      { src: "/gallery/IMG_6816.JPG", alt: "Highlight 6" },
    ],
  },
  {
    title: "COMPETITIONS",
    tag: "GALLERY // 02",
    images: [
      { src: "/gallery/IMG_6961.JPG", alt: "Competition 1" },
      { src: "/gallery/IMG_6976.JPG", alt: "Competition 2" },
      { src: "/gallery/IMG_7913.JPG", alt: "Competition 3" },
      { src: "/gallery/IMG_7914.JPG", alt: "Competition 4" },
      { src: "/gallery/IMG_7946.JPG", alt: "Competition 5" },
      { src: "/gallery/IMG_8109.JPG", alt: "Competition 6" },
    ],
  },
  {
    title: "CELEBRATIONS",
    tag: "GALLERY // 03",
    images: [
      { src: "/gallery/IMG_8216.JPG", alt: "Celebration 1" },
      { src: "/gallery/IMG_8264.JPG", alt: "Celebration 2" },
      { src: "/gallery/IMG_8284.JPG", alt: "Celebration 3" },
      { src: "/gallery/IMG_8340.JPG", alt: "Celebration 4" },
      { src: "/gallery/IMG_8530.JPG", alt: "Celebration 5" },
      { src: "/gallery/IMG_8539.JPG", alt: "Celebration 6" },
    ],
  },
];

// Combine all images flat for Lightbox view option
const allImages = carouselData.flatMap((c) => c.images);

const SingleGlassCarousel = ({ category, onImageClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % category.images.length);
  }, [category.images.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + category.images.length) % category.images.length
    );
  }, [category.images.length]);

  // Auto-play feature when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <div
      className="liquid-glass-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Liquid glass shine highlight overlay */}
      <div className="liquid-glass-shine" />
      <div className="liquid-glass-glow" />

      {/* Header info */}
      <div className="liquid-glass-header">
        <span className="liquid-glass-tag">{category.tag}</span>
        <h3 className="liquid-glass-title">{category.title}</h3>
      </div>

      {/* Image Container */}
      <div className="liquid-glass-image-wrapper">
        {category.images.map((img, idx) => (
          <div
            key={idx}
            className={`liquid-glass-slide ${
              idx === activeIndex ? "active" : ""
            }`}
            onClick={() => onImageClick(img)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="liquid-glass-slide-overlay">
              <span className="liquid-glass-zoom-btn">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                VIEW FULL
              </span>
            </div>
          </div>
        ))}

        {/* Carousel Navigation Arrows */}
        <button
          className="liquid-glass-nav-btn prev"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          className="liquid-glass-nav-btn next"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      {/* Footer Dots Navigation */}
      <div className="liquid-glass-footer">
        <div className="liquid-glass-dots">
          {category.images.map((_, idx) => (
            <button
              key={idx}
              className={`liquid-glass-dot ${
                idx === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="liquid-glass-counter">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(category.images.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (img) => {
    const idx = allImages.findIndex((i) => i.src === img.src);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxImage(img);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "";
  };

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  }, []);

  useEffect(() => {
    if (!lightboxImage) return;

    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxImage, goNext, goPrev]);

  return (
    <>
      <section id="gallery" className="gallery-section">
        {/* Background grid */}
        <div className="gallery-background-grid" />

        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-eyebrow">
            <span className="eyebrow-line" />
            <span>EXCLUSIVES</span>
            <span className="eyebrow-line" />
          </div>

          <h1 data-text="GALLERY">GALLERY</h1>

          <p className="gallery-subtitle">
            FEATURING 3 INTERACTIVE LIQUID GLASS CAROUSELS
          </p>
        </div>

        {/* 3 Carousels in 1 Row */}
        <div className="liquid-glass-carousel-row">
          {carouselData.map((cat, i) => (
            <SingleGlassCarousel
              key={i}
              category={cat}
              onImageClick={openLightbox}
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ×
            </button>

            <button
              className="gallery-lightbox-nav gallery-lightbox-prev"
              onClick={goPrev}
              aria-label="Previous image"
            >
              ‹
            </button>

            <img
              src={allImages[lightboxIndex].src}
              alt={allImages[lightboxIndex].alt}
              className="gallery-lightbox-image"
            />

            <button
              className="gallery-lightbox-nav gallery-lightbox-next"
              onClick={goNext}
              aria-label="Next image"
            >
              ›
            </button>

            <div className="gallery-lightbox-counter">
              {lightboxIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
