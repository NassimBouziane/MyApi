/* eslint-disable import/no-import-module-exports */
const jwt = require('jsonwebtoken');
const secret = 'Koala';
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
exports.login = async function login(req : Request, res: Response) {
const { username } = req.params;
const { password } = req.params;
const accessToken = jwt.sign({ username: `${username}`}, secret, { expiresIn: '24H' });

res.json({
    accessToken
});



};