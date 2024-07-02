import './TextArea.css';
import cn from 'classnames';

interface TextAreaProps {
  name: string;
  placeholder: string;
  value: any;
  label: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  error?: { message: string };
}

export const TextArea = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  ...rest
}: TextAreaProps) => {
  return (
    <div className="textarea">
      <label
        className={cn('textarea-label', { error: !!error })}
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {error && <div className="textarea-error-message">{error.message}</div>}
    </div>
  );
};
