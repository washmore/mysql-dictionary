module.exports = app => {
    const {STRING, DATE} = app.Sequelize;

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

    return Tables;
};
