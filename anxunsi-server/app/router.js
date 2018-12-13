'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app
    router
        //api
        .get('/schemata/all', controller.schemata.findAll)
        .get('/:schemaName/tables', controller.tables.findBySchemaName)
        .get('/tables/group', controller.tables.groupBySchemaName)
        .get('/table', controller.tables.findBySchemaAndTable)
        .get('/columns', controller.columns.findBySchemaAndTable)
        // .get('/schemata/:schemataName', controller.schemata.findBySchemataName)
        // front
        .get('/', controller.home.render)
        .get('/**', controller.home.render)
}
