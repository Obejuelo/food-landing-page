import React from 'react';
import './welcome.css';

import ReactWOW from 'react-wow'

export default function () {
    return (
        <section className='section container'>
            <ReactWOW animation='fadeIn' delay='0.2s'>
                <h3 className='text-center mt-5'>Hello &</h3>
                <h3 className='text-center mb-5'>Welcome To Our Restaurant</h3>
            </ReactWOW>
            <div className="row justify-content-center align-items-center my-4">
                <ReactWOW animation='fadeIn' delay='0.5s'>
                    <div className="col-md-6 image">
                        <img src="assets/images/img8.jpg" alt="img" className='img-fluid' />
                    </div>
                </ReactWOW>
                <div className="col-md-6 info">
                    <ReactWOW animation='fadeInRight' delay='0.5s'>
                        <p className='text-justify'>Sed ut perspiciatis unde omnis iste natus error sit voluatem accusantium doloremque laudam, totam rem aperiam, eaque ipsa quae inventore veritatis et quasi architectoae vitae dicta sunt explicabo mo enim ipsam.</p>
                        <button className='btn view-menu'>View Our Menu</button>
                    </ReactWOW>
                </div>
            </div>
        </section>
    )
}