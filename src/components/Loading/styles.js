import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-weight: 100;
    font-size: 1.5rem;
  }

  a {
    font-size: 1.2rem;
    color: ${(props) => props.theme.textColorSecundary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
