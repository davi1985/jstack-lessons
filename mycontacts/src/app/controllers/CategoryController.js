const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(_, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await CategoriesRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Category not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const {
      name,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const newContact = await CategoriesRepository.create({
      name,
    });

    response.status(201).send(
      newContact,
    );
  }

  async update(request, response) {
    const { id } = request.params;

    const {
      name,
    } = request.body;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return response.staus.json({ error: 'Category not found' });
    }

    const categoryUpdated = await CategoriesRepository.update(id, {
      name,
    });

    response.json(categoryUpdated);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
