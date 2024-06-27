import "./Main.css";
import { Header } from "../Header";
import { TextAnimation } from './TextAnimation';
import { BridgeBtn } from "../../../ui";
import { OverviewButton } from "../../../ui/Buttons/OverviewButton";
import { useEffect, useState } from 'react';
import { PortalUpLine } from '../../../ui/svg/PortalUpLine';

export const Main = () => {
  const [portalPosition, setPortalPosition] = useState(-400);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 800) {
        setPortalPosition(0 + scrollY * 0.8);
      } else {
        setPortalPosition(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="main">
      <Header />
      <div className="main-container">
        <TextAnimation/>
        <p className="main-subtitle">
          Advanced omnichain interoperability solutions for decentralized
          ecosystems
        </p>
        <div className="main-btn">
          <BridgeBtn/>
          <OverviewButton>Explore ecosystem</OverviewButton>
        </div>
        <section className="portal-up-beam" style={{ top: `${portalPosition}px` }}>
          <span></span>
          <span></span>
          <span></span>
        </section>
        <section className="portal-up-line">
          <PortalUpLine/>
        </section>
      </div>
    </div>
  );
};
