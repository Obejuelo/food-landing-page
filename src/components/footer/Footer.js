import React from 'react';
import './footer.css';

export default function () {
    function getYear() {
        return new Date().getFullYear()
    }
    return (
        <div className='footer'>
            <div className="social">
                <div className="face"><i className="fab fa-facebook-f"></i></div>
                <div className="twit"><i className="fab fa-twitter"></i></div>
                <div className="inta"><i className="fab fa-instagram"></i></div>
                <div className="yout"><i className="fab fa-youtube"></i></div>
            </div>
            <div className="copy">
                <p>&copy; Food Landing Page {getYear()}</p>
            </div>
        </div>
    )
}