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

routerUser.put('/', (req:any, res:any) => {
  authenticateJWT(req, res, updateByIdUsers);
});
routerUser.delete('/:id', (req:any, res:any) => {
  authenticateJWT(req, res, deleteByIdUsers);
});

export default routerUser;
