import {Logo} from "./Logo/Logo";
import {Menu} from "./Menu/Menu";
import {BridgeHeader} from "./BridgeHeader/BridgeHeader";
import "./Header.css"

export const Header=()=>{
    return(
        <div className="header">
            <Logo/>
            <Menu/>
            <BridgeHeader/>
        </div>
    )
}