import { ChangeEvent, useCallback, useRef } from 'react';
import { UploadButton } from '../../../ui';

import './UploadAsset.css';

type UploadAssetProps = {
  onUploadFile: (data: FileList) => void;
  attachedFiles: FileList | null;
};

/**
 * Компонент для загрузки файлов, если она будет
 * */
export const UploadAsset = ({
  onUploadFile,
  attachedFiles,
}: UploadAssetProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickUpload = useCallback(() => {
    if (inputRef.current) inputRef.current.click();
  }, []);

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) onUploadFile(event.target.files);
    },
    [onUploadFile],
  );

  return (
    <div className="upload__btn">
      <div className="upload__btn__title">Logo and Branding Assets</div>
      <input
        ref={inputRef}
        type="file"
        multiple
        onChange={handleFileChange}
        hidden
      />
      <UploadButton onClick={handleClickUpload}>Upload</UploadButton>
      <div className="upload__btn__subtitle">
        {attachedFiles
          ? `${attachedFiles.length} file(s) attached`
          : 'No file chosen'}
      </div>
    </div>
  );
};
