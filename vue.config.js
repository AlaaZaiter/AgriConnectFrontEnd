const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'localhost',
      'https://backendagri.onrender.com',
      '192.168.1.1',
    ],

  },
})
