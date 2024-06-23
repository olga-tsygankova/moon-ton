const baseURL = 'https://api.telegram.org/bot7231470305:AAEe4MXa_FnWEPY5dT3ygFopQh_ss7lFv0g/';

export const sendMessage = async (message: string): Promise<void> => {
  const url = `${baseURL}sendMessage?chat_id=-4221381310&text=${message}`;
  const response = await fetch(url);
  console.log(`response`,response);
};
