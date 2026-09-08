import type { Preview } from "@storybook/react";

import { withThemeByDataAttribute } from "@storybook/addon-themes";

import '../src/tailwind.css';
import './story-global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) => {
        const aTitle = a.title ?? '';
        const bTitle = b.title ?? '';
        if (aTitle === 'Welcome') return -1;
        if (bTitle === 'Welcome') return 1;
        return aTitle.localeCompare(bTitle, undefined, { numeric: true });
      },
    },
  }
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];

// export const parameters = {
//   backgrounds: {
//     default: 'light',
//     values: [
//       {
//         name: 'light',
//         value: '#ffffff',
//       },
//       {
//         name: 'dark',
//         value: '#000000',
//       },
//     ],
//   },
// };

export default preview;
