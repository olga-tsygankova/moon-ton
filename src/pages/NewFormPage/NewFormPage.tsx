import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Footer, Header } from '../MainPage';
import { Form, FormRadioGroup, FormTextArea, FormTextInput } from '../../components';
import { SubmitButton } from '../../ui';
import { sendMessage } from '../../api/telegram';
import { FormBlock } from './FormBlock';
import { UploadAsset } from './UploadAsset';
import type { IContactForm } from './models';

import './NewFormPage.css';

const chainOptions = [
  { value: 'Ethereum', label: 'Ethereum' },
  { value: 'Solana', label: 'Solana' },
  { value: 'TON', label: 'TON' },
];

export const NewFormPage = () => {
  const methods = useForm<IContactForm>();
  const [isFetching, setIsFetching] = useState(false);

  const handleSendData = async (data: Record<string, any>) => {
    try {
      setIsFetching(true);
      const message = JSON.stringify(data);
      await sendMessage(message);
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
        console.log(JSON.stringify(data));
        handleSendData(data);
      },
      (data) => {
        console.log('INVALID');
        console.log(data);
      })();
  }, [methods]);


  return (
    <div className="new-form-page">
      <Header />
      <div className="form-all-container">
        <Form methods={methods}>
          <FormBlock title="About Project">
            <FormTextInput fieldName="projectName" title="Project Name*" placeholder="Name" />
            <FormTextInput fieldName="tokenSymbol" title="Token Symbol or Ticker*" placeholder="$MOON" />
            <FormTextArea
              fieldName="projectDescription"
              title="Project Description"
              placeholder="Describe your project"
            />
          </FormBlock>
          <FormBlock title="Contact">
            <FormTextInput fieldName="name" title="Name*" placeholder="Name" />
            <FormTextInput fieldName="email" title="Email" placeholder="email@gmail.com" />
            <FormTextInput fieldName="telegramLink" title="Telegram Link*" placeholder="@username" />
          </FormBlock>
          <FormBlock title="Project Link">
            <FormTextInput
              fieldName="projectTwitterLink"
              title="Project Twitter Link*"
              placeholder="https:// twitter.com/moonton"
            />
            <FormTextInput
              fieldName="projectTelegramLink"
              title="Project Telegram Link*"
              placeholder="https://t.me/moonton"
            />
            <FormTextInput
              fieldName="projectWebsite"
              title="Project Website*"
              placeholder="https://moonton.io"
            />
          </FormBlock>
          <FormBlock title="Other">
            <FormRadioGroup fieldName="chain" options={chainOptions} title="Destination chain*" />
            <FormTextInput
              fieldName="liquidity"
              title="How much liquidity will you be adding in the pool?*"
              placeholder="how much?"
            />
            <UploadAsset />
          </FormBlock>
          <div>
            <SubmitButton
              onClick={handleSubmit}
              disabled={isFetching}
            >
              Submit
            </SubmitButton>
          </div>
        </Form>
      </div>

      {/*<Footer />*/}
    </div>
  );
};