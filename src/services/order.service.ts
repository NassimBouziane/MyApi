import { Request, Response } from 'express';
import Orders from '../database/models/Order';

async function createOrder(req: Request, res: Response) {
  const { id } = req.body;
  const { orderdate } = req.body;
  const { userid } = req.body;

  Orders
    .create({
      id: `${id}`, orderdate: `${orderdate}`, UserId: `${userid}`,
    })
    .then((addOrders:any) => {
      res.send(addOrders);
    })
    .catch((err:any) => {
      res.send(err);
    });
}

async function deleteByIdOrder(req: Request, res:Response) {
  const { id } = req.params;

  Orders
    .destroy({ where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}
async function updateByIdOrder(req: Request, res:Response) {
  const { id } = req.body;
  const { orderdate } = req.body;
  const { userid } = req.body;

  await Orders.update({ orderdate: `${orderdate}`, UserId: `${userid}` }, { where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}

export { createOrder, updateByIdOrder, deleteByIdOrder };
