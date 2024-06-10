import "./ForUsers.css"
import {BridgeBtn, WhiteBtn} from "../../ui";
import {BlueBtn} from "../../ui/BlueBtn";

export const ForUsers = () => {
    return (
        <div className="for-users">
            <h2>For Users</h2>
                <div className="card">
                <div>MoonTON Omnichain Swap</div>
                <p>
                    Swap assets cross-chain in one click
                </p>
                <WhiteBtn>Coming soon</WhiteBtn>
                </div>
            <div className="card">
                <div>NCY</div>
                <p>
                    Earn passive income and rewards
                    <br/>
                    through MoonTon financial incentives
                </p>
                <WhiteBtn>Coming soon</WhiteBtn>
            </div>
            <div className="card">
                <div>AI Omnichain Arbitrage Analyser</div>
                <p>
                    Get advanced insights into omnichain
                    <br/>
                    arbitrage opprotunities
                </p>
                <WhiteBtn>Coming soon</WhiteBtn>
            </div>

            <div className="card-bridge">
                <div>Bridge</div>
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