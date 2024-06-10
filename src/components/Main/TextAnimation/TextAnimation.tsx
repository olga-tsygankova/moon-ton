import { useSpring, animated } from 'react-spring';
import './TextAnimation.css'
import React, {useEffect, useMemo, useState} from "react";


    //TODO: решить как будут появляться буквы, после точек добавить пробелы, белый цвет

interface TextAnimationProps {
    text: string;
}

export const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
    const [charOpacities, setCharOpacities] = useState<number[]>([]);
    const [isScaled, setIsScaled] = useState(false);

    const { scale } = useSpring({
        scale: isScaled ? 1.3 : 1,
        config: { duration: 1000 },
    });

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
                setIsScaled(true);
                clearInterval(timer);
            }
        }, 20);

        const scaleTimer = setTimeout(() => {
            setIsScaled(true);
        }, 3000);

        return () => {
            clearInterval(timer);
            clearTimeout(scaleTimer);
        };
    }, [text]);

    return (
        <animated.span style={{ transform: scale.to((s) => `scale(${s})`) }}>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    style={{
                        opacity: charOpacities[index],
                        display: 'inline-block',
                        textWrap: "nowrap",
                        fontSize: "73px",
                        marginRight: char === '.' ? '0.3em' : '0'
                    }}
                >
                    {char}
                </span>
            ))}
        </animated.span>
    );
};