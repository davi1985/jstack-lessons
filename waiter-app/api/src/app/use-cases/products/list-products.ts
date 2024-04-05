import { Request, Response } from 'express';
import Product from '../../models/Product';

export class ListProductsUserCase {
  public async list(_: Request, res: Response) {
    try {
      const products = await Product.find();

      res.json(products);
    } catch (error) {
      console.log({ error });

      res.sendStatus(500);
    }
  }
}
