/* eslint-disable import/no-import-module-exports */
import { Request, Response } from 'express';
import { product } from '../database/models/Product';

// Function create a product
async function createProduct(req: Request, res: Response) {
  const { productName } = req.body;
  const { productPrice } = req.body;
  const { productCategory } = req.body;

  product
    .create({
      productName: `${productName}`, productPrice: `${productPrice}`, CategoryId: `${productCategory}`,
    })
    .then((addproduct:any) => {
      res.send(addproduct);
    })
    .catch((err:any) => {
      res.send(err);
    });
}
// Function Delete a product with his ID
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
// Function Update the data of a product with his ID
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
// Exporting functions to the controller
export { createProduct, deleteByIdProduct, updateByIdProduct };
