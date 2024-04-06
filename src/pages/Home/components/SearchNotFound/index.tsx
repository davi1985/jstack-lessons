import { Container } from "./styles";

import magnifierQuestion from "../../../../assets/images/magnifier-question.svg";

type Props = {
  searchTerm: string;
};

export const SearchNotFound = ({ searchTerm }: Props) => (
  <Container>
    <img src={magnifierQuestion} alt="Magnifier question" />

    <span>
      Nenhum resultado foi encontrado para
      <strong> "{searchTerm}"</strong>.
    </span>
  </Container>
);
