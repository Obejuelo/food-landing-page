import React from 'react';
import ReactWOW from 'react-wow'

export default ({ img, delay }) => {

    let image = 'assets/images/dish/';
    return (
        <div className='dish-slide' id='dish'>
            <ReactWOW animation='fadeInUpBig' delay={delay}>
                <img src={`${image}${img}`} alt={img} className='img-fluid' />
                <div className='dish-info'>
                    <p className='h6 my-2'>Doleora Vrtias</p>
                    <p className='subtitle'>Beasnseq usauntur magni</p>
                    <p className='subtitle'>dolores..</p>
                    <a href="/">More...</a>
                </div>
            </ReactWOW>
        </div>
    )
}