import React, { useCallback, useEffect, useState } from 'react';
import { animated } from 'react-spring';
import cn from 'classnames';

import { CharSpan } from './CharSpan';
import './TextAnimation.css';

const words = ['integrate.', 'empower.', 'bridge.']; // 10 , 8 , 7

type IOpacityParams = number[][]

const getInitialParams = (stringArray: string[]) => stringArray.reduce(
  (acc, item) => {
    return [...acc, Array(item.length).fill(0)];
  }, [] as IOpacityParams);

export const TextAnimation = () => {
  const [opacityParams, setOpacityParams] = useState<IOpacityParams>(() => getInitialParams(words));

  const [isAllShow, setIsAllShow] = useState(false);
  const [highlight, setHighlight] = useState(-1);

  const handleChangeOpacity = useCallback(() => {
    setOpacityParams(oldParams => {

      return oldParams.map((word, index) => {
        const newWordParam = [...oldParams[index]];
        let randomIndex = Math.floor(Math.random() * word.length);
        while (newWordParam[randomIndex] >= 1 && randomIndex < word.length + 1) {
          randomIndex++;
        }
        if (newWordParam[randomIndex] < 1) {
        newWordParam[randomIndex] += 0.4;
        }
        if (index < 4) {
          const lowLetter = newWordParam.findIndex(opacity => opacity < 0.4);
          if (lowLetter > -1) { // Чтобы не было дырок в тексте ищем пустые
            newWordParam[lowLetter] += 0.2;
          }
        }
        return newWordParam;
      });
    });

  }, []);

  useEffect(() => {
    if (isAllShow) return;

    const timer = setInterval(() => {
      handleChangeOpacity();
    }, 100);

    const timer2 = setInterval(() => {
      setOpacityParams(oldParams => {
        if (oldParams.every(
          wordParam => wordParam.every(opacity => opacity >= 1)
        )
        ) {
          setIsAllShow(true);
        }
        return oldParams;
      });
    }, 1e3);

    return () => {
      clearInterval(timer);
      clearInterval(timer2);
    };
  }, [handleChangeOpacity, isAllShow]);

  useEffect(() => {
    if (!isAllShow) return;

    setTimeout(() => setHighlight(0), 0);
    setTimeout(() => setHighlight(1), 2e3);
    setTimeout(() => setHighlight(2), 4e3);
  }, [isAllShow]);

  return (
    <animated.span className="text-container">
      {words.map((word, indexOfWord) => (
        <span
          className={cn('word-span', { highlight: indexOfWord === highlight })}
        >
          {word.split('').map((char, index) => (
              <CharSpan
                key={`${indexOfWord}_${index}`}
                char={char}
                opacity={opacityParams[indexOfWord][index]}
              />
            )
          )}</span>))}
    </animated.span>
  );
};