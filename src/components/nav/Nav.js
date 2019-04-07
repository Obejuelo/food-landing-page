import React from 'react';
import './nav.css';

import { bubble as Menu } from 'react-burger-menu'

export default function () {

    return (
        <div className="nav">
            <Menu customBurgerIcon={<img src="assets/icons/menu.png" alt='' />}>
                <a className="menu-item" href="/">Home</a>
                <a className="menu-item" href="/burgers">Burgers</a>
                <a className="menu-item" href="/pizzas">Pizzas</a>
                <a className="menu-item" href="/desserts">Desserts</a>
            </Menu>
            <div className='sign-container'>
                <span className='icon'><i className="fas fa-search"></i></span>
                <button className='btn btn-sign btn-sm'>Sign In</button>
            </div>
        </div>
    );
}