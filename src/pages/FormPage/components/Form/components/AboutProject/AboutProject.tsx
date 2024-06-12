import "./AboutProject.css";
import { Input } from "../../../../../../ui/Input";
import { TextArea } from "../../../../../../ui/TextArea";
import { ChangeEvent } from "react";

type IProps = {
  projectName: string;
  tokenSymbol: string;
  projectDescription?: string;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export const AboutProject = ({
  projectName,
  handleInputChange,
  tokenSymbol,
  projectDescription,
}: IProps) => {
  return (
    <div className="about-project">
      <div className="about-project__container">
        <div className="about-project__title">About Project</div>
        <div className="input-wrapper">
        <Input
          type="text"
          name="projectName"
          placeholder="Name"
          value={projectName}
          label={"Project Name*"}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="tokenSymbol"
          placeholder="$MOON"
          label={"Token Symbol or Ticker*"}
          value={tokenSymbol}
          onChange={handleInputChange}
          required
        />
        </div>
        <TextArea
          name="projectDescription"
          placeholder="Describe your project"
          value={projectDescription}
          onChange={handleInputChange}
          label={"Project Description"}
        />
      </div>
    </div>
  );
};
