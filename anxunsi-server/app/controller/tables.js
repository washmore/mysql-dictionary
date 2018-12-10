'use strict'

const Controller = require('egg').Controller

class TablesController extends Controller {


  async findBySchemaName () {
    console.info('schemataName:', this.ctx.params.schemaName)
    this.ctx.body = await this.ctx.service.tables.findBySchemaName(this.ctx.params.schemaName);
  }
}

module.exports = TablesController
