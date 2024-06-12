import {Logo} from "./Logo/Logo";
import {Menu} from "./Menu/Menu";
import {BridgeHeader} from "../../../ui/Buttons/BridgeHeader/BridgeHeader";
import "./Header.css"
import {BurgerMenu} from "../../../ui/Buttons/BurgerMenu";
import { useState } from 'react';

export const Header=()=>{

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return(
        <div className="header">
            <Logo/>
            <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
            <BridgeHeader/>
            <BurgerMenu onClick={toggleMenu}/>
        </div>
    )
}