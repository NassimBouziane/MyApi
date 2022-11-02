/* eslint-disable import/no-import-module-exports */
import { Request, Response } from 'express';
import Users from '../database/models/User';

express = require('express');

exports.getAllUsers = async function getAll(req: Request, res: Response) {
  const test = await Users.findAll();
  res.json(test);
};
exports.getByIdUsers = async function getById(req : Request, res: Response) {
  const { id } = req.params;
  const Userswithid = await Users.findOne({ where: { id } });
  res.json(Userswithid);
};

