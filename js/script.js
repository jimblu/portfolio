import Swup from "swup";
import SwupSlideTheme from '@swup/slide-theme';

const swup = new Swup({
    plugins: [new SwupSlideTheme()]
  });
const redBall = document.querySelector(".redBall");
const yellowBall = document.querySelector(".yellowBall");
const blueBall = document.querySelector(".blueBall");

//jaune#feed00
//rouge#ff0000
//bleubule#2e00ea
//bleuecran#6396ff

document.onmousemove = (ev) => {
  const positionX = ev.x;
  const positionY = ev.y;
  redBall.style.transform = `translate(${-positionX/25}px, ${-positionY/20}px)`;
  yellowBall.style.transform = `translate(${-positionX/28}px, ${positionY/26}px)`;
  blueBall.style.transform = `translate(${positionX/18}px, ${-positionY/14}px)`;
};
