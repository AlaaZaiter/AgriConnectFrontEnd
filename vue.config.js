const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'agri-connect-platform-sgr1.onrender.com',
    ],
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: process.env.NODE_ENV === 'production' ? 'build/path/index.html' : 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
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
