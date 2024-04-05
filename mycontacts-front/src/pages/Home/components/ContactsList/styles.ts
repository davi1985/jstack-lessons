import styled from "styled-components";
import { OrderBy } from "../../../../@types";

type ListHeaderStyleProps = { orderBy: OrderBy };

export const ListHeader = styled.header<ListHeaderStyleProps>`
  margin-top: 24px;

  margin-bottom: 8px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      transform: ${({ orderBy }) =>
        orderBy === "asc" ? "rotate(180deg)" : "rotate(0deg)"};
      transition: transform 0.2s ease-in;
    }
  }
`;

export const Card = styled.div`
  padding: 16px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray["200"]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    a {
    }

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
