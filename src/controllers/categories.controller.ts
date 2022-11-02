/* eslint-disable import/no-import-module-exports */
import { Request, Response } from 'express';
import Category from '../database/models/Category';

express = require('express');

exports.getAllCategory = async function getAll(req: Request, res: Response) {
  const test = await Category.findAll();
  res.json(test);
};
exports.getByIdCategory = async function getById(req : Request, res: Response) {
  const { id } = req.params;
  const Categorywithid = await Category.findOne({ where: { id } });
  res.json(Categorywithid);
};

