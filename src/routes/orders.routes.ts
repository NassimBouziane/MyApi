

import authenticateJWT from '../middlewares/authenticateJWT';

const express = require('express');

const routerOrder = express();

const {
  createOrders, deleteByIdOrders, updateByIdOrders,
} = require('../services/order.service');

const {
  getAllOrders, getByIdOrders,
} = require('../controllers/orders.controller');

routerOrder.get('/', getAllOrders);

routerOrder.get('/:id', getByIdOrders);


routerOrder.post('/', (req, res, next) => {
  authenticateJWT(req, res, createOrders);
});

routerOrder.put('/', (req, res, next) => {
  authenticateJWT(req, res, updateByIdOrders);
});
routerOrder.delete('/:id', (req, res, next) => {
  authenticateJWT(req, res, deleteByIdOrders);
});

module.exports = routerOrder;
