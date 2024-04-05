import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
    margin-top: 0.5rem;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
