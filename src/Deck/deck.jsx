import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './deck.css';
import TeamImg from'../images/team.jpg';


import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';

const Deck = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true 
  };

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <>
    <h1>Presentation Deck</h1>
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
    <h1 className='team'>Team</h1>
    <div className="img">
      <img className='image' src={TeamImg} alt='Team Image' />
    </div>
    </>
  );
};

export default Deck;
