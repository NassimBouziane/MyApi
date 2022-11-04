import { Request, Response } from 'express';
import Orders from '../database/models/Order';

const express = require('express');

exports.createOrders = async function create(req: Request, res: Response) {
  const { id } = req.body;
  const { orderdate } = req.body;
  const { userid } = req.body;

  Orders
    .create({
      id: `${id}`, orderdate: `${orderdate}`, UserId: `${userid}`,
    })
    .then((addOrders) => {
      res.send(addOrders);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.deleteByIdOrders = async function deleteById(req: Request, res:Response) {
  const { id } = req.params;

  Orders
    .destroy({ where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};
exports.updateByIdOrders = async function updateById(req: Request, res:Response) {
  const { id } = req.body;
  const { orderdate } = req.body;
  const { userid } = req.body;

  await Orders.update({ orderdate: `${orderdate}`, UserId: `${userid}` }, { where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};
