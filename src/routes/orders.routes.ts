express = require('express');

const routerOrder = express();

routerOrder.get('/', (req, res) => {
  res.send('je suis order');
});

routerOrder.get('/:id', (req, res) => {
  res.send('je suis id');
});

routerOrder.post('/', (req, res) => {
  res.send('je suis le post');
});

routerOrder.patch('/:id', (req, res) => {
  res.send('je suis le patch');
});

routerOrder.delete('/:id', (req, res) => {
  res.send('je suis delete');
});

module.exports = routerOrder;
