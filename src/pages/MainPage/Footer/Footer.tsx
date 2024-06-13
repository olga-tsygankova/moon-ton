import {Left} from "./Left";
import {Right} from "./Right";
import "./Footer.css"
import {useEffect, useRef} from "react";

export const Footer = () => {
    const footerRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).style.opacity = '1';
                        (entry.target as HTMLElement).style.transition = 'opacity 1s ease-in-out';
                    } else {
                        (entry.target as HTMLElement).style.opacity = '0';
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.5, // Элемент должен быть виден на 50% или больше, чтобы анимация запустилась
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (

        <div className="footer" ref={footerRef}>
            <Left/>
            <Right/>
        </div>


    )
}