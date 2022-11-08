import authenticateJWT from '../middlewares/authenticateJWT';

const express = require('express');
const {
  getAll, getById,
} = require('../controllers/products.controller');

const {
  create, deleteById, updateById,
} = require('../services/product.service');

const routerProducts = express();

routerProducts.get('/', getAll);

routerProducts.get('/:id', getById);

routerProducts.post('/', (req, res) => {
  authenticateJWT(req, res, create);
});

routerProducts.put('/', (req, res) => {
  authenticateJWT(req, res, updateById);
});

routerProducts.delete('/:id', (req, res) => {
  authenticateJWT(req, res, deleteById);
});

module.exports = routerProducts;
