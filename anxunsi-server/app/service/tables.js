'use strict';

const Service = require('egg').Service;

class TablesService extends Service {


    async findBySchemaName(schemaName) {
        const tables = await this.ctx.model.Tables.findBySchemaName(schemaName);
        if (!tables) {
            this.ctx.throw(404, 'article not found');
        }
        return tables;
    }

    async groupBySchemaName(dbs) {
        const tables = await this.ctx.model.Tables.groupBySchemaName(dbs);
        if (!tables) {
            this.ctx.throw(404, 'article not found');
        }
        return tables;
    }
}

module.exports = TablesService;
