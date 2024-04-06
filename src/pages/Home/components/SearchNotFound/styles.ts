import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    word-break: break-word;
  }
`;
