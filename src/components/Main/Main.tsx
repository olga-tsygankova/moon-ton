import "./Main.css"
import {Header} from "../Header/Header";
import {TextAnimation} from "./TextAnimation/TextAnimation";
import {BridgeBtn, WhiteBtn} from "../../ui";
import {PortalTop} from "./PortalTop";
import {PortalUp} from "../../ui/PortalUp";

export const Main = () => {
    return (
        <div className="main">
            <Header/>
            <div className="main-container">
                <TextAnimation
                    text="integrate.empower.bridge."
                />
                <p className="main-subtitle">
                    Advanced omnichain interoperability solutions
                    <br/>
                    for decentralized ecosystems
                </p>
                <div className="main-btn">
                    <BridgeBtn/>
                    <WhiteBtn>Explore ecosystem</WhiteBtn>
                </div>

            </div>
            <div className="portal-up">
                <PortalUp/>
            </div>
        </div>
    );
};