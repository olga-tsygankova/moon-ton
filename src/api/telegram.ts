const baseURL = 'https://api.telegram.org';

const botLink = 'bot7231470305:AAEe4MXa_FnWEPY5dT3ygFopQh_ss7lFv0g';

const chatId = '-4221381310';

export const sendMessage = async (message: string) => {
  // без кодирования # в тексте инпута обрезает сообщение
  const safeMessage = encodeURIComponent(message);
  const url = `${baseURL}/${botLink}/sendMessage?chat_id=${chatId}&text=${safeMessage}&parse_mode=HTML`;
  return await fetch(url);
};

/** Отправка файла в ТГ
 * До 10 МБ фото, до 50 МБ остальные типы файлов */
export const sendFIle = async (fileData: File) => {
  const url = `${baseURL}/${botLink}/sendDocument`;

  const formData = new FormData();
  console.log(formData);

  formData.append('document', fileData, fileData.name);
  formData.append('chat_id', chatId);
  formData.append('caption', 'Тестируем загрузку файлов в поезде');
  formData.append('disable_content_type_detection', 'true');
  // formData.append('chat_id', chatId);
  // formData.append('chat_id', chatId);


  console.log(formData);

  const body = {
    chat_id: chatId,
    document: formData,
    caption: 'Тестируем загрузку файлов в поезде',
    disable_notification: true,
    formData,

    disable_content_type_detection: true,
  };
  const response = await fetch(url, {
    method: 'POST',
    // headers: {
    //   'Content-Type': undefined },
    body: formData,
  });
  console.log(`response2`, response);
  return response;
};
