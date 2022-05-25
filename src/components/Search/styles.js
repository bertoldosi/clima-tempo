import styled from "styled-components";

export const Container = styled.div`
  max-width: 50rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  border-radius: 0.3rem;
  background: ${(props) => props.theme.backgroundColorWhite};

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

  svg {
    font-size: 2rem;
    margin: 0 1rem;
    color: #333;
  }
`;
