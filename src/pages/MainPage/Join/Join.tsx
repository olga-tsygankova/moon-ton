import { useCallback, useEffect, useRef, useState } from 'react';

import { BlueBtn } from '../../../ui/Buttons/BlueBtn';
import { JoinIcon } from '../../../ui/svg';

import './Join.css';
import { FooterLine } from '../../../ui/svg/FooterLine';
import ScrollMagic from 'scrollmagic';

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
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
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

  const handleChangeHeading = useCallback((heading: HTMLElement) => {
    const { textContent } = heading;
    if (!textContent) return;
    heading.innerHTML = '';

    const words = textContent.split(' ');
    words.forEach((word) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      const letters = word.split('');
      letters.forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        if (letter === ' ') {
          span.style.color = '#F1F1F1';
        }
        if (['T', 'O', 'N'].includes(letter)) {
          span.style.color = '#00b0ff'; // Голубой цвет для "T", "O", "N"
        }
        span.style.animationDelay = `${Math.random() * DELAY_LENGTH}s`;
        wordSpan.appendChild(span);
      });
      const space = document.createElement('span');
      space.textContent = ' ';
      space.style.display = 'inline-block';
      space.style.marginRight = '0.5em';
      wordSpan.appendChild(space);
      heading.appendChild(wordSpan);
      heading.style.opacity = '1';
    });
  }, []);

  useEffect(() => {
    const heading = document.getElementById('join-animated-heading');
    if (!heading || !isAnimating) return;

    handleChangeHeading(heading);
  }, [isAnimating, handleChangeHeading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            setIsAnimating(true);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (joinRef.current) observer.observe(joinRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isAnimating]);

  const portalJoinBeamRef = useRef<HTMLElement>(null);
  const joinContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Инициализация ScrollMagic
    const controller = new ScrollMagic.Controller();

    // Создание сцены
    const scene = new ScrollMagic.Scene({
      triggerElement: joinContainerRef.current, // элемент, который будет триггером для анимации
      duration: '100%', // длительность анимации (в данном случае, весь экран)
      triggerHook: 'onLeave', // точка срабатывания триггера (при выходе элемента за пределы экрана)
    })
      .setPin(portalJoinBeamRef.current) // элемент, который будет двигаться вместе со скроллом
      .addTo(controller); // добавление сцены в контроллер

    // Очистка при размонтировании компонента
    return () => {
      scene.destroy(true);
      controller.destroy(true);
    };
  }, []);

  return (
    <div ref={joinContainerRef}>
      <div className="join" ref={joinRef} >

        <div className="join-title">
          <h2 id="join-animated-heading">
            Join MoonTON Ecosystem
          </h2>
        </div>

        <div className="join-btn" ref={joinBtnRef}>
          <BlueBtn>
            <JoinIcon/>
            Launch Moon TON
          </BlueBtn>
        </div>
      </div>
      <div className="footer-line" ref={joinContainerRef}>
        <FooterLine/>
      </div>
      <section className="beam-footer" ref={portalJoinBeamRef}>
        <span/>
        <span/>
        <span/>
      </section>
    </div>
  );
};
