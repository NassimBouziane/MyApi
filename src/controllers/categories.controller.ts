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

exports.createCategory = async function create(req: Request, res: Response) {
  const { id } = req.params;
  const { name } = req.params;

  Category
    .create({
      id: `${id}`, name: `${name}`,
    })
    .then((addCategory) => {
      res.send(addCategory);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.deleteByIdCategory = async function deleteById(req: Request, res:Response) {
  const { id } = req.params;

  Category
    .destroy({ where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};
exports.updateByIdCategory = async function updateById(req: Request, res:Response) {
  const { id } = req.params;
  const { name } = req.params;

  await Category.update({ name: `${name}` }, { where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};
