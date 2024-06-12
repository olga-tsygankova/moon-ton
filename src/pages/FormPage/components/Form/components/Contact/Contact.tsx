import "./Contact.css";
import { Input } from "../../../../../../ui/Input";
import { ChangeEvent } from "react";

type IProps = {
  name: string;
  telegramLink: string;
  email?: string;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export const Contact = ({
  name,
  handleInputChange,
  telegramLink,
  email,
}: IProps) => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__title">Contact</div>
        <div className="input-wrapper">
          <Input
            type="text"
            name="name"
            label={"Name*"}
            placeholder="Name"
            value={name}
            onChange={handleInputChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="email@gmail.com"
            label={"Email"}
            value={email}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="telegramLink"
            placeholder="@username"
            label={"Telegram Link*"}
            value={telegramLink}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </div>
  );
};
