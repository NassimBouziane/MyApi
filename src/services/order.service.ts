import { Request, Response } from 'express';
import Orders from '../database/models/Order';

express = require('express');

exports.createOrders = async function create(req: Request, res: Response) {
    const { id } = req.params;
    const { orderdate } = req.params;
    const { userid } = req.params;
  
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
    const { id } = req.params;
    const { orderdate } = req.params;
    const { userid } = req.params;
  
    await Orders.update({ orderdate: `${orderdate}`, UserId: `${userid}` }, { where: { id } })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(400);
      });
  };
  