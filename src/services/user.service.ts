import { Request, Response } from 'express';
import Users from '../database/models/User';

const express = require('express');

exports.createUsers = async function create(req: Request, res: Response) {
  const { id } = req.body;
  const { username } = req.body;
  const { password } = req.body;

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
  const { id } = req.body;
  const { username } = req.body;
  const { password } = req.body;

  await Users.update({ username: `${username}`, password: `${password}` }, { where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};
