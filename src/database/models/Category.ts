import { DataTypes } from 'sequelize';
import { product } from './Product';
import { Sequelize, sequelize } from '../config';

const Category = sequelize.define(
  'Category',
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
  },
);

export default Category;
