const groupBy = require('../common/streams.js').GroupBy;
const sys_dbs = require('../common/consts.js').sys_dbs;

module.exports = app => {
    const {STRING, DATE, Op} = app.Sequelize;

    const Columns = app.model.define('columns', {
        tableName: {
            type: STRING(200),
            field: 'table_name'
        },
        columnName: {
            type: STRING(200),
            field: 'column_name'
        },
        tableSchema: {
            type: STRING(200),
            field: 'table_schema'
        },
        extra: {
            type: STRING(200),
            field: 'extra'
        },
    }, {
        timestamps: false,
        freezeTableName: true
    });
    Columns.removeAttribute('id');

    Columns.findBySchemaAndTable = async function (schemaName, tableName) {
        return await this.findAll({
            where: {
                table_name: tableName,
                table_schema: schemaName,
            }
        })
    };

    return Columns;
};
