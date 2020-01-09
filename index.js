require('dotenv').config();
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
  // create the express app
  const expressApp = express();

  // declaring routes for our pages
  expressApp.get('/', (req, res) => {
    return app.render(req, res, '/', req.query);
  });
  // expressApp.get('/vouchers', (req, res) => {
  //   return app.render(req, res, '/vouchers', req.query);
  // });

  // fallback all request to next request handler
  expressApp.all('*', (req, res) => {
    return handle(req, res);
  });

  expressApp.listen(process.env.PORT || 3000);
});