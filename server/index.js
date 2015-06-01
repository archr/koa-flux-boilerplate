require('./config/env');

import koa from 'koa';
import config from './config';
import routes from './routes';

let app = koa();

config(app);
routes(app);

app.listen(__config.port);
console.log(`Server running on port ${__config.port}`);
