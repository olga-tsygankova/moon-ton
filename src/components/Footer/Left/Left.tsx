import {SocialLinks} from "./SocialLinks/SocialLinks";
import "./Left.css"

export const Left = () => {
    return (
        <div className="left">
            <h6>Links</h6>
            <div className="links">
                <a>Etherscan</a>
                <a>Dextools</a>
                <a>Whitepaper</a>
            </div>
            <SocialLinks/>
        </div>
    )
}