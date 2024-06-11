import {BlueBtn} from "../../ui/Buttons/BlueBtn";
import "./Join.css"
import {useEffect, useRef} from "react";

export const Join = () => {

    const joinRef = useRef(null);
    const joinBtnRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    } else {
                        entry.target.classList.remove('fade-in');
                    }
                });
            },
            { threshold: 0.5 } // Элемент должен быть виден на 50% или более, чтобы считаться видимым
        );

        if (joinBtnRef.current) {
            observer.observe(joinBtnRef.current);
        }

        return () => {
            if (joinBtnRef.current) {
                observer.unobserve(joinBtnRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const headings = entry.target.querySelectorAll('h2');
                        if (headings) {
                            headings.forEach((heading) => {
                                const textContent = heading.textContent;
                                if (textContent) {
                                    const letters = textContent.split('');
                                    heading.innerHTML = '';

                                    letters.forEach((letter, index) => {
                                        const span = document.createElement('span');
                                        span.textContent = letter;
                                        if (letter === ' ') {
                                            span.style.color = 'white';
                                        } else if (letter === 'T') {
                                            span.style.color = '#00b0ff'; // Голубой цвет для "T"
                                        } else if (letter === 'O') {
                                            span.style.color = '#00b0ff'; // Голубой цвет для "O"
                                        } else if (letter === 'N') {
                                            span.style.color = '#00b0ff'; // Голубой цвет для "N"
                                        }
                                        span.style.animationDelay = `${Math.random() * 1}s`;
                                        heading.appendChild(span);
                                    });
                                }
                            });
                        }
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (joinRef.current) {
            observer.observe(joinRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <div className="join" ref={joinRef}>
            <div className="join-title">
                <h2>
                    Join  <span style={{display:"inline-block", marginLeft: '20px' }}>Moon</span> <span style={{ padding: '0 5px' }}>TON </span> <span style={{ padding: '0 5px' }}>Ecosystem</span>                </h2>
            </div>

            <div className="join-btn" ref={joinBtnRef}>
                <BlueBtn>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.2083 8C14.7333 8 14.4166 8.31667 14.4166 8.79167C14.4166 10.1375 13.3875 11.1667 12.0416 11.1667H2.85829L3.88746 10.1375C4.20413 9.82083 4.20413 9.34583 3.88746 9.02917C3.57079 8.7125 3.09579 8.7125 2.77913 9.02917L0.404126 11.4042C0.324959 11.4833 0.245793 11.5625 0.245793 11.6417C0.166626 11.7208 0.166626 11.8792 0.166626 11.9583C0.166626 12.0375 0.166626 12.1958 0.245793 12.275C0.245793 12.3542 0.324959 12.4333 0.404126 12.5125L2.77913 14.8875C2.93746 15.0458 3.09579 15.125 3.33329 15.125C3.57079 15.125 3.72913 15.0458 3.88746 14.8875C4.20413 14.5708 4.20413 14.0958 3.88746 13.7792L2.85829 12.75H12.0416C14.2583 12.75 16 11.0083 16 8.79167C16 8.31667 15.6833 8 15.2083 8ZM15.9208 3.725C15.9208 3.64583 15.8416 3.56667 15.7625 3.4875L13.3875 1.1125C13.0708 0.795833 12.5958 0.795833 12.2791 1.1125C11.9625 1.42917 11.9625 1.90417 12.2791 2.22083L13.3083 3.25H4.12496C1.90829 3.25 0.166626 4.99167 0.166626 7.20833C0.166626 7.68333 0.483293 8 0.958293 8C1.43329 8 1.74996 7.68333 1.74996 7.20833C1.74996 5.8625 2.77913 4.83333 4.12496 4.83333H13.3083L12.2791 5.8625C11.9625 6.17917 11.9625 6.65417 12.2791 6.97083C12.5958 7.2875 13.0708 7.2875 13.3875 6.97083L15.7625 4.59583C15.8416 4.51667 15.9208 4.4375 15.9208 4.35833C16 4.27917 16 4.12083 16 4.04167C16 3.9625 16 3.80417 15.9208 3.725Z"
                            fill="#F1F1F1"/>
                    </svg>
                    Join MoonTON Ecosystem
                </BlueBtn>
            </div>

        </div>
    )
}