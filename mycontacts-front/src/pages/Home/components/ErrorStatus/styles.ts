import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 80px;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    strong {
      font-size: 1.375rem;
      color: ${({ theme }) => theme.colors.danger.main};
    }
  }
`;
