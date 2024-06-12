import {SocialLinks} from "./SocialLinks/SocialLinks";
import "./Left.css"

export const Left = () => {
    return (
        <div className="left">
            <h6>Links</h6>
            <div className="links">
                <a href="#" target="_blank" rel="noopener noreferrer">Etherscan</a>
                <a href='#' target="_blank" rel="noopener noreferrer">Dextools</a>
                <a href="https://moon-ton.gitbook.io/moon-ton" target="_blank" rel="noopener noreferrer">Whitepaper</a>
            </div>
            <SocialLinks/>
        </div>
    )
}