/* eslint-disable import/no-import-module-exports */
import { Request, Response } from 'express';
import Users from '../database/models/User';
import authenticateJWT from '../middlewares/authenticateJWT';

function next() {
  console.log('FUNCTION NEXT');
}
const jwt = require('jsonwebtoken');

const secret = 'Koala';

const express = require('express');

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
  const { username } = req.body;
  const { password } = req.body;
  const Userswithid = await Users.findOne({ where: { username } });

  if (Userswithid === null) {
    res.status(400).send('Invalid email or password');
  } else if (Userswithid.username === username && Userswithid.password === password) {
    const accessToken = jwt.sign({ username: `${username}`, password: `${password}` }, secret, { expiresIn: '24H' });

    authenticateJWT(req, res, next);
    return accessToken;
  } else if (Userswithid.password !== password || Userswithid !== username) {
    res.status(400).send('Invalid email or password');
  }
};
