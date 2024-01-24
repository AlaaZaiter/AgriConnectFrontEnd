module.exports = {
  outputDir: 'dist', // Adjust the path accordingly
  devServer: {
    allowedHosts: [
      'agri-connect-platform-sgr1.onrender.com',
      // Add more allowed hosts if needed
    ],
    port: 8080, // You can change the port number if needed
  },
  configureWebpack: {
    entry: './src/main.js',
  },
};
