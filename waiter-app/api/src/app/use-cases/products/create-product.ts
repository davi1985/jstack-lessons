import { Request, Response } from 'express';
import Product from '../../models/Product';

type CreateProductUseCasePayload = {
  icon: string;
  name: string;
};

export class CreateProductUseCase {
  public async create(
    req: Request<unknown, unknown, CreateProductUseCasePayload>,
    res: Response
  ) {
    try {
      const { icon, name } = req.body;
      const product = await Product.create({ icon, name });

      res.status(201).json(product);
    } catch (error) {
      console.log({ error });
      res.sendStatus(500);
    }
  }
}
