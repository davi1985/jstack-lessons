import { Contact } from "../services/models/Contact";

export type ToastVariant = "default" | "danger" | "success";

export type ListenerPayload = {
  type: ToastVariant;
  text: string;
  duration?: number;
};

export type Toast = ListenerPayload & {
  id: number;
};

export type OrderBy = "asc" | "desc";

export type ContactData = {
  name: string;
  email: string;
  phone: string;
  categoryId: string;
};

export type ContactFormRef = {
  setFieldsValues(contact: Contact): void;
  resetFields: () => void;
};
