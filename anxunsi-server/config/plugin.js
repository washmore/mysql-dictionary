'use strict'

// had enabled by egg
// exports.static = true;
exports.mysql = {
  enable: false,
  package: 'egg-mysql'
}
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}
