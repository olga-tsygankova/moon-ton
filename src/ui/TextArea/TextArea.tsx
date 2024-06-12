import "./TextArea.css";

interface TextAreaProps {
  name: string;
  placeholder: string;
  value: any;
  label: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export const TextArea = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  ...rest
}: TextAreaProps) => {
  return (
    <div className="textarea">
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
