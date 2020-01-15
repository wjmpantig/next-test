import * as dotenv from 'dotenv';
import express from 'express';
import * as url from 'url';
import next from 'next';

dotenv.config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const voucherRegex = /\/vouchers\/(.+?)-([0-9]+)\//;

app.prepare().then(() => {
  // create the express app
  const expressApp = express();

  // declaring routes for our pages
  expressApp.get('/', (req, res) => {
    return app.render(req, res, '/', req.query);
  });
  
  expressApp.get(voucherRegex, (req, res) => {
    const { pathname } = url.parse(req.url);
    const matches = pathname?.match(voucherRegex);
    if (matches) {
      const [, slug, id] = matches;
      return app.render(req, res, '/voucher', { slug, id});
    }
  });

  // fallback all request to next request handler
  expressApp.all('*', (req, res) => {
    return handle(req, res);
  });

  expressApp.listen(process.env.PORT || 3000);
});
