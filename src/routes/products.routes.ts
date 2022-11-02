express = require('express');
const {
  getAll, getById, 
} = require('../controllers/products.controller');

const {
  create, deleteById, updateById,
} = require ('../services/product.service');

const routerProducts = express();

routerProducts.get('/', getAll);

routerProducts.get('/:id', getById);

routerProducts.post('/:id/:productName/:productPrice/:productCategory', create);

routerProducts.put('/:id/:productName/:productPrice/:productCategory', updateById);

routerProducts.delete('/:id', deleteById);

module.exports = routerProducts;
