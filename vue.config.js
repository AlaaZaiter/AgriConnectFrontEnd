const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: ['vue'], // Example: Add specific dependencies to transpile
  devServer: {
    // Configuration for the development server
    // ...
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
    entry: './src/main.js',
    outputDir: 'dist', // Adjust the path accordingly
  },
});
