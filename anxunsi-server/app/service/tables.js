'use strict';

const Service = require('egg').Service;

class TablesService extends Service {


    async findBySchemaName(schemaName) {
        const tables = await this.ctx.model.Tables.findBySchemaName(schemaName);
        if (!tables) {
            this.ctx.throw(404, 'Tables not found');
        }
        return tables;
    }


    async findBySchemaAndTable(schema, table) {
        const result = await this.ctx.model.Tables.findBySchemaAndTable(schema, table);
        if (!result) {
            this.ctx.throw(404, 'Tables not found');
        }
        return result;
    }

    async groupBySchemaName(dbs) {
        const tables = await this.ctx.model.Tables.groupBySchemaName(dbs);
        if (!(dbs && dbs !== '')) {
            let schematas = await  this.ctx.model.Schemate.findAllSchematas();
            dbs = schematas.map((s) => s.schemaName);
        }
        //没有表数据的数据库也需要出现在左侧.无展开项
        dbs.split(',').forEach(function (e) {
            tables[e] = tables[e] || [];
        })
        return tables;
    }
}

module.exports = TablesService;
