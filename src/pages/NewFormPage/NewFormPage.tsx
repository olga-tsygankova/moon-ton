import { useForm } from 'react-hook-form';

import { Header } from '../MainPage';
import type { IContactForm } from './models';
import { Form, FormTextInput } from '../../components';
import { FormBlock } from './FormBlock';

import './NewFormPage.css';

export const NewFormPage = () => {
  const methods = useForm<IContactForm>();

  return (
    <div className="new-form-page">
      <Header />
      <Form methods={methods}>
        <FormBlock title="About Project">
          <FormTextInput fieldName="projectName" title="Project Name*" placeholder="Name" />
          <FormTextInput fieldName="tokenSymbol" title="Token Symbol or Ticker*" placeholder="$MOON" />
          <FormTextInput
            fieldName="projectDescription" title="Project Description" placeholder="Describe your project"
          />
        </FormBlock>
        {/* */}
        <FormBlock title="About Project">
          <FormTextInput fieldName="projectName" title="Project Name*" placeholder="Name" />
          <FormTextInput fieldName="tokenSymbol" title="Token Symbol or Ticker*" placeholder="$MOON" />
          <FormTextInput fieldName="projectName" title="Project Name*" placeholder="Name" />
        </FormBlock>
        <FormBlock title="About Project">
          <FormTextInput fieldName="projectName" title="Project Name*" placeholder="Name" />
          <FormTextInput fieldName="tokenSymbol" title="Token Symbol or Ticker*" placeholder="$MOON" />
          <FormTextInput fieldName="projectName" title="Project Name*" placeholder="Name" />
        </FormBlock>
        <FormBlock title="About Project">
          <FormTextInput fieldName="projectName" title="Project Name*" placeholder="Name" />
          <FormTextInput fieldName="tokenSymbol" title="Token Symbol or Ticker*" placeholder="$MOON" />
          <FormTextInput fieldName="projectName" title="Project Name*" placeholder="Name" />
        </FormBlock>
      </Form>
      {/*  <Footer /> */}
    </div>
  );
};