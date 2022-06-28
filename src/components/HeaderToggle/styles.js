import styled, { css } from "styled-components";

export const Container = styled.nav`
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

  ${(props) =>
    !props.isSelected &&
    css`
      &:hover {
        border-bottom: 2px dashed ${(props) => props.theme.textColorPrimary};
      }
    `}
`;
