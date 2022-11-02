import { DataTypes } from 'sequelize';
import { Sequelize, sequelize } from '../config';

export const Users = sequelize.define(
  'User',
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  },
);

export default Users;