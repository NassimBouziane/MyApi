express = require('express');
const { getAll, getById, create } = require('../controllers/products.controller');

const routerProducts = express();

routerProducts.get('/', getAll);

routerProducts.get('/:id', getById);

routerProducts.post('/', create);

routerProducts.patch('/:id', (req, res) => {
  res.send('je suis le patch');
});

routerProducts.delete('/:id', (req, res) => {
  res.send('je suis delete');
});

module.exports = routerProducts;
