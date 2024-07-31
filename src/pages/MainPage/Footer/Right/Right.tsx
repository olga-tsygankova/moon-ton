import "./Right.css";
import { Logo } from "../../Header/Logo/Logo";
import { TwitterIcon } from '../../../../ui/svg/TwitterIcon';
import { TelegramIcon } from '../../../../ui/svg/TelegramIcon';
import React from 'react';

export const Right = () => {
  return (
    <div className="right">
      <Logo />
      <span>contact@moontoon.ai</span>
      <div className="ca_coming-soon">
        <div className="ca_text">
          <span className="ca">CA: </span>
          <span className="coming-soon"> coming soon</span>
        </div>
        <div className="copy">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3333 -0.000488281H4.66667C4.48986 -0.000488281 4.32029 0.0697497 4.19526 0.194774C4.07024 0.319798 4 0.489367 4 0.666178V3.99951H0.666667C0.489856 3.99951 0.320287 4.06975 0.195262 4.19477C0.070238 4.3198 0 4.48937 0 4.66618V15.3328C0 15.5097 0.070238 15.6792 0.195262 15.8043C0.320287 15.9293 0.489856 15.9995 0.666667 15.9995H11.3333C11.5101 15.9995 11.6797 15.9293 11.8047 15.8043C11.9298 15.6792 12 15.5097 12 15.3328V11.9995H15.3333C15.5101 11.9995 15.6797 11.9293 15.8047 11.8043C15.9298 11.6792 16 11.5097 16 11.3328V0.666178C16 0.489367 15.9298 0.319798 15.8047 0.194774C15.6797 0.0697497 15.5101 -0.000488281 15.3333 -0.000488281ZM10.6667 14.6662H1.33333V5.33285H10.6667V14.6662ZM14.6667 10.6662H12V4.66618C12 4.48937 11.9298 4.3198 11.8047 4.19477C11.6797 4.06975 11.5101 3.99951 11.3333 3.99951H5.33333V1.33285H14.6667V10.6662Z"
              fill="#F1F1F1"
            />
          </svg>
        </div>
      </div>
      <div className="right-social">
        <a
          href="https://x.com/MoonTON_bridge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon/>
        </a>
        <a
          href="https://t.me/moonton_bridge"
          className="social-links__telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon/>
        </a>

      </div>
    </div>
  );
};
