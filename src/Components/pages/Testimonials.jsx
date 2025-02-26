import React from "react";
import { testimonials } from "../data/data";
import { FormatQuote } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading from "../common/Heading";
function Testimonials() {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return(
    
  <>
 
  <section className='testimonials hero'>
    
    <div className="container">
    <Heading title='Testimonials'/>
    <Slider {...settings}>
      {testimonials.map((context, index) => (
        <div className="box" key={index}>
          <i data-aos='zoom-out-up'>
            <FormatQuote />
            </i>
            <p data-aos='zoom-out-down'>{context.text}</p>
            <div className="img">
              <img src={context.image} alt="img" data-aos='zoom-out-right' />
            </div>
            <h3 data-aos='zoom-out-left'>{context.name}</h3>
            <label data-aos='zoom-out'>{context.post}</label>
          
        </div>
      ))}
      </Slider>

         </div>
  </section>
  
  
  </>
);
}

export default Testimonials;    