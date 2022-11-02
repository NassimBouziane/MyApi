/* eslint-disable import/no-import-module-exports */
import { Request, Response } from 'express';
import product from '../database/models/Product';

express = require('express');

exports.create = async function create(req: Request, res: Response) {
  const { id } = req.params;
  const { productName } = req.params;
  const { productPrice } = req.params;
  const { productCategory } = req.params;

  product
    .create({
      id: `${id}`, productName: `${productName}`, productPrice: `${productPrice}`, CategoryId: `${productCategory}`,
    })
    .then((addproduct) => {
      res.send(addproduct);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.deleteById = async function deleteById(req: Request, res:Response) {
  const { id } = req.params;

  product
    .destroy({ where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};
exports.updateById = async function updateById(req: Request, res:Response) {
  const { id } = req.params;
  const { productName } = req.params;
  const { productPrice } = req.params;
  const { productCategory } = req.params;

  await product.update({ productName: `${productName}`, productPrice: `${productPrice}`, CategoryId: `${productCategory}` }, { where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};
