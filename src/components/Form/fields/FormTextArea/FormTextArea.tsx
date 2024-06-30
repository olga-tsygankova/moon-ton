import { useController, useFormContext } from 'react-hook-form';
import { TextArea } from '../../../../ui/TextArea';

type FormTextInputProps = {
  fieldName: string;
  title: string;
  placeholder: string;
}

export const FormTextArea = ({ fieldName, title, placeholder }: FormTextInputProps) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange },
    formState
  } = useController({ name: fieldName, control });

  return (
    <TextArea
      name={fieldName}
      placeholder={placeholder}
      value={value}
      label={title}
      onChange={onChange}
    />
  );
};