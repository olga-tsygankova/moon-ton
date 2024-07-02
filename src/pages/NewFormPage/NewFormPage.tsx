import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Footer, Header } from '../MainPage';
import { SubmitButton } from '../../ui';
import { sendMessage } from '../../api/telegram';
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

  const handleSendData = async (data: IContactForm) => {
    try {
      setIsFetching(true);
      await sendMessage(prepareMessage(data));
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
        handleSendData(data);
      },
      (data) => {
        console.log('INVALID');
        console.log(data);
      },
    )();
  }, [methods]);

  return (
    <div className="new-form-page">
      <Header />
      <div className="form-all-container">
        <FormBody methods={methods} />
        <div>
          <SubmitButton
            onClick={handleSubmit}
            disabled={isFetching}
          >
            Submit
          </SubmitButton>
        </div>
      </div>

      {/*<Footer />*/}
    </div>
  );
};
