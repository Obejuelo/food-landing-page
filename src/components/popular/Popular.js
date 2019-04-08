import React from 'react';
import './popular.css';

import ReactWOW from 'react-wow'

import Slider from "react-slick";
import Dish from '../dish/Dish';

export default () => {

    let settings = {
        className: 'my-5',
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: true,
        autoplay: true
    }

    return (
        <div className='container popular mt-5'>
            <ReactWOW animation='fadeIn'>
                <h3>The Most</h3>
                <h3>Popular Dishes</h3>
            </ReactWOW>

            <Slider {...settings}>
                <Dish img='dish1.jpg' delay='0.2s' />
                <Dish img='dish2.jpg' delay='0.3s' />
                <Dish img='dish3.jpg' delay='0.4s' />
                <Dish img='dish1.jpg' delay='0.5s' />
                <Dish img='dish2.jpg' delay='0.6s' />
                <Dish img='dish3.jpg' delay='0.7s' />
            </Slider>

        </div>
    )
}