import type { IContactForm } from './models';

export const prepareMessage = (data: IContactForm) => {
  const message = `<b>About Project:</b>
  🔥 Project Name: ${data.projectName ?? 'NO_DATA'}
  🏷 Token Ticker: ${data.tokenSymbol ?? 'NO_DATA'}
  📑 Project Description: ${data.projectName ?? 'NO_DATA'}
  <b>Contact Info:</b>
  👦🏼 Name: ${data.name ?? 'NO_DATA'}
  📧 Email: ${data.email ?? 'NO_DATA'}
  📱 Telegram: ${data.telegramLink ?? 'NO_DATA'}
  <b>Contact Link:</b>
  🕊 Twitter: ${data.projectTwitterLink ?? 'NO_DATA'}
  📱 Telegram: ${data.projectTelegramLink ?? 'NO_DATA'}
  🖥 Website: ${data.projectWebsite ?? 'NO_DATA'}
  <b>Other:</b>
  ⛓ Destination chain: ${data.chain ?? 'NO_DATA'}
  📊 Liquidity volume: ${data.liquidity ?? 'NO_DATA'}
  📚 Files: TODO
  `;

  return message;
};
