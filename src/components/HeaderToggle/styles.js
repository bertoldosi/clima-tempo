import styled from "styled-components";

export const Container = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: center;

    li {
      font-size: 1.5rem;
      padding: 1rem;

      a {
        color: ${(props) => props.theme.textColorPrimary};
        text-decoration: none;
        border-bottom: 2px solid ${(props) => props.theme.textColorPrimary};
      }
    }
  }
`;
