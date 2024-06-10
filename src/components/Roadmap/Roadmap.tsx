import "./Roadmap.css"
import {Point} from "../../ui/Point";
import {Scrollbar} from "../../ui/Scrollbar";
import {useEffect, useRef} from "react";

export const Roadmap = () => {
    const q2Ref = useRef(null);
    const q3Ref = useRef(null);
    const q4Ref = useRef(null);
    const q2025Ref = useRef(null);
    //TODO: animation left roadmap


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).style.opacity = '1';
                        (entry.target as HTMLElement).style.transition = 'opacity 1s ease-in-out';
                    } else {
                        (entry.target as HTMLElement).style.opacity = '0.4';
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.5, // Элемент должен быть виден на 50% или больше, чтобы анимация запустилась
            }
        );

        if (q2Ref.current) {
            observer.observe(q2Ref.current);
        }
        if (q3Ref.current) {
            observer.observe(q3Ref.current);
        }
        if (q4Ref.current) {
            observer.observe(q4Ref.current);
        }

        if (q2025Ref.current) {
            observer.observe(q2025Ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <div className="roadmap" >
            <div className="scrollbar">
                <Scrollbar/>
            </div>
            <div className="roadmap-info" >
                <div className="q2" ref={q2Ref} >
                    <div className="roadmap-title">
                        <h5>Q2</h5>
                        <div className="year">2024</div>

                    </div>
                    <div className="points">
                        <div className="points-item">
                            <Point/>
                            <div>Testnet ETH bridge</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Mainnet ETH bridge</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Token Generation Event (TGE)</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Testnet SOL bridge</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>IOLO (Initial Liquidity Omnichain Offering) Provision Program [Phase 1]</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>PRP (Participants Reward Program) initialization</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Wave 1 Partnerships</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>$MOON IOLO (Initial Liquidity Omnichain Offering)</div>
                        </div>
                    </div>
                </div>
                <div className="q3" ref={q3Ref} >
                    <div className="roadmap-title">
                        <h5>Q3</h5>
                        <div className="year">2024</div>

                    </div>
                    <div className="points">
                        <div className="points-item">
                            <Point/>
                            <div>Testnet Cosmos bridge</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Mainnet SOL bridge</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Mainnet Cosmos bridge</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Custom Omnichain Contracts Service</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Mainnet bridge SDK</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>NCY (Network Contribution Yield) Program [ETH, TON]</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>DGP (Developer Grants Program) [Phase 1]</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>MOON IOLO (Initial Liquidity Omnichain Offering)</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Self Delegate Staking Launch</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>IOLO (Initial Liquidity Omnichain Offering) Provision Program [Phase 2]</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Wave 2 Partnerships</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Native Tokens Bridge</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>PRP (Participants Reward Program) [Phase 1]</div>
                        </div>
                    </div>
                </div>
                <div className="q4" ref={q4Ref} >
                    <div className="roadmap-title">
                        <h5>Q4</h5>
                        <div className="year">2024</div>

                    </div>
                    <div className="points">
                        <div className="points-item">
                            <Point/>
                            <div>PRP (Participants Reward Program) [Phase 2]</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>NCY (Network Contribution Yield) Programs [SOL]</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>DGP (Developer Grants Program) [Phase 2]</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Multichain Governance Program</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Major CEX Listings</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Wave 3 Partnerships</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>OAS (Omnichain Airdrop System)</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Other Chains Bridge Expansion</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>AI Omnichain Arbitrage Analyser</div>
                        </div>
                    </div>
                </div>
                <div className="q2025" ref={q2025Ref} >
                    <div className="roadmap-title">
                        <div className="year">2024</div>
                    </div>
                    <div className="points">
                        <div className="points-item">
                            <Point/>
                            <div>Bridge Expansion and Institutional Deal Initiatives</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Ecosystem Expansion Initiatives</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>Ultimate Omnichain Arbitrage Platform</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>MoonTON Omni Game launch</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>IOLO (Initial Liquidity Omnichain Offering) Provision Program [Phase 1]</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>MoonTON Omni App</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>AI-Powered equilibrium implementation</div>
                        </div>
                        <div className="points-item">
                            <Point/>
                            <div>MoonTon Omnichain Swap</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}