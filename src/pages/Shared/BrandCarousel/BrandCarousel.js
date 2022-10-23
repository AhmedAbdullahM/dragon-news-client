import React from 'react';
import { Carousel } from 'react-bootstrap';
import alps from '../../../assets/Brands/alps.jpg' 
import mountian from '../../../assets/Brands/mountains.jpg' 
const BrandCarousel = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={alps}
          alt="First slide"
        />      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mountian}
          alt="Second slide"
        />
      </Carousel.Item>
      
    </Carousel>
    );
};

export default BrandCarousel;