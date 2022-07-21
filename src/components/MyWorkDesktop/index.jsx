import React from "react";
import Person1 from "../../assets/images/Person1.png";
import Person2 from "../../assets/images/Person13.png";
import Person3 from "../../assets/images/Person9.png";
import {
  Container,
  WorkCardContainer,
  Image,
  CardTitle,
  CardText,
  MeIcon,
  ArrowWrap,
  Arrow,
} from "./MyWorkDesktop";

const MyWorkDesktop = () => {
  return (
    <Container>
      <WorkCardContainer left="25%" top="5em">
        <Image src={Person1} />
        <CardTitle>pralki</CardTitle>
        <CardText>click me!</CardText>
      </WorkCardContainer>
      <WorkCardContainer left="50%" top="10em">
        <Image src={Person2} />
        <CardTitle>B28</CardTitle>
        <CardText>click me!</CardText>
      </WorkCardContainer>
      <WorkCardContainer left="75%" top="5em">
        <Image src={Person3} />
        <CardTitle>SPS</CardTitle>
        <CardText>click me!</CardText>
      </WorkCardContainer>
      <MeIcon />
      <ArrowWrap left="27em">
        <Arrow left />
      </ArrowWrap>
      <ArrowWrap right="27em">
        <Arrow />
      </ArrowWrap>
    </Container>
  );
};

export default MyWorkDesktop;
