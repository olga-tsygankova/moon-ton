import "./FormPage.css";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
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
