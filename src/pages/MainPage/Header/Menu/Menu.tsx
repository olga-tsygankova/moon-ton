import "./Menu.css"
import { CloseBtn } from '../../../../ui/Buttons/CloseBtn';
import React from 'react';

type IProps={
  isOpen: boolean,
  onClose: () => void
}
export const Menu = ({ isOpen, onClose}:IProps) => {

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          window.innerHeight * 0.2;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className={`menu ${isOpen ? 'open' : 'closed'}`} >
      <div className='menu-container'>
        <CloseBtn onClick={onClose}/>
        <a href="#mission" className="line" onClick={handleLinkClick}>
          Mission
        </a>
        <a href="#product" className="line">
          Products
        </a>
        <a href="#advantages" className="line" >
          Benefits
        </a>
        <a href="#roadmap" className="line" onClick={handleLinkClick}>
          Roadmap
        </a>
        <a href="#token" className="line" onClick={handleLinkClick}>
          Tokenomics
        </a>
        <a href="#whitepaper" className="line">
          Whitepaper
        </a>
      </div>

    </div>
  )
}