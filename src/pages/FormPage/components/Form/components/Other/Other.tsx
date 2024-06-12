import "./Other.css";
import { Input } from "../../../../../../ui/Input";
import { ChangeEvent } from "react";
import { CheckBox } from "../../../../../../ui/CheckBox";
import { Upload } from "../../../../../../ui/Buttons/Upload";

type IProps = {
  liquidity: string;
  checked: any;
  chain: string | null;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export const Other = ({
  liquidity,
  checked,
  chain,
  handleInputChange,
}: IProps) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleInputChange(event); // Forward the event to the parent component
  };
  return (
    <div className="other">
      <div className="other__container">
        <div className="other__title">Other</div>
        <div className="other__wrapper">
          <div className="check-box__wrapper">
            <div className="check-box__title">Destination chain*</div>
            <div className="check-box__container">
              <CheckBox
                type="radio"
                id={"chain1"}
                name={"chain"}
                value={"Ethereum"}
                label={"Ethereum"}
                onChange={handleCheckboxChange}
                checked={chain === "Ethereum"}
              />
              <CheckBox
                type="radio"
                id={"chain2"}
                name={"chain"}
                value={"Solana"}
                label={"Solana"}
                onChange={handleCheckboxChange}
                checked={chain === "Solana"}
              />

              <CheckBox
                type="radio"
                id={"chain3"}
                name={"chain"}
                value={"TON"}
                label={"TON"}
                onChange={handleCheckboxChange}
                checked={chain === "TON"}
              />
            </div>
          </div>
          <Input
            type="text"
            name="liquidity"
            label={"How much liquidity will you be adding in the pool?*"}
            value={liquidity}
            onChange={handleInputChange}
            placeholder="how much?"
          />
          <div className="upload__btn">
            <div className="upload__btn__title">Logo and Branding Assets</div>
            <Upload>Upload</Upload>
            <div className="upload__btn__subtitle">No file chosen</div>
          </div>
        </div>
      </div>
    </div>
  );
};
