import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.textColorPrimary};

  & + & {
    margin-top: 2rem;
  }
`;

export const Day = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.5rem;
  }

  span {
    line-height: 1rem;
    font-size: 1.2rem;
  }
`;

export const Weather = styled.div`
  display: flex;
  position: relative;

  img {
    top: -4rem;
    right: 1rem;
    position: absolute;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-left: 1rem;

    strong {
      line-height: 1.5rem;
      font-size: 1.2rem;
    }
  }
`;
