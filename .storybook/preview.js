import 'tailwindcss/tailwind.css';
import { addParameters } from '@storybook/client-api';

addParameters({
  docs: {
    isCodeExpanded: true,
  },
  viewMode: 'docs',
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}