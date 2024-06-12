import React from 'react';

type CharSpanProps = {
  char: string;
  opacity: number;
}
export const CharSpan = ({ char, opacity }: CharSpanProps) => (
  <span
    style={{
      opacity: opacity,
      display: 'inline-block',
      textWrap: 'nowrap',
      marginRight: char === '.' ? '0.3em' : '0',
    }}
  >
    {char}
  </span>
);