'use strict'

const Controller = require('egg').Controller

class SchemataController extends Controller {
    async findAll() {
        this.ctx.body = await this.ctx.service.schemata.findAll()
        // this.ctx.body={}
    }

    async findBySchemaName() {
        console.info('schemataName:', this.ctx.params.schemataName)
        this.ctx.body = await this.ctx.service.schemata.findBySchemaName(this.ctx.params.schemataName);
    }
}

module.exports = SchemataController
