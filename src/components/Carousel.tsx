import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 100, // Shorter interval for a more dynamic feel
  arrows: false,
  autoplayButton: true,
  autoplayButtonPosition: "bottom",
  autoplayButtonColor: "#000",
  autoplayPauseOnHover: true,
  autoplayPauseOnDotsHover: true,
  responsive: [
    {
      breakpoint: 1024, // For screens smaller than 1024px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600, // For screens smaller than 600px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480, // For screens smaller than 480px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
};

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {images.map((image: string, index: number) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} width={75} height={75} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
