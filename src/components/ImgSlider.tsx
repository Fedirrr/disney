import React, {useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {sliderArray} from "./mock";
import {Link} from "react-router-dom";

const ImgSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true
    };

    return (
        <Carousel {...settings}>
            {sliderArray.map(({imgSource, id}) => (
                <Wrap key={id}>
                    <Link to={`/sliderDetails/${id}`}>
                        <span>
                            <img src={imgSource} alt={`slider-image-${imgSource}`} />
                        </span>
                    </Link>
                </Wrap>
            ))}
        </Carousel>
    )
};
export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(255, 255, 255);
    }
  }

  li.slick-active button:before {
    color: white;

  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  height: 400px;
  position: relative;
  img {
    border: 4px solid transparent;
    margin: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

