import { Request, Response } from 'express';
import {
  ContactsRepository,
  OrderBy,
} from '../repositories/ContactsRepository';
import { isValidUUID } from '../../utils/isValidUUID';

const contactsRepository = new ContactsRepository();

export class ContactController {
  async index(request: Request, response: Response) {
    const { orderBy } = request.query;

    const contacts = await contactsRepository.findAll({ orderBy } as OrderBy);

    response.json(contacts);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid contact id' });
    }

    const contact = await contactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    response.json(contact);
  }

  async store(request: Request, response: Response) {
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return response.status(400).json({ error: 'Invalid category' });
    }

    if (email) {
      const contactAlreadyExist = await contactsRepository.findByEmail(email);

      if (contactAlreadyExist) {
        return response
          .status(400)
          .json({ error: 'This e-mail is already taken.' });
      }
    }

    const newContact = await contactsRepository.create({
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    response.status(201).json(newContact);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid contact id' });
    }

    if (category_id && !isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid category' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await contactsRepository.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    if (email) {
      const contactByEmail = await contactsRepository.findByEmail(email);

      if (contactByEmail && contactByEmail.id !== id) {
        return response
          .status(400)
          .json({ error: 'This e-mail is already in use.' });
      }
    }

    const contact = await contactsRepository.update({
      id,
      name,
      email: email ?? null,
      phone,
      category_id: category_id ?? null,
    });

    response.json(contact);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid contact id' });
    }

    await contactsRepository.delete(id);

    response.sendStatus(204);
  }
}
