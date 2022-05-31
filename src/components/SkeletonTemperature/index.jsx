import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Container, Content, Temperature, Greeting } from "./styles";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonTemperature = () => {
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
            <div>
              <Skeleton height="5rem" width="8rem" />
              <Skeleton height=".5rem" width="13rem" />
              <Skeleton height=".5rem" width="11rem" />
            </div>

            <div>
              <Skeleton circle height="7rem" width="7rem" />
              <Skeleton height=".5rem" width="8rem" />
            </div>
          </Temperature>
          <Greeting>
            <Skeleton height=".6rem" width="13rem" />
            <Skeleton height=".5rem" width="11rem" />
            <Skeleton height=".5rem" width="10rem" />
          </Greeting>
        </Content>
      </SkeletonTheme>
    </Container>
  );
};

export default SkeletonTemperature;
