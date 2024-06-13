import cn from 'classnames';

import './WordSpan.css';

// TODO улучшить способ передачи индекса в css

type WordSpanProps = {
  word: string;
  indexOf: number;
  isVisible: boolean;
}
export const WordSpan = ({ word, indexOf, isVisible }: WordSpanProps) => {

  return (
    <span className="wordSpan">
      {word.split('').map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className={cn('letter', { isVisible })}
          // @ts-ignore
          style={{ '--i': indexOf + index }}
        >
        {letter}
      </span>
      ))}
      <span className="spaceSpan">
        {' '}
      </span>
  </span>
  );
};