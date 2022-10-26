/* eslint-disable import/no-import-module-exports */
import { Request, Response } from 'express';
import { Sequelize, sequelize } from '../database/config';
import product from '../database/models/Product';

express = require('express');

// async function getById(req: Request, res: Response);
// export default async function getAll(req: Request, res: Response) {
//  res.json();
// }
// async function create(req: Request, res: Response);
// async function updateById(req: Request, res: Response);
// async function deleteById(req: Request, res: Response);

exports.getAll = async function getAll(req: Request, res: Response) {
  const test = await product.findAll();
  res.json(test);
};
exports.getById = async function getById(req : Request, res: Response) {
  const { id } = req.params;
  const productwithid = await product.findOne({ where: { id } });
  res.json(productwithid);
};

exports.create = async function create(req: Request, res: Response) {
  const addproduct = await product.create({ id: 2, productName: 'Bento', productPrice: '15' });
  res.send(addproduct);
};
