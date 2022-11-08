import { Request, Response } from 'express';
import { Users } from '../database/models/User';

async function createUsers(req: Request, res: Response) {
  const { id } = req.body;
  const { username } = req.body;
  const { password } = req.body;

  Users
    .create({
      id: `${id}`, username: `${username}`, password: `${password}`,
    })
    .then((addUsers:any) => {
      res.send(addUsers);
    })
    .catch((err:any) => {
      res.send(err);
    });
}

async function deleteByIdUser(req: Request, res:Response) {
  const { id } = req.params;

  Users
    .destroy({ where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}
async function updateByIdUser(req: Request, res:Response) {
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
}

export { createUsers, deleteByIdUser, updateByIdUser };
