/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const config = {
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-dark-mode"
  ],
  framework: "@storybook/react-webpack5",
  features: {
    "storyStoreV7": true
  },
}
export default config;