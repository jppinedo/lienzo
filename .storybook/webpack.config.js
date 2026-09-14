
const path = require('path');

const ALIASES = {
  '@interfaces': path.resolve(__dirname, '../src/interfaces'),
  '@components': path.resolve(__dirname, '../src/components'),
  '@atoms': path.resolve(__dirname, '../src/components/atoms'),
  '@molecules': path.resolve(__dirname, '../src/components/molecules'),
  '@organisms': path.resolve(__dirname, '../src/components/organisms'),
  '@colors': path.resolve(__dirname, '../src/colors'),
  '@assets': path.resolve(__dirname, '../src/assets'),
  '@css': path.resolve(__dirname, '../src/css'),
  '@docs': path.resolve(__dirname, '../src/docs'),
};

module.exports = ({ config }) => {
  config.resolve = config.resolve || {};
  const existing = config.resolve.alias;

  // Storybook 8 may provide resolve.alias as an array; spreading an array into an
  // object drops named aliases and breaks MDX (which does not use Babel module-resolver).
  if (Array.isArray(existing)) {
    const withoutOurs = existing.filter((entry) => {
      const name = typeof entry === 'string' ? entry : entry && entry.name;
      return !name || !Object.prototype.hasOwnProperty.call(ALIASES, name);
    });
    config.resolve.alias = [
      ...withoutOurs,
      ...Object.entries(ALIASES).map(([name, alias]) => ({ name, alias })),
    ];
  } else {
    config.resolve.alias = {
      ...(existing || {}),
      ...ALIASES,
    };
  }

  return config;
};
