import { Request, Response } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { isValidUUID } from '../../utils/isValidUUID';

const contactsRepository = new CategoriesRepository();

export class CategoryController {
  async index(_: Request, response: Response) {
    const categories = await contactsRepository.findAll();

    response.json(categories);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid user id' });
    }

    const category = await contactsRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }

    response.json(category);
  }

  async store(request: Request, response: Response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const newCategory = await contactsRepository.create({
      name,
    });

    response.status(201).json(newCategory);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid user id' });
    }

    const { name } = request.body;

    const categoryExists = await contactsRepository.findById(id);

    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    const categoryUpdated = await contactsRepository.update({ id, name });

    response.json(categoryUpdated);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await contactsRepository.delete(id);

    response.sendStatus(204);
  }
}
