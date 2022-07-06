import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Container, Temperature, Greeting } from "./styles";

const SkeletonTemperature = () => {
  return (
    <Container>
      <SkeletonTheme
        baseColor="#c3d6ea"
        highlightColor="#96c7ff"
        borderRadius="0.2rem"
        duration={2}
      >
        <div>
          <Temperature>
            <div>
              <Skeleton height="5rem" width="8rem" />
              <Skeleton height=".7rem" width="12rem" />
              <Skeleton height=".6rem" width="10rem" />
            </div>

            <div>
              <Skeleton circle height="7rem" width="7rem" />
              <Skeleton height=".5rem" width="8rem" />
            </div>
          </Temperature>
          <Greeting>
            <Skeleton height=".7rem" width="18rem" />
            <Skeleton height=".5rem" width="11rem" />
            <Skeleton height=".6rem" width="8rem" />
          </Greeting>
        </div>
      </SkeletonTheme>
    </Container>
  );
};

export default SkeletonTemperature;
