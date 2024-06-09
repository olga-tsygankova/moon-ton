import "./ForUsers.css"
import {BridgeBtn, WhiteBtn} from "../../ui";
import {BlueBtn} from "../../ui/BlueBtn";

export const ForUsers = () => {
    return (
        <div className="for-users">
            <h2>For Users</h2>
                <div className="card">
                <h5>MoonTON Omnichain Swap</h5>
                <p>
                    Swap assets cross-chain in one click
                </p>
                <WhiteBtn>Coming soon</WhiteBtn>
                </div>
            <div className="card">
                <h5>NCY</h5>
                <p>
                    Earn passive income and rewards
                    <br/>
                    through MoonTon financial incentives
                </p>
                <WhiteBtn>Coming soon</WhiteBtn>
            </div>
            <div className="card">
                <h5>AI Omnichain Arbitrage Analyser</h5>
                <p>
                    Get advanced insights into omnichain
                    <br/>
                    arbitrage opprotunities
                </p>
                <WhiteBtn>Coming soon</WhiteBtn>
            </div>

            <div className="card-bridge">
                <h5>Bridge</h5>
                <p>
                    Use our multisignature bridge protocol to transfer
                    <br/>
                    assets between ecosystems
                </p>
                <div className="card-bridge__btn">
                    <WhiteBtn>Learn More</WhiteBtn>
                    <BlueBtn>Use Bridge (App)</BlueBtn>
                </div>
            </div>

        </div>

    )
}