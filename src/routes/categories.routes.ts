express = require('express');

const routerCategories = express();
const {
  getAllCategory, getByIdCategory, createCategory, deleteByIdCategory, updateByIdCategory,
} = require('../controllers/categories.controller');

routerCategories.get('/', getAllCategory);

routerCategories.get('/:id', getByIdCategory);

routerCategories.post('/:id/:name', createCategory);

routerCategories.put('/:id/:name', updateByIdCategory);

routerCategories.delete('/:id', deleteByIdCategory);

module.exports = routerCategories;
