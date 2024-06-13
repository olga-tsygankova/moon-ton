import "./Product.css";
import { useEffect, useRef } from "react";
import { FormBtn } from '../../../ui/Buttons/FormBtn';
import { useNavigate } from 'react-router-dom';
import { PortalDown } from '../../../ui/svg';
export const Product = () => {
  const forDevelopersRef = useRef(null);
  const forPartnersRef = useRef(null);
  const navigate = useNavigate();

  const handleBridgeClick = () => {
    window.scrollTo(0, 0);
    navigate('/form-page');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transition =
              "opacity 1s ease-in-out";
          } else {
            (entry.target as HTMLElement).style.opacity = "0.4";
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // Элемент должен быть виден на 50% или больше, чтобы анимация запустилась
      },
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
    <div className="product" id="product">
      <div className="portal-down">
        <PortalDown />
      </div>
      <div className="for-developers" ref={forDevelopersRef}>
        <h4>For Developers</h4>
        <p>(Build on MoonTon)</p>
        <div className="content">
          <div className="content-title">Bridge API</div>
          <p>
            Integrate MoonTON Omnichain Technology into your custom
            applications.
          </p>
          <FormBtn handleBridgeClick={handleBridgeClick} >Get API</FormBtn>
        </div>
      </div>
      <div className="partners-wrapper">
        <div className="for-partners" ref={forPartnersRef}>
          <h4>For Partners</h4>
          <div className="content">
            <div className="content-title">
              IOLO (Initial Omnichain Liquidity Offering)
            </div>
            <p>
              Expose your project to new ecosystems and broaden your user base
            </p>
            <FormBtn >Make Us IOLO</FormBtn>
          </div>
          <div className="content">
            <div className="content-title">OAS (Omnichain Airdrop System)</div>
            <p>Level up your community engagement with omnichain airdrops</p>
            <FormBtn >Get OAS</FormBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
