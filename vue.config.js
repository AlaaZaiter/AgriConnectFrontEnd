const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/agriconnect/' : '/',
  devServer: {
    allowedHosts: ['agri-connect-platform-sgr1.onrender.com'],
  },
  configureWebpack: {
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.compilation.tap('CustomHtmlPlugin', (compilation) => {
            if (compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing) {
              compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync(
                'CustomHtmlPlugin',
                (data, callback) => {
                  // You can customize the title here
                  data.htmlWebpackPlugin.options.title = 'agriconnect';

                  // Exclude certain chunks from the HTML file
                  data.assets.js = data.assets.js.filter(
                    (path) => !path.includes('main.js')
                  );

                  callback(null, data);
                }
              );
            }
          });
        },
      },
    ],
  },
});
