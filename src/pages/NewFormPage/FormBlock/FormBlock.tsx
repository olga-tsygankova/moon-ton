import type { ReactNode } from 'react';

import './FormBlock.css'

type FormBlockProps = {
  title: string;
  children: ReactNode;
}
export const FormBlock = ({ title, children }: FormBlockProps) => {
  return (
    <div className="form-block-container">
      <div className="form-block-title">{title}</div>
      <div className="form-block-fields">
        {children}
      </div>
    </div>
  );
};