import { useState, useMemo, useCallback, useEffect, ChangeEvent } from "react";

import { OrderBy } from "../../@types";

import ContactsService from "../../services/ContactsService";
import { Contact } from "../../services/models/Contact";
import { toast } from "../../utils/toast";

type FnDeleteContact = (contact: Contact) => void;

export const useHome = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [orderBy, setOrderBy] = useState<OrderBy>("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisibility, setIsDeleteModalVisibility] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] =
    useState<Contact | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const filteredContacts = useMemo(
    () =>
      contacts.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [contacts, searchTerm]
  );

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const allContacts = await ContactsService.listContacts({ orderBy });

      setHasError(false);
      setContacts(allContacts);
    } catch (error) {
      setContacts([]);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const handleToggleOrderBy = () =>
    setOrderBy((prevOrderBy) => (prevOrderBy === "asc" ? "desc" : "asc"));

  const handleChangeSearchTerm = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);

  const handleTryAgain = () => loadContacts();

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisibility(false);
  };

  const handleConfirmDeleteContact = async () => {
    try {
      setIsDeleting(true);
      await ContactsService.deleteContact(contactBeingDeleted?.id as string);

      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactBeingDeleted?.id)
      );

      handleCloseDeleteModal();

      toast({ type: "success", text: "Contato deletado com sucesso" });
    } catch {
      toast({ type: "success", text: "Ocorreu um erro ao deletar o contato." });
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteContact: FnDeleteContact = (contact) => {
    setContactBeingDeleted(contact);

    setIsDeleteModalVisibility(true);
  };

  return {
    orderBy,
    contacts,
    hasError,
    isLoading,
    isDeleting,
    searchTerm,
    handleTryAgain,
    filteredContacts,
    handleDeleteContact,
    handleToggleOrderBy,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleChangeSearchTerm,
    isDeleteModalVisibility,
    handleConfirmDeleteContact,
  };
};
