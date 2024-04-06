import { Container } from "./styles";

import sad from "../../../../assets/images/sad.svg";
import { Button } from "../../../../components/Button";

type Props = {
  onTryAgain: () => void;
};

export const ErrorStatus = ({ onTryAgain }: Props) => (
  <Container>
    <img src={sad} alt="sad" />

    <div className="details">
      <strong>Ocorreu um erro ao obter os seus contatos!</strong>

      <Button type="button" onClick={onTryAgain}>
        Tentar novamente
      </Button>
    </div>
  </Container>
);
