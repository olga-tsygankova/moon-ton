import { ReactNode } from 'react';
import './LearnMore.css';

interface ButtonProps {
  children: ReactNode; // Содержимое кнопки (текст, иконки и т.д.)
  onClick?: () => void; // Необязательная функция, вызываемая при клике на кнопку
}

export const LearnMoreButton = ({ children, onClick }: ButtonProps) => {
  return (
    <a
      href="https://moon-ton.gitbook.io/moon-ton/technical-overview/bridge-architecture" onClick={onClick}
      className="learn-more" target="_blank"
      rel="noopener noreferrer">
      {children}
    </a>
  );
};