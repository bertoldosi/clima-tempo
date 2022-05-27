import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5rem;
  position: relative;
`;

export const Temperature = styled.div`
  margin-left: 2rem;

  strong {
    display: flex;
    text-align: end;
    font-size: 5rem;
    line-height: 5rem;
    position: relative;

    p {
      top: -1rem;
      left: 6rem;
      position: absolute;
      font-size: 3.5rem;
    }
  }

  span {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const MaxMin = styled.div`
  white-space: nowrap;

  span {
    font-size: 1.5rem;
  }
`;

export const Weather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 15rem;
  }

  p {
    max-width: 15rem;
    min-width: 15rem;

    position: absolute;
    font-size: 1.2rem;
    text-align: center;
    bottom: 1.2rem;
  }
`;
