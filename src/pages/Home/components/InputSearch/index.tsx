import { Container } from "./styles";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputSearch = ({ value, onChange }: Props) => (
  <Container>
    <input
      type="text"
      placeholder="Pesquisar contato"
      value={value}
      onChange={onChange}
    />
  </Container>
);
