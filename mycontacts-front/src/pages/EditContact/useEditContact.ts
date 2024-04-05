import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContactFormRef, ContactData } from "../../@types";
import { useSafeAsyncAction } from "../../hooks/useSafeAsyncAction";
import ContactsService from "../../services/ContactsService";
import { toast } from "../../utils/toast";

export const useEditContact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState("");

  const contactFormRef = useRef<ContactFormRef | null>(null);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    const loadContact = async () => {
      try {
        const contact = await ContactsService.getContactById(id as string);

        safeAsyncAction(() => {
          if (contactFormRef.current) {
            contactFormRef.current.setFieldsValues(contact);
          }

          setIsLoading(false);
          setContactName(contact.name);
        });
      } catch {
        safeAsyncAction(() => {
          navigate("/");

          toast({
            type: "danger",
            text: "Contato não encontrado!",
          });
        });
      }
    };

    loadContact();
  }, [id, navigate, safeAsyncAction]);

  const handleSubmit = async ({
    name,
    email,
    phone,
    categoryId,
  }: ContactData) => {
    try {
      const updatedContact = await ContactsService.updateContact(id as string, {
        name,
        email,
        phone,
        categoryId,
      });

      setContactName(updatedContact.name);

      toast({
        type: "success",
        text: "Contato editado com sucesso!",
        duration: 3000,
      });
    } catch {
      toast({
        type: "danger",
        text: "Ocorreu um erro ao editar o contato!",
      });
    }
  };

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
};
