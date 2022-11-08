import authenticateJWT from '../middlewares/authenticateJWT';

const express = require('express');

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

routerUser.put('/', (req, res) => {
  authenticateJWT(req, res, updateByIdUsers);
});
routerUser.delete('/:id', (req, res) => {
  authenticateJWT(req, res, deleteByIdUsers);
});

module.exports = routerUser;
