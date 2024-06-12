import "./Input.css";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: any;
  label:string,
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
}

export const Input = ({
  type,
  name,
  placeholder,
  value,
  label,
  onChange,
  required,
  ...rest
}: InputProps) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...rest}
      />
    </div>
  );
};
