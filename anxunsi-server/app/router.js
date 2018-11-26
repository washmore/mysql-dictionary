'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    router.get('/user/:id', controller.user.info);
    router.get('/article/page', controller.article.page);
    router.get('/article/:id', controller.article.item);

};
