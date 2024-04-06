import { ContactData, OrderBy } from "../@types";
import ContactMapper, { ContactDomain } from "./mappers/ContactMapper";
import { Contact } from "./models/Contact";
import { HttpClient } from "./utils/HttpClient";

type ListContactsProps = { orderBy: OrderBy };

type ContactDTO = ContactData;

class ContactsService {
  private readonly httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(import.meta.env.VITE_API_BASE_URL);
  }

  async listContacts({ orderBy = "asc" }: ListContactsProps) {
    const contacts = await this.httpClient.get<ContactDomain[]>(
      `/contacts?orderBy=${orderBy}`
    );

    return contacts.map(ContactMapper.toDomain);
  }

  async getContactById(id: string): Promise<Contact> {
    const contact = await this.httpClient.get<ContactDomain>(`/contacts/${id}`);

    return ContactMapper.toDomain(contact);
  }

  createContact(contact: ContactDTO) {
    const body = ContactMapper.toPersistence(contact) as unknown as BodyInit;

    return this.httpClient.post<ContactDTO>("/contacts", {
      body,
    });
  }

  updateContact(id: string, contact: ContactDTO) {
    const body = ContactMapper.toPersistence(contact) as unknown as BodyInit;

    return this.httpClient.put<ContactDTO>(`/contacts/${id}`, {
      body,
    });
  }

  deleteContact(id: string) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
