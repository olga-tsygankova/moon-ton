import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { PlanetBig, PlanetSmall } from '../../../ui/svg';
import './Advantages.css';
import { AdvantagesText } from './AdvantagesText';
import { useObserver, useScrollBlock } from '../../../hooks';

export const Advantages = () => {
  //TODO анимация с пролистыванием блоков и планетами

  const bigPlanetRef = useRef(null);
  const smallPlanetRef = useRef(null);
  const ref = useRef<HTMLDivElement>(null);

  const [stage, setStage] = useState(1);
  const [isScrollControlled, setIsScrollControlled] = useState(false);

  const { blockScroll, allowScroll } = useScrollBlock();
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

  const handleYScroll = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        setStage(stage => stage > 300 ? 301 : stage + event.deltaY / 10);
      }
    }, []);

  let touchstartY = 0;
  let touchendY = 0;

  const handleStartTouch = useCallback((e: TouchEvent) => {
    touchstartY = e.changedTouches[0].screenY;
  }, []);

  const handleEndTouch = useCallback((e: TouchEvent) => {
    touchendY = e.changedTouches[0].screenY;
    const deltaY = touchendY - touchstartY;
    console.log('deltaY');
    console.log(deltaY);
    if (deltaY > 0) {
      setStage(stage => stage > 300 ? 301 : stage + deltaY / 5);
    }
  }, []);

  const handleScrollText = useCallback((entry: IntersectionObserverEntry) => {
    if (!entry.isIntersecting) return;
    if (isScrollControlled) return;

    setIsScrollControlled(true);
    blockScroll();
    document.addEventListener('wheel', handleYScroll);
    document.addEventListener('touchstart', handleStartTouch);
    document.addEventListener('touchend', handleEndTouch);
  }, [isScrollControlled, blockScroll, handleYScroll]);

  useEffect(() => {
    if (stage < 300) return;
    allowScroll();
    document.removeEventListener('wheel', handleYScroll);
    document.removeEventListener('touchstart', handleStartTouch);
    document.removeEventListener('touchend', handleEndTouch);
  }, [stage, handleYScroll]);

  const { createObserver, ref: bottomRef } = useObserver(handleScrollText, smallPlanetRef);

  useEffect(() => {
    // createObserver возвращает очищающую функцию
    return createObserver();
  }, [createObserver]);

  return (
    <div className="advantages" id="advantages" ref={ref}>
      <div className="big-planet" ref={bigPlanetRef}>
        <PlanetBig />
      </div>
      <section className="beam">
        <span className="beam-advantages" />
        <span className="beam-advantages" />
      </section>
      <div className="advantages-text-container">
        <AdvantagesText stage={stage} />
      </div>
      <div className="small-planet" ref={smallPlanetRef}>
        <PlanetSmall />
      </div>
      <div ref={bottomRef} />
    </div>
  );
};
