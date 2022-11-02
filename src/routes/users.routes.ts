express = require('express');

const routerUser = express();
const { 
  createUsers, deleteByIdUsers, updateByIdUsers,
} = require ('../services/user.service')
const {
  getAllUsers, getByIdUsers, 
} = require('../controllers/users.controller');

routerUser.get('/', getAllUsers);

routerUser.get('/:id', getByIdUsers);

routerUser.post('/:id/:username/:password', createUsers);

routerUser.put('/:id/:username/:password', updateByIdUsers);

routerUser.delete('/:id', deleteByIdUsers);

module.exports = routerUser;
