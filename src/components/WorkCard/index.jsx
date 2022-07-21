import React from "react";
import { Container, Image, CardTitle, CardText} from "./WorkCard";

const WorkCard = (props) => {
  return (
    <Container left={props.left} top={props.top}>
      <Image src={props.img} />
      <CardTitle>{props.text}</CardTitle>
      <CardText>click me!</CardText>
    </Container>
  );
};

export default WorkCard;
