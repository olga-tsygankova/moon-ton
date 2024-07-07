import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CloseBtn } from '../../../../ui/Buttons/CloseBtn';

import './Menu.css';

type IProps = {
  isOpen: boolean;
  onClose: () => void;
  isMainPage: boolean;
};
export const Menu = ({ isOpen, onClose, isMainPage }: IProps) => {
  const navigate = useNavigate();
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    if (!isMainPage) return navigate(`/${targetId}`); // FIXME не скроллит

    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          window.innerHeight * 0.2;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className={`menu ${isOpen ? 'open' : 'closed'}`}>
      <div className="menu-container">
        <CloseBtn onClick={onClose} />

        <a
          href="#mission"
          className="line"
          onClick={handleLinkClick}
        >
          Mission
        </a>

        <a
          href="#product"
          className="line"
          onClick={handleLinkClick}
        >
          Products
        </a>

        <a
          href="#advantages"
          className="line"
          onClick={handleLinkClick}
        >
          Benefits
        </a>
        <a
          href="#roadmap"
          className="line"
          onClick={handleLinkClick}
        >
          Roadmap
        </a>
        <a
          href="#token"
          className="line"
          onClick={handleLinkClick}
        >
          Tokenomics
        </a>
        <a href="https://moon-ton.gitbook.io/moon-ton">Whitepaper</a>
      </div>
    </div>
  );
};
