import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Prevent right-click / context menu on all images and videos
document.addEventListener(
  'contextmenu',
  (e) => {
    const target = e.target;
    if (target instanceof HTMLElement || target instanceof SVGElement) {
      if (
        target.matches('img, video, picture, source, canvas, svg') ||
        target.closest('img, video, picture, source, canvas, svg, .gallery-glass-card, .team-card, .coordinator-avatar-wrap, .hero-scene-wrap, .limg, .detail-image-wrap')
      ) {
        e.preventDefault();
        return false;
      }

      // Prevent if element has a background image
      const bg = window.getComputedStyle(target).backgroundImage;
      if (bg && bg !== 'none' && bg.includes('url(')) {
        e.preventDefault();
        return false;
      }
    }
  },
  { capture: true }
);

// Prevent dragging of images and videos
document.addEventListener(
  'dragstart',
  (e) => {
    const target = e.target;
    if (target instanceof HTMLElement || target instanceof SVGElement) {
      if (
        target.matches('img, video, picture, source, canvas') ||
        target.closest('img, video, picture, source, canvas, .gallery-glass-card, .team-card, .coordinator-avatar-wrap, .hero-scene-wrap, .limg, .detail-image-wrap')
      ) {
        e.preventDefault();
        return false;
      }
    }
  },
  { capture: true }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

