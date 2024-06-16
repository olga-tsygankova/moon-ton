import { useCallback, useEffect, useRef, useState } from 'react';

import { PlanetBig, PlanetSmall } from '../../../ui/svg';
import './Advantages.css';
import { AdvantagesText } from './AdvantagesText';
import { useIosDetector, useObserver, useScrollBlock } from '../../../hooks';

export const Advantages = () => {
  //TODO анимация с пролистыванием блоков и планетами

  const bigPlanetRef = useRef(null);
  const smallPlanetRef = useRef(null);
  const textBlockRef = useRef(null);
  const ref = useRef<HTMLDivElement>(null);

  const [stage, setStage] = useState(1);
  const [isScrollControlled, setIsScrollControlled] = useState(false);
  const [direction, setDirection] = useState<'backwards' | 'forwards' | 'none'>('none');

  const { blockScroll, allowScroll } = useScrollBlock();
  const isIos = useIosDetector();

  const handleYScroll = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        setStage(stage => Math.min(300, stage + event.deltaY / 3));
        setDirection('forwards');
      } else {
        setStage(stage => Math.max(0, stage + event.deltaY / 3));
        setDirection('backwards');
      }
    }, []);

  let touchstartY = 0;
  let touchendY = 0;

  const handleStartTouch = useCallback((e: TouchEvent) => {
    touchstartY = e.changedTouches[0].screenY;
  }, []);

  const handleEndTouch = useCallback((e: TouchEvent) => {
    touchendY = e.changedTouches[0].screenY;
    // соответствует скроллу вниз
    const deltaY = touchstartY - touchendY;
    if (deltaY > 0) {
      setStage(stage => Math.min(300, stage + deltaY / 2));
      setDirection('forwards');
    }
    if (deltaY < 0) {
      setStage(stage => Math.max(0, stage + deltaY / 2));
      setDirection('backwards');
    }
  }, []);

  const handleScrollText = useCallback((entry: IntersectionObserverEntry) => {
    if (!entry.isIntersecting || isIos) return;
    if (isScrollControlled) return;

    setIsScrollControlled(true);
    // const targetElement = document.querySelector('.advantages-text-container');
    // targetElement!.scrollIntoView({ behavior: 'smooth', block: 'center' });
    blockScroll();
    // setTimeout(() => blockScroll(), 3e2);
    document.addEventListener('wheel', handleYScroll);
    document.addEventListener('touchstart', handleStartTouch);
    document.addEventListener('touchend', handleEndTouch);
  }, [isScrollControlled, blockScroll, handleYScroll, isIos]);

  const handleReleaseBlock = useCallback((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting || isIos || !isScrollControlled) return;
    setIsScrollControlled(false);
  }, [isScrollControlled, isIos]);

  useEffect(() => {
    if (stage > 0 && stage < 300) return;
    allowScroll();
    document.removeEventListener('wheel', handleYScroll);
    document.removeEventListener('touchstart', handleStartTouch);
    document.removeEventListener('touchend', handleEndTouch);
  }, [stage, handleYScroll]);

  const { createObserver } = useObserver(handleScrollText, textBlockRef);
  useEffect(() => createObserver(), [createObserver]);

  const { createObserver: observerRelease } = useObserver(handleReleaseBlock, textBlockRef);
  useEffect(() => observerRelease(), [observerRelease]);

  return (
    <div className="advantages" id="advantages" ref={ref}>
      <div className="big-planet" ref={bigPlanetRef}>
        <PlanetBig />
      </div>
      <section className="beam">
        <span className="beam-advantages" />
        <span className="beam-advantages" />
      </section>
      <div className="advantages-text-container" ref={textBlockRef}>
        <AdvantagesText stage={stage} direction={direction} />
      </div>
      <div className="small-planet" ref={smallPlanetRef}>
        <PlanetSmall />
      </div>
      <div className="bottom-text"/>
    </div>
  );
};
