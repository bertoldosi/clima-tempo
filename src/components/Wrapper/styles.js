import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;

  main {
    width: 90%;
    max-width: 50rem;
    margin: 0 auto;
    flex: 1;
  }

  footer {
    width: 100%;
    min-height: 4rem;
    display: flex;
    margin-top: 2rem;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;
  }
`;
