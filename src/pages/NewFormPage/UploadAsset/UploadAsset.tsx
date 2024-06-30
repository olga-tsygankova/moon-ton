import { UploadButton } from '../../../ui';

import './UploadAsset.css';

/**
 * Компонент для загрузки файлов, если она будет
 * */
export const UploadAsset = () => {
  return (
    <div className="upload__btn">
      <div className="upload__btn__title">Logo and Branding Assets</div>
      <UploadButton>Upload</UploadButton>
      <div className="upload__btn__subtitle">No file chosen</div>
    </div>
  );
};