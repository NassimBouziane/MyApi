/* eslint-disable @typescript-eslint/no-unused-vars */
// npm run migrate pour migrer les models dans la base de données

import { sequelize } from '../config';

const Category = require('../models/Category');
const OrderProduct = require('../models/Order_Products');
const Order = require('../models/Order');
const Users = require('../models/User');
const product = require('../models/Product');
// Importation de tout les models
async function migrate() {
  await sequelize.sync({ alter: true });
}
migrate();
