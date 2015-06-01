import Router from 'koa-router';
import { sign } from 'jsonwebtoken';

let router = new Router({
  prefix: '/api/sessions'
});

export default router;

router.post('/', create);

function *create() {
  let { email, password} = this.request.body;

  this.assert(email, 400, 'El correo electrónico es requerido');
  this.assert(password, 400, 'La contraseña es requerida');

  let account = yield Account.findOne({ email });
  if (!account) {
    this.throw(401, 'Usuario ó contraseña son incorrectos');
  }

  let isValidPassword = yield account.validatePasswordAsync(password);
  if (!isValidPassword) {
    this.throw(401, 'Usuario ó contraseña son incorrectos');
  }

  let token = sign({
    name: account.name,
    profile: account.profile,
    _id: account._id,
    email: account.email
  }, __config.jwt.key, __config.jwt.options);

  this.body = {
    accessToken: token,
    name: account.name,
    profile: account.profile,
    _id: account._id,
    email: account.email
  };
}
