import React from 'react'
import image from '../../assets/pexels-photo-406014.jpeg'
import style from './landing.module.css'
import Slider from 'react-slick';
import image2 from '../../assets/pexels-photo-551628.webp'
import image3 from '../../assets/pexels-photo-333083.jpeg'
import image4 from '../../assets/pexels-photo-220938.jpeg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import navbar from '../../components/navbar/navbar';
import { NavLink } from 'react-router-dom';


const landing = () => {

  const Carrusel = () => {
    const images = [
      image2,
      image3,

    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings} className={style.customSlider}>
        {images.map((image, index) => (
          <div key={index} className={style.slide}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%"}} />
          </div>
        ))}
      </Slider>
    );

  }


  return (

    <div className={style.landingCont}>
      <div className={style.ImageFondo}>
        {/* <Carrusel /> */}

      <NavLink to={"home"}>

        <input type="submit" value="Start" onClick={navbar}/>
        
      </NavLink>
        


      </div>

    </div>
  )
}


export default landing


