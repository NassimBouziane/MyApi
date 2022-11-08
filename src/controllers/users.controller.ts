import { Request, Response } from 'express';
import { Users } from '../database/models/User';
import authenticateJWT from '../middlewares/authenticateJWT';

const jwt = require('jsonwebtoken');
const { createUsers, deleteByIdUser, updateByIdUser } = require('../services/user.service');

function next() {
  console.log('FUNCTION NEXT');
}

const secret = 'Koala';

async function getAll(req: Request, res: Response) {
  const test = await Users.findAll();
  res.json(test);
}
async function getById(req : Request, res: Response) {
  const { id } = req.params;
  const Userswithid = await Users.findOne({ where: { id } });
  res.json(Userswithid);
}

async function login(req : Request, res: Response) {
  const { username } = req.body;
  const { password } = req.body;
  const Userswithid = await Users.findOne({ where: { username } });

  if (Userswithid === null) {
    res.status(400).send('Invalid email or password');
  } else if (Userswithid.username === username && Userswithid.password === password) {
    const accessToken = jwt.sign({ username: `${username}`, password: `${password}` }, secret, { expiresIn: '24H' });

    authenticateJWT(req, res, next);
    console.log(accessToken); // To retrieve the access token and then put it in the headers
    return accessToken;
  } else {
    res.status(400).send('Invalid email or password');
  }
  return false;
}
async function create(req: Request, res: Response) {
  await createUsers(req, res);
}

async function deleteById(req: Request, res:Response) {
  await deleteByIdUser(req, res);
}
async function updateById(req: Request, res:Response) {
  await updateByIdUser(req, res);
}

export {
  getAll, getById, login, create, deleteById, updateById,
};
