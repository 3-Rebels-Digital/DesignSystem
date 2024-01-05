/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');

const config = {
  // ... your existing config
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../src/**/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    // ... other addons
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],

  // Add this function to modify the internal Webpack config
  webpackFinal: async (config, { configType }) => {
    // "configType" has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of the storybook.

    // Add alias configuration
    config.resolve.alias = {
      ...(config.resolve.alias || {}), // preserve existing aliases
      '@public': path.resolve(__dirname, '../public'), // add your new alias
    };

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.(otf)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      ]
    })

    // Return the altered config
    return config;
  },
};

export default config;
