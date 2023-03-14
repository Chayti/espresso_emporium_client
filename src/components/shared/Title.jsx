import React from 'react';
import './Title.css';
import logo from '../../assets/logo1.png'

export function Title() {
    return (
        <div className="py-0 flex items-center justify-center bg-image text-white text-4xl font-semibold">
            <img className="logo mr-2" src={logo} alt="" />
            <h2>Espresso Emporium</h2>
        </div>
    );
}