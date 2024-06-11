import {Logo} from "./Logo/Logo";
import {Menu} from "./Menu/Menu";
import {BridgeHeader} from "../../ui/Buttons/BridgeHeader/BridgeHeader";
import "./Header.css"
import {BurgerMenu} from "../../ui/Buttons/BurgerMenu";

export const Header=()=>{
    return(
        <div className="header">
            <Logo/>
            <Menu/>
            <BridgeHeader/>
            <BurgerMenu/>
        </div>
    )
}