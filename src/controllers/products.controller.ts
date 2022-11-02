/* eslint-disable import/no-import-module-exports */
import { Request, Response } from 'express';
import product from '../database/models/Product';

express = require('express');

exports.getAll = async function getAll(req: Request, res: Response) {
  const test = await product.findAll();
  res.json(test);
};
exports.getById = async function getById(req : Request, res: Response) {
  const { id } = req.params;
  const productwithid = await product.findOne({ where: { id } });
  res.json(productwithid);
};
