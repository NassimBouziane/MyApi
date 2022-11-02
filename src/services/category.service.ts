import { Request, Response } from 'express';
import Category from '../database/models/Category';

express = require('express');

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
  