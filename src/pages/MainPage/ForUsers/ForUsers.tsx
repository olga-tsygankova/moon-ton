import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { scroller } from 'react-scroll';
import { WhiteBtn, LearnMoreButton, PlatformButton } from '../../../ui';

import './ForUsers.css';


export const ForUsers = () => {
  const [isInView, setIsInView] = useState(false);
  const forUsersRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.5, // Триггер при 50% видимости блока
    rootMargin: '-50% 0px', // Смещение для срабатывания триггера
  });

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  const handleScroll = () => {
    if (isInView && forUsersRef.current) {
      scroller.scrollTo('forUsers', {
        duration: 500,
        smooth: true,
        offset: -50, // Adjust the offset as needed
      });
    }
  };

  return (
    <div className="for-users" ref={ref} onScroll={handleScroll}>
      <h2 className="for-users__title" ref={forUsersRef}>For Users</h2>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-title">MoonTON Omnichain Swap</div>
          <p>Swap assets cross-chain in one click</p>
          <WhiteBtn>Coming soon</WhiteBtn>
        </div>
        <div className="card">
          <div className="card-title">NCY</div>
          <p>
            Earn passive income and rewards
            <br />
            through MoonTon financial incentives
          </p>
          <WhiteBtn>Coming soon</WhiteBtn>
        </div>
        <div className="card">
          <div className="card-title">AI Omnichain Arbitrage Analyser</div>
          <p>
            Get advanced insights into omnichain
            <br />
            arbitrage opprotunities
          </p>
          <WhiteBtn>Coming soon</WhiteBtn>
        </div>

        <div className="card-bridge">
          <div className="card-title">Bridge</div>
          <p>
            Use our multisignature bridge protocol to transfer
            assets between ecosystems
          </p>
          <div className="card-bridge__btn">
            <LearnMoreButton>Learn More</LearnMoreButton>
            <PlatformButton>Use Bridge (App)</PlatformButton>
          </div>
        </div>
      </div>
    </div>
  );
};
