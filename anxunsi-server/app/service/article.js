'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
    async page() {
        let params = {
            pageNo: 1,
            pageSize: 10,
            ...this.ctx.query
        }
        console.info('serviceParams', params);

        return await this.ctx.model.ArticleInfo.findPage(params);
    }

    async findById(id) {
        const article = await this.ctx.model.ArticleInfo.findById(id);
        if (!article) {
            this.ctx.throw(404, 'article not found');
        }
        return article;
    }

}

module.exports = ArticleService;
