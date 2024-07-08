import './Main.css';
import { Header } from '../Header';
import { TextAnimation } from './TextAnimation';
import { BridgeBtn } from '../../../ui';
import { OverviewButton } from '../../../ui/Buttons/OverviewButton';
import { useEffect, useRef, useState } from 'react';
import { PortalUpLine } from '../../../ui/svg/PortalUpLine';
import ScrollMagic, { Scene } from 'scrollmagic';



export const Main = () => {
  const portalUpBeamRef = useRef<HTMLElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Инициализация ScrollMagic
    const controller = new ScrollMagic.Controller();

    // Создание сцены
    const scene = new ScrollMagic.Scene({
      triggerElement: mainContainerRef.current, // элемент, который будет триггером для анимации
      duration: '65%', // длительность анимации (в данном случае, весь экран)
      triggerHook: 'onLeave', // точка срабатывания триггера (при выходе элемента за пределы экрана)
    })
      .setPin(portalUpBeamRef.current) // элемент, который будет двигаться вместе со скроллом
      .addTo(controller); // добавление сцены в контроллер

    // Очистка при размонтировании компонента
    return () => {
      scene.destroy(true);
      controller.destroy(true);
    };
  }, []);

  return (
    <div className="main">
      <Header />
      <div className="main-container" ref={mainContainerRef}>
        <TextAnimation />
        <p className="main-subtitle">
          Advanced omnichain interoperability solutions for decentralized
          ecosystems
        </p>
        <div className="main-btn">
          <BridgeBtn />
          <OverviewButton>Explore ecosystem</OverviewButton>
        </div>
        <section
          className="portal-up-beam"
          ref={portalUpBeamRef}
        >
          <span></span>
          <span></span>
          <span></span>
        </section>
        <section className="portal-up-line">
          <PortalUpLine />
        </section>
      </div>
    </div>
  );
};
