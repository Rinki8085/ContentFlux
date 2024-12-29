import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Homepage.css';
import Slider from "react-slick";

let image_data = [
   {
      "id":1,
      "img":"/images/clientlogo_1.png"
   },
   {
      "id":2,
      "img":"/images/clientlogo_2.png"
   },
   {
      "id":3,
      "img":"/images/clientlogo_3.png"
   },
   {
      "id":4,
      "img":"/images/clientlogo_4.png"
   },
   {
      "id":5,
      "img":"/images/clientlogo_5.png"
   },
   {
      "id":6,
      "img":"/images/clientlogo_6.png"
   }
];

class InfinteScrollSlider extends React.Component {
  render() {
    var settings = {
      dots:false,
      slidesToShow:4,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed:1500,
      arrows:false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots:false,
            slidesToShow:2,
            slidesToScroll:1,
            autoplay:true,
            autoplaySpeed:1500,
            arrows:false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            dots:false,
            slidesToShow:4,
            slidesToScroll:1,
            autoplay:true,
            autoplaySpeed:1500,
            arrows:false,
          }
        }]
    }

  const renderSlides = () =>
    image_data.map(item => (
      <div key={item.id}>
        <img style={{marginLeft:"90px"}} src={item.img} alt="client_logg" width="129" height="86px" />
      </div>
    ));

  return (
    <div className="client_slider" >
      <Slider
        {...settings}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}}

export default InfinteScrollSlider;
