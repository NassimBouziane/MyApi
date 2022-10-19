import { DataTypes } from 'sequelize';
import { Sequelize, sequelize } from './config';

export const Users = sequelize.define('User', {

  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userpassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});
