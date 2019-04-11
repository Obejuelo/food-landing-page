import React, { useState, useEffect } from 'react';
import './popular.css';

import ReactWOW from 'react-wow'

import Slider from "react-slick";
import Dish from '../dish/Dish';

export default () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function changeWidth() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('scroll', changeWidth);
        }
    }, [width]);

    function changeSlideToShow() {
        if (width < 450)
            return 1;
        if (width < 767)
            return 2
        return 3;
    }

    let settings = {
        className: 'my-5',
        dots: true,
        infinite: true,
        slidesToShow: changeSlideToShow(),
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

            <div className='li-sections mt-4'>
                <li>Breackfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
                <li>Party Menu</li>
            </div>

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