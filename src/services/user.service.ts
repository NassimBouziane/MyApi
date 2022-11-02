import { Request, Response } from 'express';
import Users from '../database/models/User';

express = require('express');

exports.createUsers = async function create(req: Request, res: Response) {
  const { id } = req.params;
  const { username } = req.params;
  const { password } = req.params;

  Users
    .create({
      id: `${id}`, username: `${username}`, password: `${password}`,
    })
    .then((addUsers) => {
      res.send(addUsers);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.deleteByIdUsers = async function deleteById(req: Request, res:Response) {
  const { id } = req.params;

  Users
    .destroy({ where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};
exports.updateByIdUsers = async function updateById(req: Request, res:Response) {
  const { id } = req.params;
  const { username } = req.params;
  const { password } = req.params;

  await Users.update({ username: `${username}`, password: `${password}` }, { where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};
