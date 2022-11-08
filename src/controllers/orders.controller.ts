import { Request, Response } from 'express';
import Orders from '../database/models/Order';

async function getAllOrders(req: Request, res: Response) {
  const test = await Orders.findAll();
  res.json(test);
}
async function getByIdOrders(req : Request, res: Response) {
  const { id } = req.params;
  const Orderswithid = await Orders.findOne({ where: { id } });
  res.json(Orderswithid);
}

export { getAllOrders, getByIdOrders };
