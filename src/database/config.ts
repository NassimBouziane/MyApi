export const { Sequelize } = require('sequelize');
require('dotenv').config({ path: 'myenv.env' });

export const sequelize = new Sequelize(`${process.env.DATABASE_NAME}`, `${process.env.USER_NAME}`, `${process.env.PASSWORD}`, {
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection réussie');
  })
  .catch((err) => {
    console.error('Connection ratée', err);
  });
