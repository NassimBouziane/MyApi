import { Request, Response } from 'express';
import Category from '../database/models/Category';

async function getAllCategory(req: Request, res: Response) {
  const test = await Category.findAll();
  res.json(test);
}
async function getByIdCategory(req : Request, res: Response) {
  const { id } = req.params;
  const Categorywithid = await Category.findOne({ where: { id } });
  res.json(Categorywithid);
}

export { getAllCategory, getByIdCategory };
