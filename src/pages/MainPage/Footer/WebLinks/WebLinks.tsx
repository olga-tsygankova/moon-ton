import "./WebLinks.css";
import React from "react";

export const WebLinks = () => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          window.innerHeight * 0.2;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div className="web-links">
      <h6> Web Links</h6>
      <div className="web-links">
        <a href="#mission" onClick={handleLinkClick}>
          Mission
        </a>

        <a href="#product" onClick={handleLinkClick}>
          Products
        </a>

        <a href="#advantages" onClick={handleLinkClick}>
          Benefits
        </a>
        <a href="#roadmap" onClick={handleLinkClick}>
          Roadmap
        </a>
        <a href="#token" onClick={handleLinkClick}>
          Tokenomics
        </a>
      </div>
    </div>
  );
};
