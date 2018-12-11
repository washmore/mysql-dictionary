'use strict'

const Controller = require('egg').Controller

class TablesController extends Controller {


    async findBySchemaName() {
        this.ctx.body = await this.ctx.service.tables.findBySchemaName(this.ctx.params.schemaName);
    }

    async groupBySchemaName() {
        this.ctx.body = await this.ctx.service.tables.groupBySchemaName(this.ctx.query.dbs);
    }
}

module.exports = TablesController
