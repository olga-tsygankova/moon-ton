import {ReactNode} from "react";
import "./Platform.css"

interface ButtonProps {
    children: ReactNode; // Содержимое кнопки (текст, иконки и т.д.)
    onClick?: () => void; // Необязательная функция, вызываемая при клике на кнопку
}

export const Platform = ({
                                   children,
                                   onClick,
                               }: ButtonProps) => {
    return (

            <a href="#" onClick={onClick} className="platform">
                {children}
            </a>

    );
};