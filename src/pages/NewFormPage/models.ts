export type IContactForm = {
  projectName: string;
  tokenSymbol: string;
  projectDescription?: string;
  name: string;
  telegramLink: string;
  email?: string;
  projectTwitterLink: string;
  projectTelegramLink: string;
  projectWebsite: string;
  chain: string | null;
  liquidity: string;
  upload?: string;
}