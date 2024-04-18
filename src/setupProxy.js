const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://3.109.49.81/',
      changeOrigin: true,
    })
  );
  console.log("I am proxying");
};