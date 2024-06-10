import "./Char.css"
import {useEffect, useRef} from "react";

export const Char = () => {
    const char1Ref = useRef(null);
    const char2Ref = useRef(null);
    const char3Ref = useRef(null);
    const char4Ref = useRef(null);
    const char5Ref = useRef(null);
    const char6Ref = useRef(null);
    const char7Ref = useRef(null);
    const char8Ref = useRef(null);

    //TODO: animation left roadmap


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).style.opacity = '1';
                        (entry.target as HTMLElement).style.transition = 'opacity 1s ease-in-out';
                    } else {
                        (entry.target as HTMLElement).style.opacity = '0.4';
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.5, // Элемент должен быть виден на 50% или больше, чтобы анимация запустилась
            }
        );

        if (char1Ref.current) {
            observer.observe(char1Ref.current);
        }
        if (char2Ref.current) {
            observer.observe(char2Ref.current);
        }
        if (char3Ref.current) {
            observer.observe(char3Ref.current);
        }
        if (char4Ref.current) {
            observer.observe(char4Ref.current);
        }
        if (char5Ref.current) {
            observer.observe(char5Ref.current);
        }
        if (char6Ref.current) {
            observer.observe(char6Ref.current);
        }
        if (char7Ref.current) {
            observer.observe(char7Ref.current);
        }
        if (char8Ref.current) {
            observer.observe(char8Ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <div className="char">
            <div className="char-item" ref={char1Ref}>
                <div className="rectangle" style={{
                    width: "160px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">10%</div>
                    <div className="percent-title">Private sale</div>
                </div>
            </div>
            <div className="char-item" ref={char2Ref}>
                <div className="rectangle" style={{
                    width: "80px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">5%</div>
                    <div className="percent-title">Public sale</div>
                </div>
            </div>
            <div className="char-item" ref={char3Ref}>
                <div className="rectangle" style={{
                    width: "160px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">10%</div>
                    <div className="percent-title">Liquidity Pool on Ethereum</div>
                </div>
            </div>
            <div className="char-item" ref={char4Ref}>
                <div className="rectangle" style={{
                    width: "240px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">15%</div>
                    <div className="percent-title">Moon Ton omnichain liquidity provision</div>
                </div>
            </div>
            <div className="char-item" ref={char5Ref}>
                <div className="rectangle" style={{
                    width: "160px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">10%</div>
                    <div className="percent-title">Participants reward program</div>
                </div>
            </div>
            <div className="char-item" ref={char6Ref}>
                <div className="rectangle" style={{
                    width: "240px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">15%</div>
                    <div className="percent-title">Network contribution yield</div>
                </div>
            </div>
            <div className="char-item" ref={char7Ref}>
                <div className="rectangle" style={{
                    width: "130px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">8%</div>
                    <div className="percent-title">Developer grants</div>
                </div>
            </div>
            <div className="char-item" ref={char8Ref}>
                <div className="rectangle" style={{
                    width: "430px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">27%</div>
                    <div className="percent-title">Ecosystem</div>
                </div>
            </div>
        </div>
    )
}