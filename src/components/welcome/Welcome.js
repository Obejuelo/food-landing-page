import React from 'react';
import './welcome.css';

export default function () {
    return (
        <section className='section container pt-3'>
            <h3 className='text-center'>Hello &</h3>
            <h3 className='text-center'>Welcome To Our Restaurant</h3>
            <div className="row justify-content-center align-items-center my-4">
                <div className="col-md-6 image">
                    <img src="assets/images/img8.jpg" alt="img" className='img-fluid' />
                </div>
                <div className="col-md-6 info">
                    <p className='text-justify'>Sed ut perspiciatis unde omnis iste natus error sit voluatem accusantium doloremque laudam, totam rem aperiam, eaque ipsa quae inventore veritatis et quasi architectoae vitae dicta sunt explicabo mo enim ipsam.</p>
                    <button className='btn view-menu'>View Our Menu</button>
                </div>
            </div>
        </section>
    )
}