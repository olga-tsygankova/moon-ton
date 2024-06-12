import "./ProjectLink.css";
import { Input } from "../../../../../../ui/Input";
import { ChangeEvent } from "react";

type IProps = {
  projectTwitterLink: string;
  projectTelegramLink: string;
  projectWebsite: string;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export const ProjectLink = ({
                              projectTwitterLink,
  handleInputChange,
                              projectTelegramLink,
                              projectWebsite,
}: IProps) => {
  return (
    <div className="project-link">
      <div className="project-link__container">
        <div className="project-link__title">Project Link</div>
        <div className="input-wrapper">
          <Input
            type="text"
            name="projectTwitterLink"
            placeholder="https:// twitter.com/moonton"
            label={"Project Twitter Link*"}
            value={projectTwitterLink}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            name="projectTelegramLink"
            placeholder="https://t.me/moonton"
            label={"Project Telegram Link*"}
            value={projectTelegramLink}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            name="projectWebsite"
            placeholder="https://moonton.io"
            value={projectWebsite}
            label={"Project Website*"}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </div>
  );
};
