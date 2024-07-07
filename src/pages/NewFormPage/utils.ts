import type { IContactForm } from './models';

export const prepareMessage = (data: IContactForm, hasFiles: boolean) => {
  const message = `<b>About Project:</b>
  🔥 Project Name: ${data.projectName}
  🏷 Token Ticker: ${data.tokenSymbol}
  📑 Project Description: ${data.projectDescription ?? 'NO_DATA'}
  <b>Contact Info:</b>
  👦🏼 Name: ${data.name}
  📧 Email: ${data.email ?? 'NO_DATA'}
  📱 Telegram: ${data.telegramLink}
  <b>Contact Link:</b>
  🕊 Twitter: ${data.projectTwitterLink}
  📱 Telegram: ${data.projectTelegramLink}
  🖥 Website: ${data.projectWebsite}
  <b>Other:</b>
  ⛓ Destination chain: ${data.chain}
  📊 Liquidity volume: ${data.liquidity}
  📚 Files: ${hasFiles ? '✅' : '❌'}
  `;

  return message;
};
