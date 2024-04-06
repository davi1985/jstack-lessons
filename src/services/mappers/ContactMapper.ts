import { Contact } from "../models/Contact";

export type ContactToPersistence = {
  id: string;
  name: string;
  email: string;
  phone: string;
  categoryId: string;
};

export type ContactDomain = {
  id: string;
  name: string;
  email: string;
  phone: string;
  category_id: string;
  category_name: string;
};

class ContactMapper {
  toPersistence({ id, name, email, phone, categoryId }: ContactToPersistence) {
    return {
      id,
      name,
      email,
      phone,
      category_id: categoryId,
    };
  }

  toDomain({
    id,
    name,
    email,
    phone,
    category_id,
    category_name,
  }: ContactDomain): Contact {
    return {
      id,
      name,
      email,
      phone,
      category: {
        id: category_id,
        name: category_name,
      },
    };
  }
}

export default new ContactMapper();
