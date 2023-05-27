const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:7000', // Adjust the target URL to match your backend server
      changeOrigin: true,
      credentials: true, // Enable sending credentials (cookies, authorization headers, etc.) with the request
      onProxyReq: function(proxyReq, req, res) {
        // Optional: Manipulate the proxy request before sending it
        // For example, you can set additional headers or modify the request body
      },
    })
  );
};
