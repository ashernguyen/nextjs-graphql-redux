import path from 'path';
import express from 'express';
import next from 'next';
import compression from 'compression';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.set('port', process.env.port || 3000);

    server.use(compression());

    server.get('/service-worker.js', (req, res) =>
      app.serveStatic(req, res, path.resolve('./.next/static/service-worker.js'))
    );

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(server.get('port'), (err: object) => {
      if (err) {
        throw err;
      }

      console.log(`> Ready on http://localhost:${server.get('port')}`); // eslint-disable-line no-console
    });
  })
  .catch(() => {
    process.exit(1);
  });
