const path = require("path");
const CLIENT_PATH = path.join(__dirname, '../client');
const STORIES_PATH = path.join(__dirname, '../stories');
const STORIES_CONFIG_PATH = path.join(__dirname, '../.storybook');
const TESTS_PATH = path.join(__dirname, '../tests');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [
      CLIENT_PATH,
      STORIES_PATH,
      STORIES_CONFIG_PATH,
      TESTS_PATH
    ],
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            configFileName: './.storybook/tsconfig.json'
          }
        },
        { loader: require.resolve('react-docgen-typescript-loader') }
      ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
    '@client': path.resolve(__dirname, '../client'),
    'tests': path.resolve(__dirname, '../tests'),
  }

  return config;
};