
const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@interfaces': path.resolve(__dirname, '../src/interfaces'),
    '@components': path.resolve(__dirname, '../src/components'),
    '@atoms': path.resolve(__dirname, '../src/components/atoms'),
    '@molecules': path.resolve(__dirname, '../src/components/molecules'),
    '@organisms': path.resolve(__dirname, '../src/components/organisms'),
    '@colors': path.resolve(__dirname, '../src/colors'),
    '@assets': path.resolve(__dirname, '../src/assets'),
    '@css': path.resolve(__dirname, '../src/css'),
  };

  return config;
};
