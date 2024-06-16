import cn from 'classnames';
import './AdvantagesText.css';
import { useIosDetector } from '../../../../hooks';

type AdvantagesTextProps = {
  stage: number;
  direction: 'backwards' | 'forwards' | 'none'
}

export const AdvantagesText = ({ stage, direction }: AdvantagesTextProps) => {
  const isIos = useIosDetector();

  return (
    <div className="advantages-text">
      <div className="advantages-text-beam-container">
        <span
          className={cn('advantages-text-beam-advantages', direction)}
          style={{ transform: `translateX(${(stage % 100 || -100) / 2}vw)` }} />
      </div>
      <div
        className={cn('advantages-text-block',
          {
            visible: stage <= 100,
            backwards: direction !== 'forwards'
          })}>
        <h4>integrability.</h4>
        <p>
          MoonTon provides secure and seamless cross-chain API integration into
          any web3 application
        </p>
      </div>

      <div
        className={cn('advantages-text-block', {
          visible: stage > 100 && stage <= 200,
          backwards: direction !== 'forwards'
        })}>
        <h4>interconnectivity.</h4>
        <p>
          MoonTon’s ecosystem provides cutting edge omnichain products
          that expand the user base, enhance exposure to
          new ecosystems, and deepen customer engagement
        </p>
      </div>

      <div
        className={cn('advantages-text-block', {
          visible: stage > 200,
          backwards: direction !== 'forwards'
        })}>
        <h4>interoperability.</h4>
        <p>
          MoonTon products facilitate effortless transfers of blockchain assets across diverse ecosystems,
          maximizing arbitrage opportunities and enhancing the security of your investments
        </p>
      </div>
    </div>
  );
};