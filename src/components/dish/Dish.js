import React from 'react';

export default ({ img }) => {
    let image = 'assets/images/dish/';
    return (
        <div className='dish-slide'>
            <img src={`${image}${img}`} alt={img} className='img-fluid' />
            <div className='dish-info'>
                <p className='h6 my-2'>Doleora Vrtias</p>
                <p className='subtitle'>Beasnseq usauntur magni</p>
                <p className='subtitle'>dolores..</p>
                <a href="/">More...</a>
            </div>
        </div>
    )
}