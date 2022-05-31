import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 50rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  margin-top: 8rem;
`;

export const Temperature = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5rem;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > span {
      margin-bottom: 0.5rem;
    }
  }
`;

export const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;

  span:nth-child(3) {
    margin-top: 4rem;
  }
`;
