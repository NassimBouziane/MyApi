express = require('express');

const routerProducts = express();

routerProducts.get('/', (req, res) => {
  res.send('je suis product');
});

routerProducts.get('/:id', (req, res) => {
  res.send('je suis id');
});

routerProducts.post('/', (req, res) => {
  res.send('je suis le post');
});

routerProducts.patch('/:id', (req, res) => {
  res.send('je suis le patch');
});

routerProducts.delete('/:id', (req, res) => {
  res.send('je suis delete');
});

module.exports = routerProducts;
