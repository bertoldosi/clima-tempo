import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Container, Content, Temperature, Weather } from "./styles";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonList = () => {
  return (
    <Container>
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
