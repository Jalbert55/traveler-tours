import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
  app.use(
    '/api', // Cambia esto según tu necesidad
    createProxyMiddleware({
      target: 'https://q.megatravel.com.mx',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Reescribe la ruta
      },
    })
  );
};