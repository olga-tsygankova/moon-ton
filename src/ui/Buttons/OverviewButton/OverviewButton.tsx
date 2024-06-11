import {ReactNode} from "react";
import "./OverviewButton.css"

interface ButtonProps {
    children: ReactNode; // Содержимое кнопки (текст, иконки и т.д.)
    onClick?: () => void; // Необязательная функция, вызываемая при клике на кнопку
}

export const OverviewButton = ({
                                   children,
                                   onClick,
                               }: ButtonProps) => {
    return (

            <a href="https://moon-ton.gitbook.io/moon-ton" onClick={onClick} className="overview-btn">
                {children}
            </a>

    );
};