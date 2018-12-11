const groupBy = require('../common/streams.js').GroupBy;
const sys_dbs = require('../common/consts.js').sys_dbs;

module.exports = app => {
    const {STRING, DATE, Op} = app.Sequelize;

    const Tables = app.model.define('tables', {
        tableName: {
            type: STRING(200),
            // primaryKey: true,
            //autoIncrement: true
            field: 'table_name'
        },
        tableComment: {
            type: STRING(200),
            field: 'table_comment'
        },
        tableSchema: {
            type: STRING(200),
            field: 'table_schema'
        },
        createTime: {
            type: DATE,
            field: 'create_time'
        },
    }, {
        timestamps: false,
        freezeTableName: true
    });
    Tables.removeAttribute('id');

    Tables.findBySchemaName = async function (schemaName) {
        return await this.findAll({
            where: {
                table_schema: schemaName
            }
        })
    };
    Tables.groupBySchemaName = async function (dbs) {
        let list;
        if (dbs && dbs !== '') {
            list = await this.findAll({
                where: {
                    table_schema: {
                        [Op.in]: dbs.split(','),
                        [Op.notIn]: sys_dbs,
                    }
                }
            })
        } else {
            list = await this.findAll({
                where: {
                    table_schema: {
                        [Op.notIn]: sys_dbs,
                    }
                }
            })
        }
        return groupBy(list, (item) => {
            return item.tableSchema.toUpperCase();
        });
    };
    return Tables;
};
