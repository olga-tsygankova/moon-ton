import "./FormPage.css";
import { Header } from '../MainPage';
import { Footer } from '../MainPage';
import { Form } from './components/Form/components';

import "./FormPage.css"


export const FormPage = () => {
  return (
    <div className="form-page">
      <Header />
      <Form/>
      <Footer />
    </div>
  );
};
