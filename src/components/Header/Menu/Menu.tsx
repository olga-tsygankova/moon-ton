import "./Menu.css"
import { CloseBtn } from '../../../ui/Buttons/CloseBtn';

type IProps={
  isOpen: boolean,
  onClose: () => void
}
export const Menu = ({ isOpen, onClose}:IProps) => {
  return (
    <div className={`menu ${isOpen ? 'open' : 'closed'}`} >
      <div className='menu-container'>
        <CloseBtn onClick={onClose} />
        <a href="#mission" className="line">Mission</a>
        <a href="#product" className="line">Products</a>
        <a href="#advantages" className="line">Benefits</a>
        <a href="#roadmap" className="line">Roadmap</a>
        <a href="#token" className="line">Tokenomics</a>
        <a href="#">Whitepapper</a>
      </div>

    </div>
  )
}