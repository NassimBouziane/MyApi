import authenticateJWT from '../middlewares/authenticateJWT';

const express = require('express');

const routerCategories = express();
const {
  createCategory, deleteByIdCategory, updateByIdCategory,
} = require('../services/category.service');
const {
  getAllCategory, getByIdCategory,
} = require('../controllers/categories.controller');

routerCategories.get('/', getAllCategory);

routerCategories.get('/:id', getByIdCategory);

routerCategories.post('/', (req, res) => {
  authenticateJWT(req, res, createCategory);
});
routerCategories.put('/', (req, res) => {
  authenticateJWT(req, res, updateByIdCategory);
});
routerCategories.delete('/:id', (req, res) => {
  authenticateJWT(req, res, deleteByIdCategory);
});
module.exports = routerCategories;
