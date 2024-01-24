// vue.config.js

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'agri-connect-platform-sgr1.onrender.com',
    ],
  },
  
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'agriconnect';
      return args;
    });

    config.plugin('CustomHtmlPlugin').use({
      apply: (compiler) => {
        compiler.hooks.compilation.tap('CustomHtmlPlugin', (compilation) => {
          if (compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing) {
            compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('CustomHtmlPlugin', (data, callback) => {
              // Exclude certain chunks from the HTML file
              data.assets.js = data.assets.js.filter((path) => !path.includes('main.js'));

              callback(null, data);
            });
          }
        });
      },
    });
  },
});
