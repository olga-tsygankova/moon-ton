import * as yup from 'yup';

const errorLabels = {
  required: 'This field is required',
};

export const contactInfoSchema = yup.object().shape({
  projectName: yup.string().required(errorLabels.required),
  tokenSymbol: yup.string().required(errorLabels.required),
  projectDescription: yup.string(),

  name: yup.string().required(errorLabels.required),
  telegramLink: yup.string().required(errorLabels.required),
  email: yup.string(),

  projectTwitterLink: yup.string().required(errorLabels.required),
  projectTelegramLink: yup.string().required(errorLabels.required),
  projectWebsite: yup.string().required(errorLabels.required),

  chain: yup.string().required(errorLabels.required),
  liquidity: yup.string().required(errorLabels.required),
  // upload
});
