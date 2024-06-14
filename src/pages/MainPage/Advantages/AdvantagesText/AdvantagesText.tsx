import './AdvantagesText.css';

type AdvantagesTextProps = {
  stage: number
}

export const AdvantagesText = ({ stage }: AdvantagesTextProps) => {
  return (
    <div className="advantages-text">
      {stage <= 100 && (
        <>
          <h4>integrability.</h4>
          <p>
            MoonTon provides secure and seamless cross-chain API integration into
            any web3 application
          </p>
        </>)}
      {stage > 100 && stage <= 200 && (
        <>
          <h4>interconnectivity.</h4>
          <p>
            MoonTon’s ecosystem provides cutting edge omnichain products
            that expand the user base, enhance exposure to
            new ecosystems, and deepen customer engagement
          </p>
        </>)}
      {stage > 200 && (
        <>
          <h4>interoperability.</h4>
          <p>
            MoonTon products facilitate effortless transfers of blockchain assets across diverse ecosystems,
            maximizing arbitrage opportunities and enhancing the security of your investments
          </p>
        </>)}
    </div>);
};