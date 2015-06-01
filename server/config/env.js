let NODE_ENV = process.env.NODE_ENV || 'default';

GLOBAL.__config = require(`./enviroments/${NODE_ENV}`);

if (process.env.MONGO_PORT_27017_TCP_ADDR) {
  let db = process.env.MONGO_PORT_27017_TCP_ADDR;
  GLOBAL.__config.db = `mongodb://${db}/app-${NODE_ENV}`;
}
