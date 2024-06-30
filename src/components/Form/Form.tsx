import type { ReactNode } from 'react';
import { FormProvider } from 'react-hook-form';
import type { FieldValues, UseFormReturn } from 'react-hook-form';

type FormProps<Type extends FieldValues> = {
  methods: UseFormReturn<Type>;
  children: ReactNode
}
export const Form = <Type extends FieldValues, >({ methods, children }: FormProps<Type>) => {

  return <FormProvider {...methods}>{children}</FormProvider>;
};