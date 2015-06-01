import logger from 'koa-logger';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';

function *handleError(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = {
      message: err.message
    };

    console.log(`error: ${err.stack}`);
  }
}

export default function (app) {
  app.keys = ['koa-flux-secret'];

  app.use(serve(__config.public));
  app.use(logger());
  app.use(bodyParser());
  app.use(handleError);

  app.on('error', function (err){
    console.log(`error: ${err.stack}`);
  });
}
