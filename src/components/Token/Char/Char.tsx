import "./Char.css"

export const Char = () => {
    return (
        <div className="char">
            <div className="char-item">
                <div className="rectangle" style={{
                    width: "160px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">10%</div>
                    <div className="percent-title">Private sale</div>
                </div>
            </div>
            <div className="char-item">
                <div className="rectangle" style={{
                    width: "80px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">5%</div>
                    <div className="percent-title">Public sale</div>
                </div>
            </div>
            <div className="char-item">
                <div className="rectangle" style={{
                    width: "160px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">10%</div>
                    <div className="percent-title">Liquidity Pool on Ethereum</div>
                </div>
            </div>
            <div className="char-item">
                <div className="rectangle" style={{
                    width: "240px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">15%</div>
                    <div className="percent-title">Moon Ton omnichain liquidity provision</div>
                </div>
            </div>
            <div className="char-item">
                <div className="rectangle" style={{
                    width: "160px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">10%</div>
                    <div className="percent-title">Participants reward program</div>
                </div>
            </div>
            <div className="char-item">
                <div className="rectangle" style={{
                    width: "240px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">15%</div>
                    <div className="percent-title">Network contribution yield</div>
                </div>
            </div>
            <div className="char-item">
                <div className="rectangle" style={{
                    width: "130px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">8%</div>
                    <div className="percent-title">Developer grants</div>
                </div>
            </div>

            <div className="char-item">
                <div className="rectangle" style={{
                    width: "430px", height: "70px"
                }}></div>
                <div className="rectangle-value">
                    <div className="percent">27%</div>
                    <div className="percent-title">Ecosystem</div>
                </div>
            </div>
        </div>
    )
}