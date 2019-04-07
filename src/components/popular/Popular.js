import React, { useState, useEffect } from 'react';
import './popular.css';

import Slider from "react-slick";
import Dish from '../dish/Dish';

export default () => {
    const [info, setInfo] = useState(false);

    useEffect(() => {
        getActive()
    }, []);

    function getActive() {
        let active = document.getElementById('dish');
        console.log(active);
    }

    let settings = {
        className: 'mt-5',
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 7000,
        pauseOnHover: true,
        arrows: true
        // autoplay: true
    }

    return (
        <div className='container popular mt-5'>
            <h3>The Most</h3>
            <h3>Popular Dishes</h3>

            <Slider {...settings}>
                <Dish img='dish1.jpg' id='dish' />
                <Dish img='dish2.jpg' />
                <Dish img='dish3.jpg' />
                <Dish img='dish1.jpg' />
                <Dish img='dish2.jpg' />
                <Dish img='dish3.jpg' />
            </Slider>

        </div>
    )
}