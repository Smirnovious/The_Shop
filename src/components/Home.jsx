import React, { useState,  } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Product from './Product';

const Home = () => {
  const [index, setIndex] = useState(0);

    
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100" height="500px"
          src="\assets\home\shopping.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" height="500px"
          src="\assets\home\shopping2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" height="500px"
          src="\assets\home\shopping3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Product />
    </>
  )
}

export default Home