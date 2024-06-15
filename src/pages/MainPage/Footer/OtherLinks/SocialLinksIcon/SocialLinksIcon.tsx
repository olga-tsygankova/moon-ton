import "./SocialLinksIcon.css";
import { TelegramIcon } from "../../../../../ui/svg/TelegramIcon";
import { TwitterIcon } from "../../../../../ui/svg/TwitterIcon";

export const SocialLinksIcon = () => {
  return (
    <div className="social-links-icon">
      <a
        href="https://x.com/MoonTON_bridge"
        className="social-links__twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://t.me/moonton_bridge"
        className="social-links__telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TelegramIcon />
      </a>
    </div>
  );
};
