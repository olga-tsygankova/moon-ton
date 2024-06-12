import "./CheckBox.css";
import { ChangeEvent } from "react";

interface CheckBoxProps {
  type: string;
  name: string;
  id: string;
  value: any;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: any;
}

export const CheckBox = ({
  type,
  id,
  name,
  value,
  label,
  checked,
  onChange,
  ...rest
}: CheckBoxProps) => {
  return (
    <div className="check-box">
      <div className="check-box__wrapper">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden-checkbox"
      />
      </div>
      <label htmlFor="chain1" className="custom-checkbox-label">{label}</label>
    </div>
  );
};
