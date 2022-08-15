import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Container, Content, Temperature, Weather } from "./styles";

const SkeletonList = () => {
  return (
    <Container data-testid="skeleton-element">
      <SkeletonTheme
        baseColor="#c3d6ea"
        highlightColor="#96c7ff"
        borderRadius="0.2rem"
        duration={2}
      >
        <Content>
          <Temperature>
            <Skeleton height=".5rem" width="6rem" />
            <Skeleton height=".5rem" width="8rem" />
          </Temperature>
          <Weather>
            <Skeleton circle height="5rem" width="5rem" />
            <div>
              <Skeleton height=".5rem" width="2rem" />
              <Skeleton height=".5rem" width="2rem" />
            </div>
          </Weather>
        </Content>

        <Content>
          <Temperature>
            <Skeleton height=".5rem" width="6rem" />
            <Skeleton height=".5rem" width="8rem" />
          </Temperature>
          <Weather>
            <Skeleton circle height="5rem" width="5rem" />
            <div>
              <Skeleton height=".5rem" width="2rem" />
              <Skeleton height=".5rem" width="2rem" />
            </div>
          </Weather>
        </Content>

        <Content>
          <Temperature>
            <Skeleton height=".5rem" width="6rem" />
            <Skeleton height=".5rem" width="8rem" />
          </Temperature>
          <Weather>
            <Skeleton circle height="5rem" width="5rem" />
            <div>
              <Skeleton height=".5rem" width="2rem" />
              <Skeleton height=".5rem" width="2rem" />
            </div>
          </Weather>
        </Content>

        <Content>
          <Temperature>
            <Skeleton height=".5rem" width="6rem" />
            <Skeleton height=".5rem" width="8rem" />
          </Temperature>
          <Weather>
            <Skeleton circle height="5rem" width="5rem" />
            <div>
              <Skeleton height=".5rem" width="2rem" />
              <Skeleton height=".5rem" width="2rem" />
            </div>
          </Weather>
        </Content>

        <Content>
          <Temperature>
            <Skeleton height=".5rem" width="6rem" />
            <Skeleton height=".5rem" width="8rem" />
          </Temperature>
          <Weather>
            <Skeleton circle height="5rem" width="5rem" />
            <div>
              <Skeleton height=".5rem" width="2rem" />
              <Skeleton height=".5rem" width="2rem" />
            </div>
          </Weather>
        </Content>

        <Content>
          <Temperature>
            <Skeleton height=".5rem" width="6rem" />
            <Skeleton height=".5rem" width="8rem" />
          </Temperature>
          <Weather>
            <Skeleton circle height="5rem" width="5rem" />
            <div>
              <Skeleton height=".5rem" width="2rem" />
              <Skeleton height=".5rem" width="2rem" />
            </div>
          </Weather>
        </Content>

        <Content>
          <Temperature>
            <Skeleton height=".5rem" width="6rem" />
            <Skeleton height=".5rem" width="8rem" />
          </Temperature>
          <Weather>
            <Skeleton circle height="5rem" width="5rem" />
            <div>
              <Skeleton height=".5rem" width="2rem" />
              <Skeleton height=".5rem" width="2rem" />
            </div>
          </Weather>
        </Content>

        <Content>
          <Temperature>
            <Skeleton height=".5rem" width="6rem" />
            <Skeleton height=".5rem" width="8rem" />
          </Temperature>
          <Weather>
            <Skeleton circle height="5rem" width="5rem" />
            <div>
              <Skeleton height=".5rem" width="2rem" />
              <Skeleton height=".5rem" width="2rem" />
            </div>
          </Weather>
        </Content>
      </SkeletonTheme>
    </Container>
  );
};

export default SkeletonList;
