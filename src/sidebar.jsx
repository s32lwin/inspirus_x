import React from "react";

const Sidebar = ({ isOpen, onClose }) => {
  const handleNavigation = (sectionId) => {
    onClose();

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <>
      {/* Dark transparent overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button
          className="sidebar-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>

        <div className="sidebar-content">
          <h2>INSPIRUS</h2>

          <nav>
            <button onClick={() => handleNavigation("home")}>
              HOME
            </button>

            <button onClick={() => handleNavigation("about")}>
              ABOUT
            </button>

            <button onClick={() => handleNavigation("competitions")}>
              COMPETITIONS
            </button>

            <button onClick={() => handleNavigation("teams")}>
              TEAMS
            </button>

            <button onClick={() => handleNavigation("faq")}>
              FAQ
            </button>

            <button onClick={() => handleNavigation("help")}>
              HELP
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;