import './Mission.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import { PortalUp } from '../../../ui/svg';
import { WordSpan } from './WordSpan';

const text =
  'Our mission is to ensure seamless, secure, and efficient omnichain interaction between ton and other blockchain ecosystems';


export const Mission = () => {
  const missionTextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        rootMargin: '0px',
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

  const words = useMemo(() => text.split(' ').reduce(
    (acc, word, index) => (
      [
        ...acc,
        {
          word,
          indexOf: acc[index - 1] ? acc[index - 1].indexOf + acc[index - 1].word.length : 0
        }
      ])
    , [] as { word: string, indexOf: number }[]
  ), []);

  return (
    <div className="mission" id="mission">
      <div className="portal-up">
        <PortalUp/>
      </div>
      <p
        ref={missionTextRef}
        className="mission-text"
      >
        {words.map(({ word, indexOf }) => (
            <WordSpan
              key={`${word}-${indexOf}`}
              word={word}
              indexOf={indexOf}
              isVisible={isVisible}
            />
          )
        )}
      </p>
    </div>
  );
};
