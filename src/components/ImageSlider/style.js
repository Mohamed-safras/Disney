import styled from "styled-components";

import Slider from "react-slick";
export const Carousel = styled(Slider)`
  margin-top: 15px;
  padding: 0 20px;
  ul li button {
    &:before {
      font-size: 10px;
      color: #fff;
      margin-top: 10px;
      transform: scale(0.8);
      opacity: 0.1;
    }
  }

  li.slick-active button:before {
    color: #fff;
    transform: scale(1);
    opacity: 1;
  }
  .slick-list {
    overflow: visible;
  }

  button {
    z-index: -1;
  }
`;

export const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition-duration: 300ms;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
  @media screen and (max-width: 900px) {
    height: 150px;
  }
`;
