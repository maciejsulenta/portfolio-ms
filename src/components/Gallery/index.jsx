import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCube } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { StyledSwiper, Image } from "./Gallery";

const Gallery = ({ project }) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const slider = project.mockups.map((mockup, i) => (
      <SwiperSlide key={i} tag="li">
        <Image src={mockup} alt={`slide-${i}`} />
      </SwiperSlide>
    ));
    setSlides(slider);
  }, []);

  return (
    <StyledSwiper
      id="main"
      className="swiper link"
      tag="section"
      wrapperTag="ul"
      modules={[Pagination, Autoplay, EffectCube]}
      effect={"cube"}
      cubeEffect={{
        shadow: false,
        slideShadows: false,
      }}
      autoplay={{ delay: 3000 }}
      speed={1000}
      pagination
      spaceBetween={0}
      slidesPerView={1}
      preloadImages={true}
      loop={true}
      init={true}
      centeredSlides={true}
      initialSlide="1"
    >
      {slides}
    </StyledSwiper>
  );
};

export default Gallery;
