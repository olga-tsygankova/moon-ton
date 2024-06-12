import "./Mission.css";
import { useEffect, useRef, useState } from "react";

export const Mission = () => {
  const missionTextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  //TODO: разбитую на буквы строку нужно после отработки анимации преобразовать обратно в строчу чтобы был перенос текста

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // Триггерить событие, когда элемент виден на 50% или больше
      },
    );

    if (missionTextRef.current) {
      observer.observe(missionTextRef.current);
    }

    return () => {
      if (missionTextRef.current) {
        observer.unobserve(missionTextRef.current);
      }
    };
  }, []);

  const renderMissionText = () => {
    const text =
      "Our mission is to ensure seamless, secure, and efficient omnichain interaction between ton and other blockchain ecosystems";
    return text.split("").map((char, index) => (
      <span
        key={index}
        style={{
          display: "inline-block",
          animation: `${isVisible ? "colorChangeOnVisible" : "colorChangePerLetter"} ${
            0.1 * (index + 1)
          }s ease-in-out forwards`,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div className="mission">
      <p
        ref={missionTextRef}
        className={`mission-text ${isVisible ? "visible" : ""}`}
      >
        {renderMissionText()}
      </p>
    </div>
  );
};
