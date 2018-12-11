'use strict';

const Service = require('egg').Service;

class ColumnsService extends Service {


    async findBySchemaAndTable(schemaName, tableName) {
        const columns = await this.ctx.model.Columns.findBySchemaAndTable(schemaName, tableName);
        if (!columns) {
            this.ctx.throw(404, 'article not found');
        }
        return columns;
    }
}

module.exports = ColumnsService;
