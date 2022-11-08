import authenticateJWT from '../middlewares/authenticateJWT';

const express = require('express');

const routerUser = express();

const {
  getAll, getById, login, create, deleteById, updateById,
} = require('../controllers/users.controller');

routerUser.get('/', getAll);

routerUser.get('/:id', getById);

routerUser.post('/register/', create); // REGISTER
routerUser.post('/login/', login);

routerUser.put('/', (req:any, res:any) => {
  authenticateJWT(req, res, updateById);
});
routerUser.delete('/:id', (req:any, res:any) => {
  authenticateJWT(req, res, deleteById);
});

export default routerUser;
