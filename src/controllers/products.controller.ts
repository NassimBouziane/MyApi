import { Sequelize, sequelize } from '../database/config';
import product from '../database/models/Product';
import { Request } from "express"
import { Response } from "express"
express = require('express');

// async function getById(req: Request, res: Response);
// export default async function getAll(req: Request, res: Response) {
//  res.json();
// }
// async function create(req: Request, res: Response);
// async function updateById(req: Request, res: Response);
// async function deleteById(req: Request, res: Response);

exports.getAll = async function (req: Request, res: Response) {
  const test = await product.findAll();
  res.json(test);
};
exports.getById = async function (req : Request, res: Response) {
  const { id } = req.params;
  const productwithid = await product.findOne({ where: { id } });
  res.json(productwithid);
};
