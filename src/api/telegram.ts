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
export const sendFile = async (fileData: File, message: string) => {
  const url = `${baseURL}/${botLink}/sendDocument`;

  const formData = new FormData();

  formData.append('document', fileData, fileData.name);
  formData.append('chat_id', chatId);
  formData.append('disable_content_type_detection', 'true');
  formData.append('caption', message); // без encodeURIComponent
  formData.append('parse_mode', 'HTML');

  return await fetch(url, {
    method: 'POST',
    // Обязательно не указывать Content-Type
    // headers: {'Content-Type': undefined },
    body: formData,
  });
};
