import React from "react";
import Person1 from "../../assets/images/Person21.png";
import Person2 from "../../assets/images/Person16.png";
import Person3 from "../../assets/images/Person19.png";
import {
  Container,
  Title,
  WorkCardsWrap,
  WorkCardContainer,
  CardTitle,
  CardImage,
  Footer,
  ScrollButton,
  Arrow,
} from "./MyWorkMobile";

const MyWorkMobile = () => {
  return (
    <Container name="work-mobile">
      <Title>
        my <br /> work
      </Title>
      <WorkCardsWrap>
        <WorkCardContainer>
          <CardTitle>B28</CardTitle>
          <CardImage src={Person1} />
        </WorkCardContainer>
        <WorkCardContainer>
          <CardTitle>SPS</CardTitle>
          <CardImage src={Person2} />
        </WorkCardContainer>
        <WorkCardContainer>
          <CardTitle>pralki</CardTitle>
          <CardImage src={Person3} />
        </WorkCardContainer>
        <Footer>
          <Title footer>
            the <br /> end
          </Title>
          <ScrollButton smooth={true} duration={500} to="home">
            <Arrow />
          </ScrollButton>
        </Footer>
      </WorkCardsWrap>
    </Container>
  );
};

export default MyWorkMobile;
