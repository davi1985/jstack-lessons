import { useRef } from "react";
import { ContactData, ContactFormRef } from "../../@types";
import ContactsService from "../../services/ContactsService";
import { toast } from "../../utils/toast";

export const useNewContact = () => {
  const contactFormRef = useRef<ContactFormRef | null>(null);

  const handleSubmit = async ({
    name,
    email,
    phone,
    categoryId,
  }: ContactData) => {
    try {
      await ContactsService.createContact({ name, email, phone, categoryId });

      if (contactFormRef.current) {
        contactFormRef.current.resetFields();
      }

      toast({
        type: "success",
        text: "Contato cadastrado com sucesso!",
        duration: 3000,
      });
    } catch {
      toast({
        type: "danger",
        text: "Ocorreu um erro ao cadastrar o contato!",
      });
    }
  };

  return { handleSubmit, contactFormRef };
};
