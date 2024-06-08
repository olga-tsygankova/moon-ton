import "./Main.css"
import {Header} from "../Header/Header";
import {TextAnimation} from "./TextAnimation/TextAnimation";
import {BridgeBtn} from "../../ui";
import {ExploreBtn} from "../../ui";
import {PortalTop} from "./PortalTop";

export const Main = () => {
    return (
        <div className="main">
            <Header/>
            <div className="main-container">

                <TextAnimation text={"integrate.empower.bridge."}/>
                <p className="main-subtitle" >Advanced omnichain interoperability solutions<br/> for decentralized ecosystems</p>

                <div className="main-btn">
                    <BridgeBtn/>
                    <ExploreBtn/>
                </div>
                <div>
                    <PortalTop/>
                </div>

            </div>
        </div>
    )
}