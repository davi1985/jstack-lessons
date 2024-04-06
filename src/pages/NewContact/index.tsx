import { ContactForm } from "../../components/ContactForm";
import { PageHeader } from "../../components/PageHeader";

import { useNewContact } from "./useNewContact";

export const NewContact = () => {
  const { handleSubmit, contactFormRef } = useNewContact();

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
        ref={contactFormRef}
      />
    </>
  );
};
