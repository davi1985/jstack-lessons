import { useHome } from "./useHome";

import { Container } from "./styles";

import { Header } from "./components/Header";
import { Modal } from "../../components/Modal";
import { Loader } from "../../components/Loader";
import { EmptyList } from "./components/EmptyList";
import { ErrorStatus } from "./components/ErrorStatus";
import { ContactsList } from "./components/ContactsList";
import { InputSearch } from "./components/InputSearch";
import { SearchNotFound } from "./components/SearchNotFound";

export const Home = () => {
  const {
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
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && !isLoading && !hasContacts;
  const isSearchEmpty = !hasError && hasContacts && filteredContacts.length < 1;

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
      )}

      <Header
        hasError={hasError}
        qtyOfContactsLength={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

      {isListEmpty && <EmptyList />}

      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        <>
          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />

          <Modal
            danger
            isLoading={isDeleting}
            visibility={isDeleteModalVisibility}
            title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"`}
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>
        </>
      )}
    </Container>
  );
};
