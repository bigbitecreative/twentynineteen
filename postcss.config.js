const autoprefixer = require('autoprefixer');

module.exports = (context) => {
  const env = context.webpack.options.mode;

  const plugins = [
    autoprefixer(),
  ];

  return { plugins }
}
