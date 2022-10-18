"use strict";
exports.__esModule = true;
exports.Sequelize = void 0;
exports.Sequelize = require('sequelize').Sequelize;
require('dotenv').config({ path: 'myenv.env' });
var sequelize = new exports.Sequelize("".concat(process.env.DATABASE_NAME), "".concat(process.env.USER_NAME), "".concat(process.env.PASSWORD), {
    dialect: 'mysql'
});
sequelize
    .authenticate()
    .then(function () {
    console.log('Connection réussie');
})["catch"](function (err) {
    console.error('Connection ratée', err);
});
