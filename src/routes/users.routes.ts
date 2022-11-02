express = require('express');

const routerUser = express();

const {
  createUsers, deleteByIdUsers, updateByIdUsers,
} = require('../services/user.service');
const {
  getAllUsers, getByIdUsers, login,
} = require('../controllers/users.controller');

routerUser.get('/', getAllUsers);

routerUser.get('/:id', getByIdUsers);

routerUser.post('/register/:id/:username/:password', createUsers); // REGISTER
routerUser.post('/login/:username/:password', login);

routerUser.put('/:id/:username/:password', updateByIdUsers);

routerUser.delete('/:id', deleteByIdUsers);

module.exports = routerUser;
