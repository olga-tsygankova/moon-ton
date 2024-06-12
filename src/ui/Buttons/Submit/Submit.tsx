import {ReactNode} from "react";
import "./Submit.css"

interface ButtonProps {
    children: ReactNode; // Содержимое кнопки (текст, иконки и т.д.)
    onClick?: () => void; // Необязательная функция, вызываемая при клике на кнопку
}

export const Submit = ({
                                   children,
                                   onClick,
                               }: ButtonProps) => {
    return (

            <button onClick={onClick} className="submit">
                {children}
            </button>

    );
};