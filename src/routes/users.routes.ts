const express = require('express');

import authenticateJWT from '../middlewares/authenticateJWT';

const routerUser = express();

const {
  createUsers, deleteByIdUsers, updateByIdUsers,
} = require('../services/user.service');
const {
  getAllUsers, getByIdUsers, login,
} = require('../controllers/users.controller');

routerUser.get('/', getAllUsers);

routerUser.get('/:id', getByIdUsers);

routerUser.post('/register/', createUsers); // REGISTER
routerUser.post('/login/', login);

routerUser.put('/',  (req, res, next) => {
  authenticateJWT(req, res, updateByIdUsers);
});
routerUser.delete('/:id', (req, res, next) => {
  authenticateJWT(req, res, deleteByIdUsers);
});

module.exports = routerUser;

