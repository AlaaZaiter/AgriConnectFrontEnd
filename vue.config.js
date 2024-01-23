const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'https://agri-connect-platform-sgr1.onrender.com',
    ],
  },
});
