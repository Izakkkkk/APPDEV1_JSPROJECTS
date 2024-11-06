import React from 'react';
import './App.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className='footer'>
        <h5>Joemer Izak Avendano - {currentYear}</h5>
        </div>
    );
}

export default Footer;