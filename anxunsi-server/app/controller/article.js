'use strict'

const Controller = require('egg').Controller

class ArticleController extends Controller {
  async page () {
    console.info('params', this.ctx.query)
    this.ctx.body = await this.ctx.service.article.page(this.ctx.query)
  }

  async item () {
    console.info('id:', this.ctx.params.id)
    this.ctx.body = await this.ctx.service.article.findById(this.ctx.params.id)
  }
}

module.exports = ArticleController
