import { resolve } from 'path';

let root = resolve(__dirname, '../..');

export default {
  port: 8080,
  public: resolve(root, '../client/build'),
  db: 'mongodb://localhost/app-development',
  jwt: {
    key: 'abcde12345',
    options: {
      expiresInMinutes: 60 * 60 * 24
    }
  }
};
