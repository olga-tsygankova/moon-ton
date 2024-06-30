import type { ReactNode } from 'react';

type FormBlockProps = {
  title: string;
  children: ReactNode;
}
export const FormBlock = ({ title, children }: FormBlockProps) => {
  return (
    <div className="form-block-container">
      <div className="form-block-container">{title}</div>
      <div className="form-block-fields">
        {children}
      </div>
    </div>
  );
};