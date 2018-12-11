'use strict'

const Controller = require('egg').Controller

class TablesController extends Controller {


    async findBySchemaName() {
        this.ctx.body = await this.ctx.service.tables.findBySchemaName(this.ctx.params.schemaName);
    }

    async findBySchemaAndTable() {
        console.info(' this.ctx.query.table', this.ctx.query.table)
        this.ctx.body = await this.ctx.service.tables.findBySchemaAndTable(this.ctx.query.schema, this.ctx.query.table);
    }

    async groupBySchemaName() {
        this.ctx.body = await this.ctx.service.tables.groupBySchemaName(this.ctx.query.dbs);
    }
}

module.exports = TablesController
