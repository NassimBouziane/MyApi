const { Sequelize } = require('sequelize');
require('dotenv').config({ path: 'src/database/myenv.env' });

export const sequelize = new Sequelize(`${process.env.DATABASE_NAME}`, `${process.env.USER_NAME}`, `${process.env.PASSWORD}`, {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection réussie');
  })
  .catch((err:any) => {
    console.error('Connection ratée', err);
  });

export { Sequelize };
