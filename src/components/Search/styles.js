import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  border-radius: 0.3rem;
  background: ${(props) => props.theme.backgroundColorWhite};
  position: relative;
  margin-top: 2rem;

  svg {
    font-size: 2rem;
    margin: 0 1rem;
    color: #333;
    z-index: 2;
  }
`;

export const Details = styled.div`
  width: 100%;
  max-width: 50rem;

  input {
    width: 100%;
    margin-left: 1rem;
    padding: 0.8rem;
    border: none;
    font-size: 1.5rem;
    color: ${(props) => props.theme.textColorSecundary};

    &::placeholder {
      font-size: 1.5rem;
      color: ${(props) => props.theme.textColorSecundaryOpacity};
    }
  }

  ul {
    width: 100%;
    overflow-y: auto;
    max-width: 50rem;
    background: ${(props) => props.theme.backgroundColorWhite};
    position: absolute;
    z-index: 2;
    border-radius: 0.3rem;

    padding: 0;

    li {
      color: ${(props) => props.theme.textColorSecundary};
      list-style: none;
      font-size: 1.5rem;
      padding: 1rem 1.5rem;

      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.textColorPrimary};
        background: ${(props) => props.theme.backgroundColorSecundary};
      }
    }
  }
`;
