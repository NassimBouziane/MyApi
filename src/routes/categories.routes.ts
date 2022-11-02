express = require('express');

const routerCategories = express();
const {
  createCategory, deleteByIdCategory, updateByIdCategory,
} = require('../services/category.service');
const {
  getAllCategory, getByIdCategory,
} = require('../controllers/categories.controller');

routerCategories.get('/', getAllCategory);

routerCategories.get('/:id', getByIdCategory);

routerCategories.post('/:id/:name', createCategory);

routerCategories.put('/:id/:name', updateByIdCategory);

routerCategories.delete('/:id', deleteByIdCategory);

module.exports = routerCategories;
