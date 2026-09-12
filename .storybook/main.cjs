/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');

const config = {
  stories: [
    '../src/docs/index.mdx',
    '../src/**/*.stories.tsx',
    '../src/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-themes',
    '@storybook/addon-docs',
    '@storybook/addon-docs/blocks',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [{
          test: /\.css$/,
          sideEffects: true,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                implementation: require.resolve('postcss'),
              },
            },
          ],
        }],
      },
    },
  ],
  webpackFinal: async (webpackConfig) => {
    if (webpackConfig.module && webpackConfig.module.rules) {
      webpackConfig.module.rules.push({
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [['react-app', { flow: false, typescript: true }]],
            },
          },
        ],
      });
    }
    if (webpackConfig.module && webpackConfig.module.rules) {
      webpackConfig.module.rules.push({
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      });
    }
    if (webpackConfig.resolve && webpackConfig.resolve.extensions) {
      webpackConfig.resolve.extensions.push('.ts', '.tsx');
    }
    return webpackConfig;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

module.exports = config;
