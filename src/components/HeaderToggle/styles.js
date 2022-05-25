import styled from "styled-components";

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

      a {
        color: ${(props) => props.theme.textColorPrimary};
        text-decoration: none;
      }
    }

    li:nth-child(3) {
      a {
        border-bottom: 2px solid ${(props) => props.theme.textColorPrimary};
      }
    }
  }
`;
