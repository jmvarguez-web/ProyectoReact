// En src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // Ruta de la API que deseas proxy
    createProxyMiddleware({
      target: 'https://www.freetogame.com',  // URL de la API real
      changeOrigin: true,
    })
  );
};