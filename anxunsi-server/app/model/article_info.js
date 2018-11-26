module.exports = app => {
  const { STRING, INTEGER, DATE, Op } = app.Sequelize;

  const ArticleInfo = app.model.define('article_info', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: STRING(50),
    summary: STRING(250),
    state: INTEGER
  }, {
    timestamps: false,
    freezeTableName: true
  });

  ArticleInfo.findById = async function (id) {
    return await this.findOne({
      where: {
        id
      }
    })
  };
  ArticleInfo.findPage = async function (page) {
    return await this.findAll({
      where: {
        title: {
          [Op.like]: `%${page.keyword || ''}%`
        }
      }
    })
  };
  // ArticleInfo.prototype.logSignin = async () => {
  //     return await this.update({last_sign_in_at: new Date()});
  // }

  return ArticleInfo;
};
