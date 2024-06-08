import { useSpring, animated } from 'react-spring';
import './TextAnimation.css'
import React from "react";


    //TODO: решить как будут появляться буквы, после точек добавить пробелы, белый цвет

export const TextAnimation = ({ text }: { text: string }) => {
    const animationProps = useSpring({
        from: { opacity: 0, transform: 'translateY(20px) scale(0.5)' },
        to: { opacity: 1, transform: 'translateY(20) scale(1)' },
        config: { duration: 2000 },
    });

    return (
        <div className="text-container" style={{ display: 'flex', fontSize: '81px' }}>
            {text.split('').map((char, index) => (
                <animated.span
                    key={index}
                    style={{
                        ...animationProps,
                        transitionDelay: `${Math.random() * 300}ms`,
                    }}
                >
                    {char === '.' ? '. ' : char + ' '}
                </animated.span>
            ))}
        </div>
    );
};