
type IProps={
  onClick?: () => void,
}
export const CloseBtn = ({onClick}:IProps) => {
  return (
    <button onClick={onClick} style={{border:'0', background:'none'}}>
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L21 21M21 1L1 21" stroke="url(#paint0_linear_20_1748)"/>
      <defs>
        <linearGradient id="paint0_linear_20_1748" x1="11" y1="21" x2="11" y2="0.999999"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0.0001" stopColor="white"/>
          <stop offset="0.505" stopColor="white" stopOpacity="0"/>
          <stop offset="1" stopColor="white"/>
        </linearGradient>
      </defs>
    </svg>
    </button>


  );
};