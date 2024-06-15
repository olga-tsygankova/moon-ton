import "./SocialLinks.css";
import React from "react";

export const SocialLinks = () => {
  return (
    <div className="social-links">
      <h6> Social Links</h6>
      <div className="web-links">
        <a
          href="https://x.com/MoonTON_bridge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>

        <a
          href="https://t.me/moonton_bridge"
          className="social-links__telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </div>
    </div>
  );
};
