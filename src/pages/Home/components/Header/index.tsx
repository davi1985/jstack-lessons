import { Link } from "react-router-dom";
import { Container } from "./styles";

type Props = {
  hasError: boolean;
  qtyOfContactsLength: number;
  qtyOfFilteredContacts: number;
};

export const Header = ({
  hasError,
  qtyOfContactsLength,
  qtyOfFilteredContacts,
}: Props) => {
  const alignment = hasError
    ? "flex-end"
    : qtyOfContactsLength > 0
    ? "space-between"
    : "center";

  return (
    <Container justifyContent={alignment}>
      {!hasError && qtyOfContactsLength > 0 && (
        <strong>
          {qtyOfFilteredContacts}{" "}
          {qtyOfFilteredContacts === 1 ? " contato" : "contatos"}
        </strong>
      )}

      <Link to="/new">Novo contato</Link>
    </Container>
  );
};
