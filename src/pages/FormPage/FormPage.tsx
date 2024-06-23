import "./FormPage.css";
import { Footer, Header } from "../MainPage";
import { Form } from './components/Form/components';
// import { Button, Checkbox, Group, TextInput } from "@mantine/core";

import { useForm } from "@mantine/form";
import { useState } from "react";
import { sendMessage } from '../../api/telegram';

export const FormPage = () => {

  //TODO:добавить валидацию и обработку ошибок, тг получает сообщения

  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = async ({
    email,
    termsOfService,
  }: typeof form.values): Promise<void> => {
    try {
      const message = `Email: ${email}, Agreement: ${termsOfService}`;
      await sendMessage(message)

      // setIsLoading(true);
    } catch (e) {
      form.setFieldError("email", "ОШИБКА");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-page">
      <Header />

      {/*<form onSubmit={form.onSubmit(handleSubmit)}>*/}
      {/*  <TextInput*/}
      {/*    withAsterisk*/}
      {/*    label="Email"*/}
      {/*    placeholder="your@email.com"*/}
      {/*    key={form.key("email")}*/}
      {/*    {...form.getInputProps("email")}*/}
      {/*  />*/}

      {/*  <Checkbox*/}
      {/*    mt="md"*/}
      {/*    label="I agree to sell my privacy"*/}
      {/*    key={form.key("termsOfService")}*/}
      {/*    {...form.getInputProps("termsOfService", { type: "checkbox" })}*/}
      {/*  />*/}
      {/*  <Group justify="flex-end" mt="md">*/}
      {/*    <Button loading={isLoading} type="submit">Submit</Button>*/}
      {/*  </Group>*/}
      {/*</form>*/}
      <Form/>
      <Footer />
    </div>
  );
};
