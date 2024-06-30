import { ReactNode } from 'react';
import './Submit.css';

interface ButtonProps {
  children: ReactNode; // Содержимое кнопки (текст, иконки и т.д.)
  onClick?: () => void; // Необязательная функция, вызываемая при клике на кнопку
  disabled?: boolean;
}

export const SubmitButton = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className="submit">
      {children}
    </button>
  );
};