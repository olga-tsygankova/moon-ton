import { ReactNode, useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import cn from 'classnames';

import './FormBlock.css';

type FormBlockProps = {
  title: string;
  // поля, которые не должны быть пустыми, чтобы этот блок был рабочим
  watchFieldNames?: string[];
  children: ReactNode;
};
export const FormBlock = ({
  title,
  watchFieldNames,
  children,
}: FormBlockProps) => {
  const watchedFields = useWatch({ name: watchFieldNames ?? ['noField'] });

  /* Забиваем на переход по инпутом по Tab */
  const isBlocked = useMemo(() => {
    if (!watchFieldNames) return false;
    return watchedFields.some((value) => ['', null, undefined].includes(value));
  }, [watchFieldNames, watchedFields]);

  return (
    <div className={cn('form-block-container', isBlocked && 'blocked')}>
      <div className="form-block-title">{title}</div>
      <div className="form-block-fields">{children}</div>
    </div>
  );
};
