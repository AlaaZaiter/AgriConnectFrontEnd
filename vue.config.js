const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'agri-connect-platform-sgr1.onrender.com',
    ],
  },
  configureWebpack: {
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.compilation.tap('CustomHtmlPlugin', (compilation) => {
            // Ensure the HtmlWebpackPlugin is available before using its hooks
            if (compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing) {
              compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('CustomHtmlPlugin', (data, callback) => {
                // Exclude certain chunks from the HTML file
                data.assets.js = data.assets.js.filter((path) => !path.includes('main.js'));

                // You can customize this logic based on your needs

                callback(null, data);
              });
            }
          });
        },
      },
    ],
  },
});
