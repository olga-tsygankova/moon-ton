import cn from 'classnames';

import './Input.css';

interface InputProps {
  type: 'text' | 'email';
  name: string;
  placeholder: string;
  value: string | undefined;
  label: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
  error?: { message: string };
}

export const Input = ({
  type,
  name,
  placeholder,
  value,
  label,
  onChange,
  required,
  error,
  ...rest
}: InputProps) => {
  return (
    <div className="input">
      <label
        className={cn('input-label', { error: !!error })}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value ?? ''}
        onChange={onChange}
        required={required}
        {...rest}
      />
      {error && <div className="input-error-message">{error.message}</div>}
    </div>
  );
};
