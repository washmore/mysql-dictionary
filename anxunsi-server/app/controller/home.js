'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

    async render() {
        await this.ctx.render('public/index.html');
    }
}

module.exports = HomeController;
