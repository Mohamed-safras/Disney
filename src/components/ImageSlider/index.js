import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Wrap } from "./style";
import slider_badag from "../../assets/images/slider-badag.jpg";
import slider_badging from "../../assets/images/slider-badging.jpg";
import slider_scale from "../../assets/images/slider-scale.jpg";
import slider_scales from "../../assets/images/slider-scales.jpg";
const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={slider_badag} alt="slider_badag" />
      </Wrap>
      <Wrap>
        <img src={slider_badging} alt="slider_badging" />
      </Wrap>
      <Wrap>
        <img src={slider_scale} alt="slider_scale" />
      </Wrap>
      <Wrap>
        <img src={slider_scales} alt="slider_scales" />
      </Wrap>
    </Carousel>
  );
};

export default ImageSlider;
