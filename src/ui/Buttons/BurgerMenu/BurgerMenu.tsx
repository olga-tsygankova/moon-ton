import './BurgerMenu.css';

type IProps = {
  onClick: () => void

}
export const BurgerMenu = ({ onClick }: IProps) => {

  return (
    <button className="burger-menu" onClick={onClick}>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="24.5" fill="url(#paint0_linear_20_850)" stroke="#2B2B2B" />
        <path d="M18 19H32.9998" stroke="#F1F1F1" strokeWidth="1.42856" strokeLinecap="round" />
        <path d="M18 25L29.4705 25" stroke="#F1F1F1" strokeWidth="1.42856" strokeLinecap="round" />
        <path d="M18 31H32.9998" stroke="#F1F1F1" strokeWidth="1.42856" strokeLinecap="round" />
        <defs>
          <linearGradient
            id="paint0_linear_20_850" x1="58.8889" y1="50" x2="31.2044" y2="66.5363"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#1C1C23" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </button>

  );
};