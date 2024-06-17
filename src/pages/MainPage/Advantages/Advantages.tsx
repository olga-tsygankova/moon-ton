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

  const touchstart = useRef({ x: 0, y: 0 });

  const handleStartTouch = useCallback((e: TouchEvent) => {
    touchstart.current = { x: e.changedTouches[0].screenX, y: e.changedTouches[0].screenY };
  }, []);

  const handleEndTouch = useCallback((e: TouchEvent) => {
    // соответствует скроллу вниз или вправо
    const deltaY = touchstart.current.y - e.changedTouches[0].screenY;
    const deltaX = touchstart.current.x - e.changedTouches[0].screenX;
    touchstart.current.y = 0;
    if (!isIos && deltaY > 10 || isIos && deltaX > 10) {
      setStage(stage => Math.min(300, (Math.floor(stage / 100) + 1) * 100));
      setDirection('forwards');
    }
    if (!isIos && deltaY < -10 || isIos && deltaX < -10) {
      setStage(stage => Math.max(0, (Math.ceil(stage / 100) - 1) * 100));
      setDirection('backwards');
    }
  }, [isIos]);

  const handleScrollText = useCallback((entry: IntersectionObserverEntry) => {
    if (!entry.isIntersecting) return;
    if (isScrollControlled) return;

    setIsScrollControlled(true);

    if (!isIos) blockScroll();
    document.addEventListener('wheel', handleYScroll);
    document.addEventListener('touchstart', handleStartTouch);
    document.addEventListener('touchend', handleEndTouch);
  }, [isScrollControlled, blockScroll, handleYScroll, isIos]);

  const handleReleaseBlock = useCallback((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting || !isScrollControlled) return;
    setIsScrollControlled(false);
    if (isIos) document.removeEventListener('touchstart', handleStartTouch);
    if (isIos) document.removeEventListener('touchend', handleEndTouch);
  }, [isScrollControlled, isIos]);

  useEffect(() => {
    if (stage > 0 && stage < 300) return;
    if (!isIos) allowScroll();
    document.removeEventListener('wheel', handleYScroll);
    if (!isIos) document.removeEventListener('touchstart', handleStartTouch);
    if (!isIos) document.removeEventListener('touchend', handleEndTouch);
  }, [stage, handleYScroll, isIos]);

  const { createObserver } = useObserver(handleScrollText, textBlockRef);
  useEffect(() => createObserver(), [createObserver]);

  const { createObserver: observerRelease } = useObserver(handleReleaseBlock, textBlockRef);
  useEffect(() => observerRelease(), [observerRelease]);

  return (
    <div className="advantages" id="advantages" ref={ref}>

      <div className="big-planet" ref={bigPlanetRef}>
        <PlanetBig />
      </div>
      {/*<section className="beam">*/}
      {/*  <span className="beam-advantages" />*/}
      {/*  <span className="beam-advantages" />*/}
      {/*</section>*/}

      <div className="advantages-text-container" ref={textBlockRef}>
        <AdvantagesText stage={stage} direction={direction} />
      </div>

      <div className="small-planet" ref={smallPlanetRef}>
        <PlanetSmall />
      </div>

    </div>
  );
};
