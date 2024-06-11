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
        <a href="#" className="line">Missoin</a>
        <a href="#" className="line">Products</a>
        <a href="#" className="line">Benefits</a>
        <a href="#" className="line">Roadmap</a>
        <a href="#" className="line">Tokenomics</a>
        <a href="#">Whitepapper</a>
      </div>

    </div>
  )
}