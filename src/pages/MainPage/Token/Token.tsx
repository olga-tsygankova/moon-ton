import "./Token.css"
import {Char} from "./Char/Char";
import {useEffect, useRef} from "react";

const TokenText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            { threshold: 0.5 } // Триггерить анимацию, когда элемент виден на 50%
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <p ref={textRef} className="token-text">
            The $MOON token is integral to the Moon TON ecosystem,
            ensuring economic equilibrium through token
            burning,
            rewarding active participants, and fostering decentralized
            development. It supports NCY incentives and acts
            as a governance tool, enabling stakeholder participation
            in decision-making
        </p>
    );
};


export const Token = () => {
    return (
        <div className="token" id="token">
            <Char/>
            <div className="token-info">
                <svg width="446" height="446" viewBox="0 0 446 446" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="222.851" cy="222.851" r="222.265" stroke="url(#paint0_linear_8_472)"
                            stroke-width="1.1729"/>
                    <circle cx="222.265" cy="222.265" r="195.875" stroke="url(#paint1_linear_8_472)"
                            stroke-width="1.1729"/>
                    <path
                        d="M192.885 312.517L285.016 285.792L292.195 261.347L200.232 287.502M192.885 312.517L200.232 287.502M192.885 312.517L129.666 240.843L137.09 215.565L200.232 287.502M193.334 245.307L214.554 238.74L228.863 255.742"
                        stroke="url(#paint2_linear_8_472)" stroke-width="0.92642" stroke-linecap="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M184.935 201.054L136.879 214.943L199.362 286.46L207.029 260.357L178.465 227.551L202.082 220.495L184.935 201.054Z"
                          stroke="url(#paint3_linear_8_472)" stroke-width="0.755704"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M234.836 230.039L250.972 248.847L209.204 260.995L201.538 287.098L293.027 261.198L259.607 222.853L234.836 230.039Z"
                          stroke="url(#paint4_linear_8_472)" stroke-width="0.755704"/>
                    <path
                        d="M221.937 209.6L229.603 183.498L201.039 150.692L242.913 138.18L250.687 111.715L159.454 138.084L221.937 209.6Z"
                        stroke="url(#paint5_linear_8_472)" stroke-width="0.755704"/>
                    <path
                        d="M224.111 210.239L231.778 184.136L273.546 171.988L245.088 138.819L252.861 112.354L315.6 184.339L224.111 210.239Z"
                        stroke="url(#paint6_linear_8_472)" stroke-width="0.755704"/>
                    <path
                        d="M215.459 235.659L307.59 208.933L314.77 184.489L222.806 210.643M215.459 235.659L222.806 210.643M215.459 235.659L152.24 163.985L159.664 138.707L222.806 210.643M215.908 168.448L237.128 161.882L251.437 178.884"
                        stroke="url(#paint7_linear_8_472)" stroke-width="0.92642" stroke-linecap="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_8_472" x1="222.852" y1="445.703" x2="222.852" y2="0"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_8_472" x1="222.265" y1="25.804" x2="222.265" y2="418.726"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_8_472" x1="214.673" y1="238.352" x2="192.89" y2="312.518"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_8_472" x1="182.88" y1="200.451" x2="160.933" y2="275.173"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_8_472" x1="262.13" y1="223.594" x2="240.148" y2="298.438"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_8_472" x1="212.258" y1="100.428" x2="183.508" y2="198.313"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear_8_472" x1="291.471" y1="123.694" x2="262.722" y2="221.579"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint7_linear_8_472" x1="237.248" y1="161.494" x2="215.464" y2="235.66"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
                <TokenText />
            </div>
        </div>
    )
}