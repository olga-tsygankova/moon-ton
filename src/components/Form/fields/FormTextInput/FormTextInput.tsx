import { get, useController, useFormContext } from 'react-hook-form';
import { Input } from '../../../../ui/Input';

type FormTextInputProps = {
  fieldName: string;
  title: string;
  placeholder: string;
};

export const FormTextInput = ({
  fieldName,
  title,
  placeholder,
}: FormTextInputProps) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange },
    formState,
  } = useController({ name: fieldName, control });

  const error = get(formState.errors, fieldName);

  return (
    <Input
      type="text"
      name={fieldName}
      placeholder={placeholder}
      value={value}
      label={title}
      onChange={onChange}
      error={error}
    />
  );
};
