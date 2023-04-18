/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const config = {
  stories: ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y", "storybook-dark-mode", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  features: {
    "storyStoreV7": true
  },
  docs: {
    autodocs: true
  }
};
export default config;