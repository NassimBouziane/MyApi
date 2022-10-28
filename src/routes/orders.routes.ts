express = require('express');

const routerOrder = express();

const {
  getAllOrders, getByIdOrders, createOrders, deleteByIdOrders, updateByIdOrders,
} = require('../controllers/orders.controller');

routerOrder.get('/', getAllOrders);

routerOrder.get('/:id', getByIdOrders);

routerOrder.post('/:id/:orderdate/:userid', createOrders);

routerOrder.put('/:id/:orderdate/:userid', updateByIdOrders);

routerOrder.delete('/:id', deleteByIdOrders);

module.exports = routerOrder;
