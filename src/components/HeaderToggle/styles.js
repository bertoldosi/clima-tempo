import styled, { css } from "styled-components";

export const Container = styled.nav`
  margin-bottom: 5rem;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;

    li {
      font-size: 1.5rem;
      padding: 1rem;
    }
  }
`;

export const Link = styled.a`
  color: ${(props) => props.theme.textColorPrimary};
  text-decoration: none;

  ${(props) =>
    props.isSelected &&
    css`
      border-bottom: 2px solid ${(props) => props.theme.textColorPrimary};
    `}
`;
