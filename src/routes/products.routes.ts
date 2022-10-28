express = require('express');
const {
  getAll, getById, create, deleteById, updateById,
} = require('../controllers/products.controller');

const routerProducts = express();

routerProducts.get('/', getAll);

routerProducts.get('/:id', getById);

routerProducts.post('/:id/:productName/:productPrice/:productCategory', create);

routerProducts.put('/:id/:productName/:productPrice/:productCategory', updateById);

routerProducts.delete('/:id', deleteById);

module.exports = routerProducts;
