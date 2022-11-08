import { Request, Response } from 'express';
import Category from '../database/models/Category';

async function createCategory(req: Request, res: Response) {
  const { id } = req.body;
  const { name } = req.body;

  Category
    .create({
      id: `${id}`, name: `${name}`,
    })
    .then((addCategory:any) => {
      res.send(addCategory);
    })
    .catch((err:any) => {
      res.send(err);
    });
}

async function deleteByIdCategory(req: Request, res:Response) {
  const { id } = req.params;

  Category
    .destroy({ where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}
async function updateByIdCategory(req: Request, res:Response) {
  const { id } = req.body;
  const { name } = req.body;

  await Category.update({ name: `${name}` }, { where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}

export { createCategory, updateByIdCategory, deleteByIdCategory };
