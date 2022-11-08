import { Request, Response } from 'express';
import { product } from '../database/models/Product';

async function getAll(req: Request, res: Response) {
  const test = await product.findAll();
  res.send(test);
}
async function getById(req : Request, res: Response) {
  const { id } = req.params;
  const productwithid = await product.findOne({ where: { id } });
  res.json(productwithid);
}

export { getAll, getById };
