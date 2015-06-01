import jwt from 'koa-jwt';
import { site } from '../middlewares';

export default function (app) {
  app.use(site);

  app.use(require('./api-sessions').middleware());
  app.use(jwt({secret: __config.jwt.key}));
}
