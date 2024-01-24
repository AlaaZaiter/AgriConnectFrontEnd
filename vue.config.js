const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'agri-connect-platform-sgr1.onrender.com',
    ],
  },
  configureWebpack: (config) => {
    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.compilation.tap('CustomHtmlPlugin', (compilation) => {
          compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('CustomHtmlPlugin', (data, callback) => {
            // Exclude certain chunks from the HTML file
            data.assets.js = data.assets.js.filter((path) => !path.includes('main.js'));

            // You can customize this logic based on your needs

            callback(null, data);
          });
        });
      },
    });
  },
});
