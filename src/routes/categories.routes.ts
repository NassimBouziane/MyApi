const express = require('express');

import authenticateJWT from '../middlewares/authenticateJWT';
const routerCategories = express();
const {
  createCategory, deleteByIdCategory, updateByIdCategory,
} = require('../services/category.service');
const {
  getAllCategory, getByIdCategory,
} = require('../controllers/categories.controller');

routerCategories.get('/', getAllCategory);

routerCategories.get('/:id', getByIdCategory);


routerCategories.post('/',(req, res, next) => {
    authenticateJWT(req, res, createCategory);
  });
routerCategories.put('/', (req, res, next) => {
  authenticateJWT(req, res, updateByIdCategory);
});
routerCategories.delete('/:id',(req, res, next) => {
  authenticateJWT(req, res, deleteByIdCategory);
});
module.exports = routerCategories;
