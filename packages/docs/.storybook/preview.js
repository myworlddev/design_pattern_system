/** @type { import('@storybook/react').Preview } */

import {themes} from '@storybook/theming';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      theme: themes.dark,
    }
    ,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: { ...themes.dark, appBg: '#121214',
      appContentBg:'#121214'
     },
      light: { ...themes.light, appBg: '#E1E1E6',docs:'',
      appContentBg:'#E1E1E6' },
      classTarget: 'html',
      stylePreview: true
    }
    },
  
};

export default preview;