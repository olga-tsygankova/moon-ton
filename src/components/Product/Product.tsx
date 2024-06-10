import "./Product.css"
import {WhiteBtn} from "../../ui";

export const Product=()=>{
    return(
        <div className="product">
            <div className="portal-bottom"> Тут будет портал</div>
            <div className="for-developers">
                <h4>For Developers</h4>
                <p>(Build on MoonTon)</p>
                <div className="content">
                    <div className="content-title">Bridge API</div>
                    <p>
                        Integrate MoonTON Omnichain
                        <br/>
                        Technology into your custom
                        <br/>
                        applications.
                    </p>
                    <WhiteBtn>Get API</WhiteBtn>
                </div>
            </div>
            <div className="partners-wrapper" >
                <div className="for-partners">
                    <h4>For Partners</h4>
                    <div className="content">
                        <div className="content-title" >IOLO (Initial Omnichain Liquidity Offering)</div>
                        <p>
                            Expose your project to new ecosystems
                            <br/>
                            and broaden your user base
                        </p>
                        <WhiteBtn>Make Us IOLO</WhiteBtn>
                    </div>
                    <div className="content">
                        <div className="content-title" >OAS (Omnichain Airdrop System)</div>
                        <p>
                            Level up your community engagement
                            <br/>
                            with omnichain airdrops
                        </p>
                        <WhiteBtn>Get OAS</WhiteBtn>
                    </div>
                </div>

            </div>


        </div>

    )
}