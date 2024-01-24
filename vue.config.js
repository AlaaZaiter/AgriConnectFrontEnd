const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  configureWebpack: {
    entry: './src/main.js',
    outputDir: 'dist', // Adjust the path accordingly
  },
});
