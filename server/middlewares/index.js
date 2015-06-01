import send from 'koa-send';

export function *site(next) {
  if (!this.url.match(/^\/api/)) {
    yield send(this, __config.public + '/index.html');
  } else {
    yield next;
  }
}

export function isAuthorized(profiles) {
  return function *(next) {
    if (profiles.indexOf(this.state.user.profile) < 0) {
      return this.throw(403);
    }

    yield next;
  };
}
