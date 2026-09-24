import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const reticleRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Only enable on desktop/fine pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let reticleX = mouseX;
    let reticleY = mouseY;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const checkHover = (e) => {
      const target = e.target;
      if (
        target &&
        (target instanceof HTMLElement || target instanceof SVGElement) &&
        target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, .clickable, .competition-card, .team-card, .gallery-glass-card, .general-rules-btn, .schedule-btn, .category-tab-btn, .footer-social-btn, .footer-back-to-top, .lines, .detail-back-btn, .detail-register-btn, .coordinator-whatsapp-btn, .footer-register-btn, .footer-back-btn, .competition-modal-close, .competition-modal-done'
        )
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const render = () => {
      // Smooth GTA reticle tracking (lerp)
      reticleX += (mouseX - reticleX) * 0.22;
      reticleY += (mouseY - reticleY) * 0.22;

      if (reticleRef.current) {
        reticleRef.current.style.transform = `translate3d(${reticleX}px, ${reticleY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousemove", checkHover, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted || typeof document === "undefined") return null;

  const cursorContent = (
    <>
      {/* Precision Center Aim Dot */}
      <div
        ref={dotRef}
        className={`gta-cursor-dot ${isVisible ? "visible" : ""} ${
          isHovered ? "hovered" : ""
        } ${isClicked ? "clicked" : ""}`}
      />

      {/* GTA Crosshair / HUD Reticle */}
      <div
        ref={reticleRef}
        className={`gta-cursor-reticle ${isVisible ? "visible" : ""} ${
          isHovered ? "hovered" : ""
        } ${isClicked ? "clicked" : ""}`}
      >
        <svg
          viewBox="0 0 50 50"
          className="gta-reticle-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Targeting Ring */}
          <circle
            cx="25"
            cy="25"
            r="16"
            className="gta-reticle-circle"
          />

          {/* 4 Directional Crosshair Ticks */}
          <line x1="25" y1="2" x2="25" y2="8" className="gta-reticle-crosshair" />
          <line x1="25" y1="42" x2="25" y2="48" className="gta-reticle-crosshair" />
          <line x1="2" y1="25" x2="8" y2="25" className="gta-reticle-crosshair" />
          <line x1="42" y1="25" x2="48" y2="25" className="gta-reticle-crosshair" />

          {/* 4 Tactical Corner Brackets */}
          <path d="M 11 6 L 6 6 L 6 11" className="gta-reticle-bracket" />
          <path d="M 39 6 L 44 6 L 44 11" className="gta-reticle-bracket" />
          <path d="M 6 39 L 6 44 L 11 44" className="gta-reticle-bracket" />
          <path d="M 44 39 L 44 44 L 39 44" className="gta-reticle-bracket" />
        </svg>
      </div>
    </>
  );

  return createPortal(cursorContent, document.body);
}
