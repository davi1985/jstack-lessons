import { Link } from "react-router-dom";

import { OrderBy } from "../../../../@types";

import arrow from "../../../../assets/images/icons/arrow.svg";
import edit from "../../../../assets/images/icons/edit.svg";
import trash from "../../../../assets/images/icons/trash.svg";

import { Card, ListHeader } from "./styles";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: { id: string; name: string };
};

type Props = {
  filteredContacts: Array<Contact>;
  orderBy: OrderBy;
  onToggleOrderBy: () => void;
  onDeleteContact: (contact: Contact) => void;
};

export const ContactsList = ({
  filteredContacts,
  orderBy,
  onToggleOrderBy,
  onDeleteContact,
}: Props) => (
  <>
    {filteredContacts.length > 0 && (
      <ListHeader orderBy={orderBy}>
        <button type="button" onClick={onToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="arrow" />
        </button>
      </ListHeader>
    )}

    {filteredContacts.map(({ id, name, email, phone, category }) => (
      <Card key={id}>
        <div className="info">
          <div className="contact-name">
            <strong>{name}</strong>
            {category.name && <small>{category.name}</small>}
          </div>

          <span>{email}</span>
          <span>{phone}</span>
        </div>

        <div className="actions">
          <Link to={`/edit/${id}`}>
            <img src={edit} alt="edit" />
          </Link>

          <button
            type="button"
            onClick={() =>
              onDeleteContact({
                id,
                name,
                email,
                phone,
                category: { id: category.id, name: category.name },
              })
            }
          >
            <img src={trash} alt="remover" />
          </button>
        </div>
      </Card>
    ))}
  </>
);
