import { useEffect, useRef, useState } from "react";

import { BlueBtn } from "../../../ui/Buttons/BlueBtn";
import { JoinIcon } from "../../../ui/svg";

import "./Join.css";

const DELAY_LENGTH = 1;

export const Join = () => {
  const joinRef = useRef(null);
  const joinBtnRef = useRef(null);

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      {
        // Элемент должен быть виден на 50% или более, чтобы считаться видимым
        threshold: 0.5,
      },
    );

    if (joinBtnRef.current) observer.observe(joinBtnRef.current);

    return () => {
      if (joinBtnRef.current) {
        observer.unobserve(joinBtnRef.current);
      }
    };
  }, []);

  const handleChangeHeading = (entry: IntersectionObserverEntry) => {
    const headings = entry.target.querySelectorAll("h2");
    if (!headings) return;

    headings.forEach((heading) => {
      const { textContent } = heading;
      if (!textContent) return;
      heading.innerHTML = "";

      const words = textContent.split(" ");
      words.forEach((word) => {
        const letters = word.split("");
        letters.forEach((letter) => {
          const span = document.createElement("span");
          span.textContent = letter;
          if (letter === " ") {
            span.style.color = "#F1F1F1";
          }
          if (["T", "O", "N"].includes(letter)) {
            span.style.color = "#00b0ff"; // Голубой цвет для "T", "O", "N"
          }
          span.style.animationDelay = `${Math.random() * DELAY_LENGTH}s`;
          heading.appendChild(span);
        });
        const space = document.createElement("span");
        space.textContent = " ";
        space.style.display = "inline-block";
        space.style.marginRight = "0.5em";
        heading.appendChild(space);
      });
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            setIsAnimating(true);
            handleChangeHeading(entry);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      },
    );

    if (joinRef.current) observer.observe(joinRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isAnimating]);

  return (
    <>
      <div className="join" ref={joinRef}>
        <div className="join-title">
          <h2>
            <span>Join MoonTON Ecosystem</span>
          </h2>
        </div>

        <div className="join-btn" ref={joinBtnRef}>
          <BlueBtn>
            <JoinIcon />
            Join MoonTON Ecosystem
          </BlueBtn>
        </div>
      </div>
      <section className="beam-footer">
        <span></span>
        <span></span>
        <span></span>
      </section>
    </>
  );
};
