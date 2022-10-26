express = require('express');
const {
  getAll, getById, create, deleteById,
} = require('../controllers/products.controller');

const routerProducts = express();

routerProducts.get('/', getAll);

routerProducts.get('/:id', getById);

routerProducts.post('/:id/:productName/:productPrice/:productCategory', create);

routerProducts.patch('/:id', (req, res) => {
  res.send('je suis le patch');
});

routerProducts.delete('/:id', deleteById);

module.exports = routerProducts;
