import React from 'react';
import './header.css';

import ReactWOW from 'react-wow';

export default function () {
    return (
        <header className='header'>
            <div
                className="background"
                style={{ backgroundImage: "url('assets/images/fondo.jpg')" }}>
            </div>
            <div className='info'>
                <div className="text">
                    <ReactWOW animation='fadeIn' delay='0.5s' duration='1.5s'>
                        <h2>Feel Better Food</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluatem accusantium doloremque laudam.</p>
                        <button className='btn order-btn'>Order now</button>
                    </ReactWOW>
                </div>
                <div
                    className="slider"
                    style={{ backgroundImage: "url('assets/images/coco.jpg')" }}>
                </div>
            </div>
        </header>
    );
}