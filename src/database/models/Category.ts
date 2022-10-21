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
    wood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    steel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    glass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plastic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  },
);

export default Category;
Category.sync();
