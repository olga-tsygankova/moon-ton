import "./Main.css";
import { Header } from "../Header";
import { TextAnimation } from './TextAnimation';
import { BridgeBtn } from "../../../ui";
import { OverviewButton } from "../../../ui/Buttons/OverviewButton";

export const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="main-container">
        <TextAnimation />
        <p className="main-subtitle">
          Advanced omnichain interoperability solutions for decentralized
          ecosystems
        </p>
        <div className="main-btn">
          <BridgeBtn />
          <OverviewButton>Explore ecosystem</OverviewButton>
        </div>
      </div>
    </div>
  );
};
