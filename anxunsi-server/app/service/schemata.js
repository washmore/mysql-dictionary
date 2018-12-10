'use strict';

const Service = require('egg').Service;

class SchemataService extends Service {


  async findAll () {
    const schematas = await this.ctx.model.Schemata.findAllSchematas();
    if (!schematas) {
      this.ctx.throw(404, 'article not found');
    }
    return schematas;
  }
}

module.exports = SchemataService;
