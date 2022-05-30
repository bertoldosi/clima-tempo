import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 100;
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
