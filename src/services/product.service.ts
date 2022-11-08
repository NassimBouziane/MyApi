/* eslint-disable import/no-import-module-exports */
import { Request, Response } from 'express';
import { product } from '../database/models/Product';

async function createProduct(req: Request, res: Response) {
  const { id } = req.body;
  const { productName } = req.body;
  const { productPrice } = req.body;
  const { productCategory } = req.body;

  product
    .create({
      id: `${id}`, productName: `${productName}`, productPrice: `${productPrice}`, CategoryId: `${productCategory}`,
    })
    .then((addproduct:any) => {
      res.send(addproduct);
    })
    .catch((err:any) => {
      res.send(err);
    });
}

async function deleteByIdProduct(req: Request, res:Response) {
  const { id } = req.params;

  product
    .destroy({ where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}
async function updateByIdProduct(req: Request, res:Response) {
  const { id } = req.body;
  const { productName } = req.body;
  const { productPrice } = req.body;
  const { productCategory } = req.body;

  await product.update({ productName: `${productName}`, productPrice: `${productPrice}`, CategoryId: `${productCategory}` }, { where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}

export { createProduct, deleteByIdProduct, updateByIdProduct };
