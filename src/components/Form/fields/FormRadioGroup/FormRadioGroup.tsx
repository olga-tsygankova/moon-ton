import { get, useController, useFormContext } from 'react-hook-form';
import cn from 'classnames';

import { CheckBox } from '../../../../ui/CheckBox';

import './FormRadioGroup.css';

type FormRadioGroupProps = {
  fieldName: string;
  options: { label: string; value: string }[];
  title: string;
};
export const FormRadioGroup = ({
  fieldName,
  options,
  title,
}: FormRadioGroupProps) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange },
    formState,
  } = useController({ name: fieldName, control });

  const error = get(formState.errors, fieldName);

  return (
    <div className="radio-group-container">
      <div className={cn('radio-label', { error: !!error })}>{title}</div>
      <div className="radio-group-items">
        {options.map((option) => (
          <CheckBox
            key={option.value}
            type="radio"
            name={fieldName}
            id={option.value}
            value={option.value}
            label={option.label}
            onChange={onChange}
            checked={option.value === value}
          />
        ))}
      </div>
      {error && <div className="radio-error-message">{error.message}</div>}
    </div>
  );
};
