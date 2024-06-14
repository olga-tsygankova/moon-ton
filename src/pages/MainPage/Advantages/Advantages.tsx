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
        // console.log(event.deltaY);
        setStage(stage => stage > 300 ? 301 : stage + event.deltaY / 5);
      }
    }, []);

  const handleScrollText = useCallback((entry: IntersectionObserverEntry) => {
    if (!entry.isIntersecting) return;
    if (isScrollControlled) return;
    setIsScrollControlled(true);
    if (!isScrollControlled) {
      blockScroll();
      console.log('isScrollControlled');
      console.log(isScrollControlled);
    }

    document.addEventListener('wheel', handleYScroll);

    return () => document.removeEventListener('wheel', handleYScroll);

  }, [isScrollControlled, blockScroll, handleYScroll]);

  useEffect(() => {
    if (stage < 300) return;
    setIsScrollControlled(true);
    allowScroll();
    console.log('stage');
    console.log(stage);
    document.removeEventListener('wheel', handleYScroll);
  }, [stage, handleYScroll]);

  const { createObserver, ref: bottomRef } = useObserver(handleScrollText, smallPlanetRef);

  useEffect(() => {
    const clearObserver = createObserver();

    return clearObserver();
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
