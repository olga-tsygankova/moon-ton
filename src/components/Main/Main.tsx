import "./Main.css"
import {Header} from "../Header/Header";
import {TextAnimation} from "./TextAnimation/TextAnimation";
import {BridgeBtn, WhiteBtn} from "../../ui";
import {PortalUp} from "../../ui/svg/PortalUp";
import {OverviewButton} from "../../ui/Buttons/OverviewButton";

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
                    <OverviewButton>Explore ecosystem</OverviewButton>
                </div>

            </div>
            <div className="portal-up">
                <PortalUp/>
            </div>
        </div>
    );
};