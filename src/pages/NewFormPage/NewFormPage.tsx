import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Footer, Header } from '../MainPage';
import { SubmitButton } from '../../ui';
import { sendFIle, sendMessage } from '../../api/telegram';
import { FormBody } from './FormBody';
import type { IContactForm } from './models';
import { prepareMessage } from './utils';
import { contactInfoSchema } from './constants';

import './NewFormPage.css';

export const NewFormPage = () => {
  const methods = useForm<IContactForm>({
    resolver: yupResolver(contactInfoSchema),
  });
  const [isFetching, setIsFetching] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formFiles, setFormFiles] = useState<FileList | null>(null);

  const handleSetUploadFile = useCallback((data: FileList) => {
    setFormFiles(data);
  }, []);

  const handleSendFiles = useCallback(() => {
    console.log('FILES');
    if (!formFiles) return;
    console.log(formFiles);
    // const formData = new FormData();
    console.log(formFiles.length);
    sendFIle(formFiles[0]);

    for (let i = 0; i++; i <= formFiles.length) {
      console.log(i);
      // sendFIle(formFiles[i]);
    }
  }, [formFiles]);

  const handleSendData = async (data: IContactForm) => {
    try {
      setIsFetching(true);
      // const fileResult = await sendFIle()

      // const result = await sendMessage(prepareMessage(data));
      // handleSendFiles();
      // return result;
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  const handleSubmit = useCallback(() => {
    methods.handleSubmit(
      (data) => {
        console.log('VALID');
        console.log(data);
        // const result = handleSendData(data);
        // result
        //   .then((value) => console.log(value))
        //   .catch((error) => console.log(error));
        // console.log(result);
        handleSendFiles();
      },
      (data) => {
        console.log('INVALID');
        console.log(data);
      },
    )();
  }, [handleSendFiles, methods]);

  return (
    <div className="new-form-page">
      <Header />
      {!isSuccess && (
        <div className="form-all-container">
          <FormBody
            methods={methods}
            onUploadFile={handleSetUploadFile}
            attachedFiles={formFiles}
          />
          <div>
            <SubmitButton
              onClick={handleSubmit}
              disabled={isFetching}
            >
              Submit
            </SubmitButton>
          </div>
        </div>
      )}
      {isSuccess && <div className="form-all-container">SUCCESS!!!</div>}

      <Footer />
    </div>
  );
};
