'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info () {
    let id = this.ctx.params.id;
    let user = {};
    await this.app.mysql.get('user', { id })
      .then((result) => {
        console.info('result', result);
        user = result || {};
        if (result === null) {
          this.ctx.status = 404;
        }
      });
    this.ctx.body = user;
  }
}

module.exports = UserController;
