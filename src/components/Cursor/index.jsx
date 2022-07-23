import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Container, Circle } from "./Cursor";

const Cursor = () => {
  useEffect(() => {
    const worm = {
      segs: [...document.querySelectorAll(".seg")],
      pos: [],
      length: 0,
    };

    worm.length = worm.segs.length * 0.25;
    worm.segs.forEach((s, i) => {
      worm.pos[i] = { x: 0, y: 0 };
    });

    document.addEventListener("mousemove", function (e) {
      let x = e.clientX - 10,
        y = e.clientY;
      worm.pos[0] = { x: x, y: y };

      for (let i = 0; i < worm.segs.length - 1; i++) {
        let np = worm.pos[i + 1],
          cp = worm.pos[i];
        let dx = cp.x - np.x,
          dy = cp.y - np.y,
          ang = Math.atan2(dy, dx);
        worm.pos[i + 1] = {
          x: cp.x - Math.cos(ang) * worm.length,
          y: cp.y - Math.sin(ang) * worm.length,
        };
      }

      worm.pos.forEach((p, i) => {
        let seg = worm.segs[i];
        seg.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      });
    });

    const navLinks = document.querySelectorAll(".link");
    const cursorHead = document.getElementById("first");
    const snake = [...document.querySelectorAll(".seg")];
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        snake.forEach((circle) => {
          circle.style.background =
            "linear-gradient(to left, #e65c00, #f9d423)";
        });
      });
      link.addEventListener("mouseleave", () => {
        snake.forEach((circle) => {
          circle.style.background =
            "linear-gradient(to right, #ef473a, #a52a2a)";
        });
      });
    });
  }, []);

  return (
    <Container>
      <Circle className="seg" id="first" first></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
      <Circle className="seg"></Circle>
    </Container>
  );
};

export default Cursor;
