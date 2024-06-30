import { useController, useFormContext } from 'react-hook-form';
import { CheckBox } from '../../../../ui/CheckBox';

type FormRadioGroupProps = {
  fieldName: string;
  options: { label: string, value: string }[];
  title: string;

}
export const FormRadioGroup = ({ fieldName, options, title }: FormRadioGroupProps) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange },
    formState
  } = useController({ name: fieldName, control });

  return (
    <div>
      <div>{title}</div>
      <div>
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
    </div>
  );
};