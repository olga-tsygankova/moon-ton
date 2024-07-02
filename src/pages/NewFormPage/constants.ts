import * as yup from 'yup';

const errorLabels = {
  required: 'This field is required',
  telegramName: "This address doesn't seem right",
  typeNumberError: 'Should be a valid number',
};

// https://regex101.com/r/wbWNpu/1
const tgPattern = /(?:@|(?:(?:(?:https?:\/\/)?t(?:elegram)?)\.me\/))(\w{4,})$/;

export const contactInfoSchema = yup.object().shape({
  projectName: yup.string().max(255).required(errorLabels.required),
  tokenSymbol: yup.string().max(32).required(errorLabels.required),
  projectDescription: yup.string(),

  name: yup.string().max(255).required(errorLabels.required),
  telegramLink: yup
    .string()
    .max(255)
    .required(errorLabels.required)
    .matches(tgPattern, errorLabels.telegramName),
  email: yup.string().max(255).email(),

  projectTwitterLink: yup
    .string()
    .max(255)
    .required(errorLabels.required)
    .url(errorLabels.telegramName),
  projectTelegramLink: yup
    .string()
    .max(255)
    .required(errorLabels.required)
    .matches(tgPattern, errorLabels.telegramName),
  projectWebsite: yup
    .string()
    .max(255)
    .required(errorLabels.required)
    .url(errorLabels.telegramName),

  chain: yup.string().required(errorLabels.required),
  liquidity: yup
    .number()
    .typeError(errorLabels.typeNumberError)
    .required(errorLabels.required),
  // upload
});
