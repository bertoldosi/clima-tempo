import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 50rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  padding-bottom: 0.5rem;

  & {
    margin-bottom: 1rem;
  }
`;

export const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const Weather = styled.div`
  display: flex;
  justify-content: end;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
  }
`;
