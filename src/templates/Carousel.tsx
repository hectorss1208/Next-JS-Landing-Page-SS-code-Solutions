import React from "react";
import Slider from "react-slick";

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images: string[] = [
    "4380747.jpg",
    "4854333.jpg",
    "7054169.jpg",
    // Add more image paths as needed
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={`/assets/images/${image}`}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", height: "400px" }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
