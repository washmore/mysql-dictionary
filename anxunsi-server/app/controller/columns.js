'use strict'

const Controller = require('egg').Controller

class ColumnsController extends Controller {
    async findBySchemaAndTable() {
        this.ctx.body = await this.ctx.service.columns.findBySchemaAndTable(this.ctx.query.schema, this.ctx.query.table);
    }
}

module.exports = ColumnsController
