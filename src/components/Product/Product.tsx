import "./Product.css"
import {WhiteBtn} from "../../ui";
import {useEffect, useRef} from "react";
import {PortalDown} from "../../ui/PortalDown";

export const Product = () => {
    const forDevelopersRef = useRef(null);
    const forPartnersRef = useRef(null);


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

        if (forDevelopersRef.current) {
            observer.observe(forDevelopersRef.current);
        }

        if (forPartnersRef.current) {
            observer.observe(forPartnersRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <div className="product">

            <div className="for-developers" ref={forDevelopersRef}>
                <h4>For Developers</h4>
                <p>(Build on MoonTon)</p>
                <div className="content">
                    <div className="content-title">Bridge API</div>
                    <p>
                        Integrate MoonTON Omnichain
                        <br/>
                        Technology into your custom
                        <br/>
                        applications.
                    </p>
                    <WhiteBtn>Get API</WhiteBtn>
                </div>
            </div>
            <div className="portal-bottom"><PortalDown/></div>

            <div className="partners-wrapper">
                <div className="for-partners" ref={forPartnersRef}>
                    <h4>For Partners</h4>
                    <div className="content">
                        <div className="content-title">IOLO (Initial Omnichain Liquidity Offering)</div>
                        <p>
                            Expose your project to new ecosystems
                            <br/>
                            and broaden your user base
                        </p>
                        <WhiteBtn>Make Us IOLO</WhiteBtn>
                    </div>
                    <div className="content">
                        <div className="content-title">OAS (Omnichain Airdrop System)</div>
                        <p>
                            Level up your community engagement
                            <br/>
                            with omnichain airdrops
                        </p>
                        <WhiteBtn>Get OAS</WhiteBtn>
                    </div>
                </div>

            </div>


        </div>

    )
}