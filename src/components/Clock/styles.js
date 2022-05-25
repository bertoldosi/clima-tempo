import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  h1 {
    font-size: 5rem;
    font-weight: 100;
    font-family: ${(props) => props.theme.textFontFamilyTime};
  }

  h2,
  h3 {
    font-size: 1.2rem;
    font-weight: 100;
    color: ${(props) => props.theme.textColorSecundary};
  }

  p {
    max-width: 45rem;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    margin-top: 5rem;
    font-style: oblique;

    cite {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }

  h4 {
    font-size: 1.5rem;
  }
`;
