function loadWebpackConfig(env) {
  return require(`./webpack.${env}.js`);
}

module.exports = loadWebpackConfig;