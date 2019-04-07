import React from 'react';
import './header.css';

export default function () {
    return (
        <header className='header'>
            <div
                className="background"
                style={{ backgroundImage: "url('assets/images/fondo.jpg')" }}>
            </div>
            <div className='info'>
                <div className="text">
                    <h2>Feel Better Food</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluatem accusantium doloremque laudam.</p>
                    <button className='btn order-btn'>Order now</button>
                </div>
                <div
                    className="slider"
                    style={{ backgroundImage: "url('assets/images/coco.jpg')" }}>
                </div>
            </div>
        </header>
    );
}