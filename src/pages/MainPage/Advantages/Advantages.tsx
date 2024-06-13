import "./Advantages.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Advantages = () => {
  //TODO анимация с пролистыванием блоков и планетами

  const bigPlanetRef = useRef(null);
  const smallPlanetRef = useRef(null);
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ref.current,
  //       start: "top 0",
  //       end: "bottom 50%",
  //       scrub: true,
  //     },
  //   });
  //
  //   tl.to(bigPlanetRef.current, {
  //     x: "0",
  //     y: "0",
  //     rotation: "0deg",
  //     duration: 0.5,
  //   })
  //     .to(
  //       smallPlanetRef.current,
  //       {
  //         x: "0",
  //         y: "0",
  //         rotation: "0deg",
  //         duration: 0.5,
  //       },
  //       "<",
  //     )
  //     .to(bigPlanetRef.current, {
  //       x: "-90%",
  //       y: "0",
  //       rotation: "-30deg",
  //       duration: 0.5,
  //     })
  //     .to(
  //       smallPlanetRef.current,
  //       {
  //         x: "100%",
  //         y: "0",
  //         rotation: "0deg",
  //         duration: 0.5,
  //       },
  //       "<",
  //     )
  //
  //     .to(bigPlanetRef.current, {
  //       x: "-110%",
  //       y: "130%",
  //       rotation: "-30deg",
  //       duration: 0.5,
  //     })
  //     .to(
  //       smallPlanetRef.current,
  //       {
  //         x: "220%",
  //         y: "-280%",
  //         rotation: "30deg",
  //         duration: 0.5,
  //       },
  //       "<",
  //     );
  //
  //   return () => {
  //     tl.kill();
  //     ScrollTrigger.getAll().forEach((t) => t.kill());
  //   };
  // }, []);
  return (
    <div className="advantages" id="advantages"  ref={ref}>
      <div className="big-planet" ref={bigPlanetRef}>
        <svg
          width="672"
          height="372"
          viewBox="0 0 672 372"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M491.664 215.985C475.078 301.917 391.922 358.154 305.928 341.593C219.935 325.033 163.67 241.946 180.255 156.015C196.841 70.0833 279.998 13.8464 365.991 30.4068C451.985 46.9672 508.25 130.054 491.664 215.985Z"
            fill="url(#paint0_linear_8_555)"
            stroke="url(#paint1_linear_8_555)"
            stroke-width="0.720133"
          />
          <path
            d="M655.106 247.94C652.859 259.6 641.9 269.1 623.785 276.238C605.689 283.369 580.556 288.101 550.171 290.29C489.406 294.668 407.723 288.875 319.528 271.865C231.333 254.855 153.352 229.854 98.5697 203.19C71.1762 189.857 49.6028 176.117 35.4538 162.767C21.2898 149.403 14.6466 136.509 16.8937 124.849C19.1409 113.189 30.0998 103.689 48.2151 96.5507C66.3113 89.4196 91.4444 84.6883 121.829 82.4989C182.594 78.1206 264.277 83.9136 352.472 100.924C440.667 117.934 518.648 142.935 573.43 169.599C600.824 182.932 622.397 196.672 636.546 210.022C650.71 223.386 657.353 236.28 655.106 247.94Z"
            stroke="url(#paint2_linear_8_555)"
            stroke-width="0.720133"
          />
          <path
            d="M630.401 231.042C628.337 241.754 618.279 250.491 601.639 257.062C585.017 263.625 561.931 267.984 534.019 270.006C478.201 274.05 403.167 268.742 322.155 253.117C241.142 237.492 169.514 214.513 119.199 190C94.0396 177.742 74.2281 165.11 61.2368 152.835C48.2307 140.546 42.1408 128.695 44.2053 117.983C46.2698 107.27 56.3273 98.5339 72.9681 91.963C89.5898 85.3995 112.676 81.0407 140.588 79.0187C196.406 74.9751 271.44 80.2826 352.452 95.9074C433.465 111.532 505.093 134.511 555.407 159.025C580.567 171.283 600.379 183.915 613.37 196.19C626.376 208.479 632.466 220.33 630.401 231.042Z"
            stroke="url(#paint3_linear_8_555)"
            stroke-width="0.720133"
          />
          <path
            d="M601.182 216.583C599.339 226.145 590.371 233.954 575.512 239.834C560.672 245.706 540.059 249.61 515.134 251.426C465.29 255.057 398.288 250.331 325.948 236.379C253.608 222.426 189.652 201.895 144.73 179.987C122.266 169.031 104.581 157.74 92.987 146.77C81.378 135.785 75.9552 125.2 77.7979 115.639C79.6406 106.077 88.6083 98.2679 103.467 92.388C118.308 86.5156 138.921 82.6115 163.846 80.7958C213.69 77.1648 280.692 81.8912 353.032 95.8433C425.372 109.795 489.328 130.327 534.25 152.235C556.713 163.191 574.398 174.482 585.993 185.452C597.602 196.437 603.024 207.022 601.182 216.583Z"
            stroke="url(#paint4_linear_8_555)"
            stroke-width="0.720133"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8_555"
              x1="543.036"
              y1="-200.81"
              x2="349.121"
              y2="167.62"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#47BCFC"/>
              <stop offset="1" stop-color="#47BCFC" stop-opacity="0"/>
            </linearGradient>
            <linearGradient
              id="paint1_linear_8_555"
              x1="412.416"
              y1="-38.6084"
              x2="230.451"
              y2="388.037"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#47BCFC"/>
              <stop offset="1" stop-color="#47BCFC" stop-opacity="0"/>
            </linearGradient>
            <linearGradient
              id="paint2_linear_8_555"
              x1="294.711"
              y1="313.114"
              x2="340.522"
              y2="130.185"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient
              id="paint3_linear_8_555"
              x1="299.34"
              y1="291.098"
              x2="341.501"
              y2="122.808"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient
              id="paint4_linear_8_555"
              x1="305.557"
              y1="270.391"
              x2="343.278"
              y2="119.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <section className="beam">
        <span className="beam-advantages" ></span>
        <span className="beam-advantages" ></span>
      </section>
      <div className="text" >
        <h4>Integrability.</h4>
        <p>
          MoonTon provides secure and seamles cross-chain API integration into
          any web3 application
        </p>
      </div>
      <div className="small-planet" ref={smallPlanetRef}>
        <svg
          width="343"
          height="184"
          viewBox="0 0 343 184"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M332.844 43.4057C334.155 49.1988 331.037 55.7975 324.05 62.808C317.077 69.8037 306.329 77.1272 292.601 84.3454C265.149 98.7794 225.855 112.754 181.225 122.838C136.596 132.923 95.1072 137.202 64.1114 135.975C48.6107 135.362 35.7554 133.372 26.4489 130.054C17.1227 126.73 11.467 122.114 10.156 116.321C8.84498 110.528 11.9628 103.929 18.9502 96.9185C25.9229 89.9227 36.6706 82.5993 50.3989 75.381C77.8506 60.947 117.145 46.9725 161.775 36.888C206.404 26.8035 247.893 22.524 278.889 23.7511C294.389 24.3647 307.245 26.3548 316.551 29.6721C325.877 32.9963 331.533 37.6125 332.844 43.4057Z"
            stroke="url(#paint0_linear_8_562)"
            stroke-width="0.720133"
          />
          <path
            d="M309.658 41.4705C310.817 46.5908 308.046 52.438 301.814 58.666C295.596 64.8791 286.014 71.388 273.772 77.8074C249.294 90.6436 214.259 103.083 174.471 112.073C134.683 121.064 97.7011 124.898 70.0774 123.835C56.2628 123.303 44.8099 121.547 36.5223 118.612C28.2147 115.669 23.1955 111.582 22.0367 106.462C20.878 101.342 23.6491 95.4944 29.8814 89.2664C36.0987 83.0534 45.6813 76.5444 57.9229 70.125C82.4012 57.2888 117.436 44.8496 157.224 35.8591C197.012 26.8686 233.994 23.0347 261.618 24.0978C275.432 24.6295 286.885 26.3852 295.173 29.3207C303.48 32.2633 308.5 36.3502 309.658 41.4705Z"
            stroke="url(#paint1_linear_8_562)"
            stroke-width="0.720133"
          />
          <ellipse
            cx="77.3947"
            cy="77.3629"
            rx="77.3947"
            ry="77.3629"
            transform="matrix(0.994355 -0.1061 0.106257 0.994339 84.8849 30.1504)"
            fill="url(#paint2_linear_8_562)"
            fill-opacity="0.37"
          />
          <path
            d="M246.524 90.7052C251.034 132.915 220.459 170.786 178.23 175.291C136.002 179.797 98.1131 149.232 93.6024 107.022C89.0918 64.8126 119.668 26.9418 161.896 22.436C204.124 17.9301 242.013 48.4955 246.524 90.7052Z"
            stroke="url(#paint3_linear_8_562)"
            stroke-opacity="0.54"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8_562"
              x1="178.103"
              y1="147.278"
              x2="162.124"
              y2="52.777"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient
              id="paint1_linear_8_562"
              x1="171.677"
              y1="133.814"
              x2="157.472"
              y2="49.933"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient
              id="paint2_linear_8_562"
              x1="126.125"
              y1="-85.9588"
              x2="74.5679"
              y2="114.622"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient
              id="paint3_linear_8_562"
              x1="169.625"
              y1="13.7251"
              x2="137.766"
              y2="128.553"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
