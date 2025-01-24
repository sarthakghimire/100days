import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <h2 id="gallery">Gallery</h2>
      <Slider {...settings}>
        <div>
          <img
            src="https://election.gov.np/admin/public//storage/banner/ecn_photo.jpg"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="https://election.gov.np/admin/public//storage/banner/FEMBoSA_12th.jpg"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://election.gov.np/admin/public//storage/banner/Pratibedan_2080_81_Website.jpg"
            alt="Slide 3"
          />
        </div>
      </Slider>
    </>
  );
};

export default Gallery;
