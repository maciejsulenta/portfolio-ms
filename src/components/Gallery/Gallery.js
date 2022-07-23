import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  min-width: 280px;
  width: 90%;
  min-height: 450px;
  height: 80vh;
  max-height: 600px;
  font-size: 6em;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    height: 65vh;
    flex: 1;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
