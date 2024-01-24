// vue.config.js

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'https://agriconnect-11.onrender.com',
    ],
    
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/AgriConnectFrontEnd' : '/',

  configureWebpack: {
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.compilation.tap('CustomHtmlPlugin', (compilation) => {
            if (compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing) {
              compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('CustomHtmlPlugin', (data, callback) => {
                // You can customize the title here
                data.htmlWebpackPlugin.options.title = 'agriconnect';

                // Exclude certain chunks from the HTML file
                data.assets.js = data.assets.js.filter((path) => !path.includes('main.js'));

                callback(null, data);
              });
            }
          });
        },
      },
    ],
  },
});
