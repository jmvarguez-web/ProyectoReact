import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../assets/photo2.jpg";
import slide2 from "../assets/photo-3.jpg";
import slide3 from "../assets/photo-.jpg";

export default function App() {
  return (
    <div>
        <section className="slider container mb-3">
        <Carousel>
    <Carousel.Item className='slide'>
        <img
        className="d-block w-100"
        src= {slide1}
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item className='slide'>
        <img
        className="d-block w-100"
        src={slide2}
        alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item className='slide'>
        <img
        className="d-block w-100"
        src={slide3}
        alt="Third slide"
        />
    </Carousel.Item>
    </Carousel>
    </section>
</div>)}