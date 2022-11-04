/* eslint-disable import/no-import-module-exports */
import { Request, Response } from 'express';
import Orders from '../database/models/Order';

const express = require('express');

exports.getAllOrders = async function getAll(req: Request, res: Response) {
  const test = await Orders.findAll();
  res.json(test);
};
exports.getByIdOrders = async function getById(req : Request, res: Response) {
  const { id } = req.params;
  const Orderswithid = await Orders.findOne({ where: { id } });
  res.json(Orderswithid);
};
