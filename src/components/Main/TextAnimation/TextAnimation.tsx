import { useSpring, animated } from 'react-spring';
import './TextAnimation.css'
import React, {useEffect, useMemo, useState} from "react";


    //TODO: решить как будут появляться буквы, после точек добавить пробелы, белый цвет

interface TextAnimationProps {
    text: string;
}

export const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
    const [charOpacities, setCharOpacities] = useState<number[]>([]);

    //TODO: разбить по контейнерам каждое слово, на мобилке кривое


    useEffect(() => {
        const opacities = text.split('').map(() => 0);
        setCharOpacities(opacities);

        const timer = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * opacities.length);
            if (opacities[randomIndex] < 1) {
                opacities[randomIndex] += 0.4;
                setCharOpacities([...opacities]);
            }
            if (opacities.every((o) => o >= 1)) {
                clearInterval(timer);
            }
        }, 20);


        return () => {
            clearInterval(timer);
        };
    }, [text]);

    return (
        <animated.span className="text-container">
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    style={{
                        opacity: charOpacities[index],
                        display: 'inline-block',
                        textWrap: "nowrap",
                        marginRight: char === '.' ? '0.3em' : '0'
                    }}
                >
                    {char}
                </span>
            ))}
        </animated.span>
    );
};